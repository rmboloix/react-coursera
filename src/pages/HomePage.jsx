import { AboutUs } from '../components/AboutUs';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Specials } from '../components/Specials';
import { Testimonials } from '../components/Testimonials';
import './HomePage.css';

export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Specials />
                <Testimonials />
                <AboutUs />
            </main>
            <Footer />
        </>
    );
};
