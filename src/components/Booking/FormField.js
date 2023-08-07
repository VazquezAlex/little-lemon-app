import './FormField.css';

/**
 * Input for the form with validations.
 *
 * @param { JSX.Element } children
 * @param { string }      label
 * @param { htmlFor }     label
 * @param { boolean }     hasError
 * @param { string }      errorMessage
 * @returns { JSX.Element }
 */
const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
    return (
        <div className = "form-field">
            <div className = 'form-field-label-container'>
                <label htmlFor = { htmlFor}>{label}</label>
            </div>
            { children }
            {
                hasError && errorMessage ?
                    <p className = 'form-field-error' data-testid="error-message">{errorMessage}.</p> : null
            }
        </div>
    );
};

export default FormField;
