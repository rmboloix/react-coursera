import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BookingPage, initializeTimes, updateTimes } from './BookingPage';
import * as api from '../api/api';

delete window.location;

global.location = {
    ...window.location,
    assign: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    href: '',
};

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

        const submitAPISpy = jest
            .spyOn(api, 'submitAPI')
            .mockImplementation(() => true);

        const submitButton = screen.getByText('Make your reservation');

        await waitFor(() => {
            expect(submitButton).toBeInTheDocument();
        });

        expect(submitButton).toBeEnabled();
        fireEvent.click(submitButton);
        expect(submitAPISpy).toHaveBeenCalled();
        expect(global.location.href).toEqual('/confirmation');
    });

    test('Booking form - error when no times to choose', async () => {
        const fetchAPISpy = jest
            .spyOn(api, 'fetchAPI')
            .mockImplementation(() => []);

        render(<BookingPage />);

        const submitButton = screen.getByText('Make your reservation');

        await waitFor(() => {
            expect(submitButton).toBeInTheDocument();
        });

        expect(fetchAPISpy).toHaveBeenCalled();
        expect(screen.getByTestId('error-time')).toBeInTheDocument();
        expect(screen.getByTestId('error-time')).toHaveTextContent(
            'Sorry, there are not available hours for this day. Please select another day.'
        );
        expect(screen.getByRole('button', { type: 'submit' })).toBeDisabled();
    });

    test('Booking form - error when more than 10 guests selected', async () => {
        const fetchAPISpy = jest
            .spyOn(api, 'fetchAPI')
            .mockImplementation(() => ['17:00']);

        render(<BookingPage />);

        const submitButton = screen.getByText('Make your reservation');

        await waitFor(() => {
            expect(submitButton).toBeInTheDocument();
        });

        const input = screen.getByLabelText('Number of guests');
        fireEvent.change(input, { target: { value: 11 } });

        expect(fetchAPISpy).toHaveBeenCalled();
        expect(screen.getByTestId('error-guests')).toBeInTheDocument();
        expect(screen.getByTestId('error-guests')).toHaveTextContent(
            'Please select a value between 1 and 10.'
        );

        expect(screen.getByRole('button', { type: 'submit' })).toBeDisabled();
    });
});

describe('reducer function', () => {
    test('initializeTimes function', () => {
        const fetchAPISpy = jest
            .spyOn(api, 'fetchAPI')
            .mockImplementation(() => [
                '17:00',
                '16:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
                '23:00',
            ]);

        const data = initializeTimes();

        expect(data).toEqual({
            availableTimesByDate: [
                '17:00',
                '16:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
                '23:00',
            ],
        });

        expect(fetchAPISpy).toHaveBeenCalled();
    });

    test('change date', () => {
        const newState = updateTimes(
            { availableTimesByDate: ['17:00', '18:00', '19:00', '20:00'] },
            {
                type: 'CHANGE_DATE',
                payload: {
                    availableTimesByDate: [
                        '17:00',
                        '16:00',
                        '18:00',
                        '19:00',
                        '20:00',
                        '21:00',
                        '22:00',
                        '23:00',
                    ],
                },
            }
        );

        expect(newState).toEqual({
            availableTimesByDate: [
                '17:00',
                '16:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
                '23:00',
            ],
        });
    });
});
