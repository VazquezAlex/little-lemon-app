import Header from './../components/Header';
import Footer from './../components/Footer/Footer';
import './ConfirmedBooking.css';

/**
 * Confirmed booking page.
 * 
 * @returns { JSX.Element }
 */
const ConfirmedBooking = () => {

    return (
        <main>
            <Header />
            <div className = 'banner' />
            <section className = 'booking-container'>
                <h1>Booking Confirmed!</h1>
                <p>Thnak you for booking with us, your table will be ready at your arrival.</p>
            </section>
            <Footer />
        </main>
    );
}

export default ConfirmedBooking;
