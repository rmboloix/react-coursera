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
        })

        fireEvent.click(submitButton);
        expect(submitAPISpy).toHaveBeenCalled();
        expect(global.location.href).toEqual('/confirmation');
    });
});

describe('reducer function', () => {
    test('initializeTimes function', () => {
        const fetchAPISpy = jest
            .spyOn(api, 'fetchAPI')
            .mockImplementation(() => ([
                '17:00',
                '16:00',
                '18:00',
                '19:00',
                '20:00',
                '21:00',
                '22:00',
                '23:00',
            ]));

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
