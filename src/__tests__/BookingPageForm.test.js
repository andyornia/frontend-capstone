import { render, screen, fireEvent, waitFor, jest, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'; // Assuming your App component is in the parent directory


function create_date(month_difference) {
    
    const date = new Date();
    date.setMonth(date.getMonth() + month_difference);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    const day = String(date.getDate()).padStart(2, '0');
    
    // Format the date
    var formattedDate = year + '-' + month + '-' + day;
    
    return formattedDate;
}


describe('Booking Page Form', () => {
    
   test('should have correct attributes for input fields', async () => {
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
        
        expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
        const reservationDateInput = screen.getByLabelText('Choose date');
        expect(reservationDateInput).toHaveAttribute('type', 'date')
        
        
        expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
        const reservationTimeSelect = screen.getByLabelText('Choose time');
        expect(reservationTimeSelect).toBeInTheDocument();
        
        expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
        const guestsInput = screen.getByLabelText('Number of guests');
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('placeholder', '2');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');

        expect(screen.getByText('Birthday')).toBeInTheDocument();
        expect(screen.getByText('Anniversary')).toBeInTheDocument();
        const occasionSelect = screen.getByLabelText('Occasion');
        expect(occasionSelect).toBeInTheDocument();
       
   });
   
   test('date seleted should be within 3 months of the current date', async() => {
       
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

        // Valid date: invalid warning is hidden with a valid date
        const today = create_date();
        const dateElement = screen.getByTestId('reservationDate');
        fireEvent.change(dateElement, { target: { value: today } });
        const dateWarningElement = screen.getByTestId('dateWarning');
        expect(dateWarningElement).toHaveClass('hidden');
        
        // Invalid date: invalid warning is shown with date too far in future
        const invalidFuture = create_date(4);
        fireEvent.change(dateElement, { target: { value: invalidFuture } });
        expect(dateWarningElement).not.toHaveClass('hidden');
        expect(dateWarningElement).toHaveClass('warning');
        
        // Invalid date: invalid warning is shown with date in the past
        const invalidPast = create_date(-1);
        fireEvent.change(dateElement, { target: { value: invalidPast } });
        expect(dateWarningElement).not.toHaveClass('hidden');
        expect(dateWarningElement).toHaveClass('warning');
        
        // Invalid date: invalid warning is shown with date in the past
        const validFuture = create_date(1);
        fireEvent.change(dateElement, { target: { value: validFuture } });
        expect(dateWarningElement).toHaveClass('hidden');
        expect(dateWarningElement).toHaveClass('warning');
     
   });
   
   test('number of guests out of range', async() => {
       
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
        
        const guestElement = screen.getByLabelText('Number of guests');
        const guestWarning = screen.getByTestId('guestWarning');
        
        // invalid guest value: warning should not be hidden
        fireEvent.change(guestElement, { target: { value: 0 }});
        expect(guestWarning).not.toHaveClass('hidden');
        expect(guestWarning).toHaveClass('warning');

        // invalid guest value: warning should not be hidden
        fireEvent.change(guestElement, { target: { value: -1 }});
        expect(guestWarning).not.toHaveClass('hidden');
        expect(guestWarning).toHaveClass('warning');
        
        // invalid guest value: warning should not be hidden
        fireEvent.change(guestElement, { target: { value: 15 }});
        expect(guestWarning).not.toHaveClass('hidden');
        expect(guestWarning).toHaveClass('warning');
        
        // valid guest value: should be hidden
        fireEvent.change(guestElement, { target: { value: 5 }});
        expect(guestWarning).toHaveClass('hidden');
        expect(guestWarning).toHaveClass('warning');      
        
        // valid guest value: should be hidden
        fireEvent.change(guestElement, { target: { value: 1 }});
        expect(guestWarning).toHaveClass('hidden');
        expect(guestWarning).toHaveClass('warning');      

        // valid guest value: should be hidden
        fireEvent.change(guestElement, { target: { value: 10 }});
        expect(guestWarning).toHaveClass('hidden');
        expect(guestWarning).toHaveClass('warning');
      
       
   });
   
});