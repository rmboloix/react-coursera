import { useEffect, useState } from 'react';

export const BookingForm = ({ availableTimes, updateDate, onSubmitForm }) => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('none');

    const handleChangeTime = (e) => {
        setTime(e.target.value);
    };

    const handleChangeDate = (e) => {
        setDate(e.target.value);
        updateDate(e.target.value);
    };

    const handleChangeOccasion = (e) => {
        setOccasion(e.target.value);
    };

    const handleChangeGuests = (e) => {
        setGuests(Number(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData(e.target);
        onSubmitForm(formData);
    };

    useEffect(() => {
        setTime(availableTimes[0]);
    }, [availableTimes]);

    return (
        <form onSubmit={handleSubmit} data-testid="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="res-date"
                onChange={handleChangeDate}
                value={date}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="res-time" value={time} onChange={handleChangeTime}>
                {availableTimes.map((time) => (
                    <option value={time} key={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="res-guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="res-guests"
                name="res-guests"
                value={guests}
                onChange={handleChangeGuests}
            />
            <label htmlFor="res-occasion">Occasion</label>
            <select
                id="res-occasion"
                name="res-occasion"
                value={occasion}
                onChange={handleChangeOccasion}
            >
                <option value="none">...Select one</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            {time} {date} {guests} {occasion}
            <input
                type="submit"
                value="Make your reservation"
                className="button"
            />
        </form>
    );
};
