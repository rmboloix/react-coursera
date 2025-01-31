import { render, screen } from '@testing-library/react'
import {BookingPage} from './BookingPage'

test('Booking Page renders properly', () => {
    render(<BookingPage />);

    const heading = screen.getByTestId('booking-title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Book your table');

    const bookingForm = screen.getByTestId('booking-form');
    expect(bookingForm).toBeInTheDocument();
})