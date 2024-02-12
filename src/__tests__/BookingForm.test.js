import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import BookingForm from '../BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve");
    expect(headingElement).toBeInTheDocument();
});


