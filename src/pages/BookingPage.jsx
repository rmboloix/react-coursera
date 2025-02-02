import { fetchAPI, submitAPI } from '../api/api';
import { BookingForm } from '../components/BookingForm';
import { BookingSlot } from '../components/BookingSlot';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import './HomePage.css';
import { useReducer } from 'react';
// import { useNavigate } from "react-router-dom";

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
    // const navigate = useNavigate(); //For some reason I cannot use useNavigate in testing with create-react-app and jest.

    const handleUpdateDate = (dateString) => {
        dispatch({
            type: 'CHANGE_DATE',
            payload: initializeTimes(dateFromString(dateString)),
        });
    };

    const handleOnSubmitForm = (formData) => {
        const confirmed = submitAPI(formData);

        if (confirmed) {
            // navigate('/confirmation');
            window.location.href = `/confirmation`;
            localStorage.setItem('reservation', JSON.stringify({
                time: formData.get('res-time'),
                date: formData.get('res-date'),
                guests: formData.get('res-guests'),
                occasion: formData.get('res-occasion'),
            }));
        }
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
                        onSubmitForm={handleOnSubmitForm}
                    />
                </section>
            </main>
            <Footer />
        </main>
    );
};
