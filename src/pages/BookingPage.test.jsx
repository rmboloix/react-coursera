import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BookingPage, initializeTimes, updateTimes } from './BookingPage';

describe('Booking Page', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Booking Page renders properly', () => {
        render(<BookingPage />);

        const heading = screen.getByTestId('booking-title');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Book your table');

        const bookingForm = screen.getByTestId('booking-form');
        expect(bookingForm).toBeInTheDocument();
    });

    test('Booking form submit properly', async () => {
        render(<BookingPage />);
        const submitButton = screen.getByText('Make your reservation');
        expect(submitButton).toBeInTheDocument();

        waitFor(() => {
            const time = screen.getByText('17.00');
            expect(time).toBeInTheDocument();
            expect(time).toHaveClass('available');
        })

        fireEvent.click(submitButton);

        expect(screen.getByText('17.00')).not.toHaveClass('available');
    });
});

describe('reducer function', () => {
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
