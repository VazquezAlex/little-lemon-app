import './BookingForm.css';
import FormField from './FormField';

/**
 * Booking form component.
 *
 * @returns { JSX.Element }
 */
const BookingForm = ({ availableTimes, formValues, setFormValues, onSubmit }) => {

    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const minimumNumberOfGuests = 1;
    const maximumNumberOfGuests = 10;
    const occasions = ['Birthday', 'Anniversary'];
    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = 'Please choose a valid time';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion';
    const invalidNumberOfGuestsErrorMessage = 'Please enter a number between 1 and 10';

    const isDateValid = () => formValues.date !== '';
    const isTimeValid = () => formValues.time !== '';
    const isNumberOfGuestsValid = () => formValues.guests !== '';
    const isOccasionValid = () => formValues.occasion !== '';

    const areAllFieldsValid = () =>
        isDateValid()
        && isTimeValid()
        && isNumberOfGuestsValid()
        && isOccasionValid();

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
                <FormField
                    label = "Choose a Date"
                    htmlFor="date"
                    hasError = { !isDateValid()}
                    errorMessage={invalidDateErrorMessage}
                >
                    <input
                        id="res-date"
                        min = { minimumDate }
                        name = 'date'
                        required
                        type="date"
                        value = { formValues.date }
                        onChange = { handleInputChange }
                    />
                </FormField>
                <FormField
                    label = "Choose a Time"
                    htmlFor = "time"
                    hasError = { !isTimeValid() }
                    errorMessage = { invalidTimeErrorMessage }
                >
                    <select
                        id="res-time"
                        name = 'time'
                        value = { formValues.time }
                        onChange = { handleInputChange }
                    >
                        <option hidden>Select a time</option>
                        { availableTimes.length && availableTimes.map(time => (
                            <option key = { time }>{ time }</option>
                        )) }
                    </select>
                </FormField>
                <FormField
                    label="Number of guests"
                    htmlFor="guests"
                    hasError={!isNumberOfGuestsValid()}
                    errorMessage={invalidNumberOfGuestsErrorMessage}
                >
                    <input
                        id = "guests"
                        max = { maximumNumberOfGuests }
                        min = { minimumNumberOfGuests }
                        name = 'guests'
                        placeholder = "1"
                        type = "number"
                        onChange = { handleInputChange }
                    />
                </FormField>
                <FormField
                    label = "Choose an Occasion"
                    htmlFor="booking-occasion"
                    hasError={!isOccasionValid()}
                    errorMessage={invalidOccasionErrorMessage}
                >
                    <select onChange = { handleInputChange } name = 'occasion' id="occasion">
                        <option hidden>Select an occasion</option>
                        {occasions.map(occasion => 
                            <option data-testid="booking-occasion-option" key={occasion}>
                                {occasion}
                            </option>
                        )}
                    </select>
                </FormField>
                <input type="submit" value="Make Your reservation" aria-label="On Click" />
            </form>
        </div>
    );
}

export default BookingForm;
