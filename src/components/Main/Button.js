import './Button.css'

/**
 * Reusable button.
 *
 * @param { string } text - Text to display on the button.
 * @param { string } url  - Url to redirect to.
 * @returns { JSX.Element } - Button component.
 */
const Button = ({ text, url }) => {

    return (
        <a href = { url } className = "button">{ text }</a>
    );
}

export default Button;
