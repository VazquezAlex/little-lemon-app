import { getByText, render, screen } from '@testing-library/react';
import FormField from './FormField';

const props = {
    label: 'Select a date',
    htmlFor: 'input',
    hasError: true,
    errorMessage: 'You must select a valid date',
}

test('displays the passed label', () => {
    // Render the component.
    render (
        <FormField { ...props } />
    );

    // Find the label.
    const label = screen.getByText(props.label);

    // Assertion.
    expect(label).toBeInTheDocument();
});

test('displayes the error message if hasError = true', () => {

    // Render the component.
    render (
        <FormField { ...props } />
    );

    // Find the label.
    const label = screen.getByText(props.errorMessage);

    // Assertion.
    expect(label).toBeInTheDocument();

});