import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm header', () => {
    const props = {
        formValues: {
            date: '',
            time: '',
            guests: '',
            occasion: '',
        },
        availableTimes: [],
        setFormValue: () => {},
        onSubmit: () => {},
    }

    render (<BookingForm { ...props } />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});