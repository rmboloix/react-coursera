import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const ConfirmationPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('reservation')));
    }, []);

    return (
        <main className="container">
            <Header />
            <main className="booking">
                <h1 data-testid="booking-title">Reservation Confirmed</h1>
                <section className="confirmation">
                    <p>Reservation Confirmed! </p>
                    <p>
                        Thank you for choosing Little Lemon! Your reservation
                        has been successfully confirmed.
                    </p>
                    {data && <p>Date: {data.date}</p>}
                    {data && <p>Time: {data.time}</p>}
                    {data && <p>Guests: {data.guests}</p>}
                    {data && <p>Occasion: {data.occasion}</p>}
                    <p>
                        We look forward to welcoming you to Little Lemon for a
                        memorable dining experience. If you need to make any
                        changes to your reservation or have any special
                        requests, please don't hesitate to contact us. See you
                        soon!
                    </p>
                </section>
            </main>
            <Footer />
        </main>
    );
};
