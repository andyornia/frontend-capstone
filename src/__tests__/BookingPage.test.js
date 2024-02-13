import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'; // Assuming your App component is in the parent directory

test('Clicking on a link navigates to the About page and finds an element by ID', async () => {
  // Render your component
  render(<App />); // Assuming your App component renders a link to the About page

  // Simulate clicking on the link
  // You can use fireEvent or userEvent to simulate the click event
  // For example:
  // fireEvent.click(screen.getByText('About')); // Using fireEvent
  userEvent.click(screen.getAllByText('Reservations')[0]); // Using userEvent

  // Wait for the page to stabilize and the desired element to appear
  await waitFor(() => {
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
  });

  // Look for an element by its ID
  const options = [... screen.getByTestId('reservationTime')];
  expect(options).toHaveLength(12); // Assuming there are 12 options
  // Assert that each option has the correct text content
  const optionTexts = ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  options.forEach((option, index) => {
    expect(option).toHaveTextContent(optionTexts[index]);
  });
  
  // Find the select element
  const selectElement = screen.getByTestId('reservationTime');

  // Simulate selecting an option
  fireEvent.change(selectElement, { target: { value: '14:00' } });

  // Assert that onSelect function is called with the selected value
  expect(selectElement).toHaveValue('14:00');

  fireEvent.click(screen.getByText('Reserve'));
  
  await waitFor(() => {
    const optionElement14 = screen.getByText('14:00');
    // Assert that the option element has the class "unavailable"
    expect(optionElement14).toHaveTextContent('14:00');
    expect(optionElement14).toHaveClass('unavailable');
    
    const optionElement11 = screen.getByText('11:00');
    // Assert that the option element has the class "unavailable"
    expect(optionElement11).toHaveTextContent('11:00');
    expect(optionElement11).not.toHaveClass('unavailable');    
  });


  
});
