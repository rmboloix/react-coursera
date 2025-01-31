import { BookingForm } from '../components/BookingForm';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import './HomePage.css';

export const BookingPage = () => {
    return (
        <main className="container">
            <Header />
            <main>
                <section className='booking'>
                    <h1>Book your table</h1>
                    <BookingForm />
                </section>
            </main>
            <Footer />
        </main>
    );
};
