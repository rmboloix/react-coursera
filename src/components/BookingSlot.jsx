export const BookingSlot = ({ time, available }) => {
    return (
        <div className={`booking-slot ${available ? 'available' : ''}`}>
            {time}
        </div>
    );
};
