import { fetchAPI } from '../api/api';
import { BookingForm } from '../components/BookingForm';
import { BookingSlot } from '../components/BookingSlot';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import './HomePage.css';
import { useReducer } from 'react';

const getAllTimes = () => {
    const result = [];
    for (let i = 17; i <= 23; i++) {
        result.push(i + ':00');
        result.push(i + ':30');
    }
    return result;
};

export const initializeTimes = (date) => {
    return {
        availableTimesByDate: fetchAPI(date ?? new Date()),
    };
};

const dateFromString = (dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date;
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'BOOK':
            const { time } = action.payload;
            return {
                ...state,
                availableTimesByDate: state.availableTimesByDate.filter(
                    (t) => t !== time
                ),
            };
        case 'CHANGE_DATE':
            const { availableTimesByDate } = action.payload;
            return {
                ...state,
                availableTimesByDate,
            };
        default:
            throw new Error('action not found');
    }
};

export const BookingPage = () => {
    const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const bookTime = (time) => {
        dispatch({ type: 'BOOK', payload: { time } });
    };

    const handleUpdateDate = (dateString) => {
        dispatch({
            type: 'CHANGE_DATE',
            payload: initializeTimes(dateFromString(dateString)),
        });
    };

    return (
        <main className="container">
            <Header />
            <main className="booking">
                <h1 data-testid="booking-title">Book your table</h1>
                <section className="booking">
                    <div className="booking-slot-list">
                        {getAllTimes().map((time) => (
                            <BookingSlot
                                key={time}
                                time={time}
                                available={state.availableTimesByDate.includes(
                                    time
                                )}
                            />
                        ))}
                    </div>
                    <BookingForm
                        availableTimes={state.availableTimesByDate}
                        updateDate={handleUpdateDate}
                        bookTime={bookTime}
                    />
                </section>
            </main>
            <Footer />
        </main>
    );
};
