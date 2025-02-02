import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ConfirmationPage = () => {
     return (
            <main className="container">
                <Header />
                <main className="booking">
                    <h1 data-testid="booking-title">Confirmation</h1>
                    <section className="booking">
                        <p>Booking confirmation page</p>
                    </section>
                </main>
                <Footer />
            </main>
        );
}