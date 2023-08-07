import './BookingForm.css';

/**
 * Booking form component.
 *
 * @returns { JSX.Element }
 */
const BookingForm = ({ availableTimes, formValues, setFormValues, onSubmit }) => {

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues(prev =>({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <div className = "booking-form-container" onSubmit = { onSubmit }>
            <h1>Book Now</h1>
            <form className = 'booking-form'>
                <label htmlFor="res-date">Choose date</label>
                <input onChange = { handleInputChange } type="date" name = 'date' id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select onChange = { handleInputChange } name = 'time' id="res-time ">
                    <option hidden>Select a time</option>
                    { availableTimes.length && availableTimes.map(time => (
                        <option key = { time }>{ time }</option>
                    )) }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input onChange = { handleInputChange } name = 'guests' type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select onChange = { handleInputChange } name = 'occasion' id="occasion">
                    <option hidden>Select an occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;
