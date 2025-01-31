import { BookingForm } from '../components/BookingForm';
import { BookingSlot } from '../components/BookingSlot';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import './HomePage.css';
import { useReducer } from 'react';

// const AVAILABLES_TIMES = ['16.00', '18.00', '19.00', '20.00', '21.00'];
const ALL_TIMES = [
    '17.00',
    '16.00',
    '18.00',
    '19.00',
    '20.00',
    '21.00',
    '22.00',
    '23.00',
];

export const initializeTimes = () => {
    return {
        availableTimesByDate: ALL_TIMES,
    };
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
            const { date } = action.payload;
            return initializeTimes(date);
        default:
            throw new Error('action not found');
    }
};

// const today = () => new Date().toISOString().split('T')[0];

// const getNext10Days = () => {
//     const dates = [];
//     const today = new Date();

//     for (let i = 0; i <= 10; i++) {
//         const date = new Date(today);
//         date.setDate(today.getDate() + i);
//         dates.push(date.toISOString().split('T')[0]);
//     }

//     return dates;
// };

export const BookingPage = () => {
    const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const bookTime = (time) => {
        dispatch({ type: 'BOOK', payload: { time } });
    };

    const handleUpdateDate = (date) => {
        console.log(date);
        dispatch({ type: 'CHANGE_DATE', payload: { date } });
    };

    return (
        <main className="container">
            <Header />
            <main className="booking">
                <h1 data-testid="booking-title">Book your table</h1>
                <section className="booking">
                    <div className="booking-slot-list">
                        {ALL_TIMES.map((time) => (
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
