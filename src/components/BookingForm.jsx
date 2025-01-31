import { useState } from 'react';

const AVAILABLES_TIMES = ['17.00', '16.00', '18.00', '19.00', '20.00', '21.00'];

export const BookingForm = () => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState('21.00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('none');

    const handleChangeTime = (e) => {
        setTime(e.target.value);
    };

    const handleChangeDate = (e) => {
        setDate(e.target.value);
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
        console.log(date, time, guests, occasion);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="res-date"
                onChange={handleChangeDate}
                value={date}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleChangeTime}>
                {AVAILABLES_TIMES.map((time) => (
                    <option value={time} key={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={handleChangeGuests}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
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
