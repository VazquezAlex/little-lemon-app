import { useEffect, useReducer, useState } from 'react';
import BookingForm from '../components/Booking/BookingForm';
import Header from './../components/Header';

export const updateTimes = () => {
    return defaultTimes;
}

export const initializeTimes = () => {
    return defaultTimes;
}

export const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

/**
 * Booking Page container component.
 *
 * @returns { JSX.Element }
 */
const BookingPage = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    const [formValues, setFormValues] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    useEffect(() => {
        if (formValues.date === '') return;

        dispatch();
    }, [formValues.date]);

    const onSubmit = (e) => {
        e.preventDefault();
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
        </main>
    );
}

export default BookingPage;
