import './TestimonialItem.css';

/**
 * Testimonial Item component.
 *
 * @returns { JSX.Element }
 */
const TestimonialItem = ({ imageUrl, name, rating, review }) => {

    return (
        <div className = 'testimonial-item-container'>
            <span className = 'testimonial-item-rating'>{ rating } Stars</span>
            <div className = 'testimonial-item-user'>
                <img src = { imageUrl } alt = 'User image' />
                <span>{ name }</span>
            </div>
            <p className = 'testimonial-user-review'>{ review }</p>
        </div>
    );
}

export default TestimonialItem;
