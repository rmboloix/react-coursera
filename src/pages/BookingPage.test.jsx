import { render, screen } from '@testing-library/react';
import { BookingPage, initializeTimes, updateTimes } from './BookingPage';

test('Booking Page renders properly', () => {
    render(<BookingPage />);

    const heading = screen.getByTestId('booking-title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Book your table');

    const bookingForm = screen.getByTestId('booking-form');
    expect(bookingForm).toBeInTheDocument();
});

describe('Booking Page', () => {
    test('initializeTimes function', () => {
        const data = initializeTimes();

        expect(data).toEqual({
            availableTimesByDate: [
                '17.00',
                '16.00',
                '18.00',
                '19.00',
                '20.00',
                '21.00',
                '22.00',
                '23.00',
            ],
        });
    });
});

describe('updateTimes function', () => {
    test('change date', () => {
        const newState = updateTimes(
            { availableTimesByDate: ['17.00', '18.00', '19.00', '20.00'] },
            { type: 'CHANGE_DATE', payload: { date: '2025-10-10' } }
        );

        expect(newState).toEqual({
            availableTimesByDate: [
                '17.00',
                '16.00',
                '18.00',
                '19.00',
                '20.00',
                '21.00',
                '22.00',
                '23.00',
            ],
        });
    });

    test('update time', () => {
        const newState = updateTimes(
            { availableTimesByDate: ['17.00', '18.00', '19.00', '20.00'] },
            { type: 'BOOK', payload: { time: '18.00' } }
        );

        expect(newState).toEqual({
            availableTimesByDate: ['17.00', '19.00', '20.00'],
        });
    });
});
