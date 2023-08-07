import { useEffect, useReducer, useState } from 'react';
import BookingForm from '../components/Booking/BookingForm';
import Header from './../components/Header';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import { useNavigate } from 'react-router-dom';
import pages from '../utils/pages';
import Footer from '../components/Footer/Footer';

export const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

/**
 * Booking Page container component.
 *
 * @returns { JSX.Element }
 */
const BookingPage = () => {

    const navigate = useNavigate();

    const updateTimes = (availableTimes, date) => {
        const response = fetchAPI(new Date(date));
        return (response.length !== 0) ? response : availableTimes;
    };

    const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [formValues, setFormValues] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    useEffect(() => {
        if (formValues.date === '') return;

        dispatch(defaultTimes, formValues.date);
    }, [formValues.date]);

    const onSubmit = (e) => {
        e.preventDefault();

        const response = submitAPI(formValues);
        if (response) navigate(pages.get('confirmedBooking').path);
    }

    return (
        <main>
            <Header />
            <BookingForm
                availableTimes = { availableTimes }
                formValues = { formValues }
                onSubmit = { onSubmit }
                setFormValues = { setFormValues }
            />
            <Footer />
        </main>
    );
}

export default BookingPage;
