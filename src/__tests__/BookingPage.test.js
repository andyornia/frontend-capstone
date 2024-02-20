import { render, screen, fireEvent, waitFor, jest, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'; // Assuming your App component is in the parent directory


test('Loading the reservations page shows a drop down menu from the initializeTimes function', async () => {

  // Render the application
  render(<App />);

  // Simulate clicking on the reservations page
  // this will trigger the initializeTimes function as part of the call to fetchAPI()
  act(() => {
    userEvent.click(screen.getAllByText('Reservations')[0]);
  });
  
  // Wait for the page to stabilize and the desired element to appear
  await waitFor(() => {
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
  }, {timeout: 5000});
  
  // Wait for the page to load the available times from the API
  await waitFor(() => {
    expect(screen.getByText('22:00')).toBeInTheDocument();
  }, {timeout: 5000});
  
  const options = [... screen.getByTestId('reservationTime')];
  
  expect(options).toHaveLength(13); // Assuming there are 12 options
  // Assert that each option has the correct text content
  const optionTexts = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  options.forEach((option, index) => {
    expect(option).toHaveTextContent(optionTexts[index]);
  });
  
  // Find the select element
  const selectElement = screen.getByTestId('reservationTime');

  // Simulate selecting an option
  fireEvent.change(selectElement, { target: { value: '14:00' } });

  // Assert that onSelect function is called with the selected value
  expect(selectElement).toHaveValue('14:00');
  
});


test('Changing the date on the reservations page re-populates the list of available times using the updateTimes function', async () => {

  // Render the application
  render(<App />);

  // Simulate clicking on the reservations page
  // this will trigger the initializeTimes function as part of the call to fetchAPI()
  act(() => {
    userEvent.click(screen.getAllByText('Reservations')[0]);
  });
  
  // Wait for the page to stabilize and the desired element to appear
  await waitFor(() => {
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
  }, {timeout: 5000});
  
  // Wait for the page to load the available times from the API
  await waitFor(() => {
    expect(screen.getByText('22:00')).toBeInTheDocument();
  }, {timeout: 5000});
  
  // Find the select element
  const selectElement = screen.getByTestId('reservationDate');

  // Simulate selecting an option
  fireEvent.change(selectElement, { target: { value: '2024-02-18' } });

  // Wait for the page to load the available times from the API
  await waitFor(() => {
    expect(screen.getByText('22:00')).toBeInTheDocument();
    const options = [... screen.getByTestId('reservationTime')];
    
    expect(options).toHaveLength(13); // Assuming there are 12 options
    // Assert that each option has the correct text content
    const optionTexts = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(optionTexts[index]);
    });
  }, {timeout: 5000});
  
});



test('Form submission takes you to the reservation confirmed page', async () => {

  // Render the application
  render(<App />);

  // Simulate clicking on the reservations page
  // this will trigger the initializeTimes function as part of the call to fetchAPI()
  act(() => {
    userEvent.click(screen.getAllByText('Reservations')[0]);
  });
  
  // Wait for the page to stabilize and the desired element to appear
  await waitFor(() => {
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
  }, {timeout: 5000});
  
  // Wait for the page to load the available times from the API
  await waitFor(() => {
    expect(screen.getByText('22:00')).toBeInTheDocument();
  }, {timeout: 5000});
  
  // Find the select element
  const reserveButton = screen.getByText('Reserve');
  fireEvent.submit(reserveButton);

  await waitFor(() => {
    expect(screen.getByText('Reservation Confirmed'));
  });
  
});