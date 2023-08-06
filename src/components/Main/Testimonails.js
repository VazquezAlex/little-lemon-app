import './Testimonials.css';
import TestimonialItem from './TestmonialItem';

/**
 * Testimonials component.
 *
 * @returns { JSX.Element }
 */
const Testimonials = () => {

    return (
        <section className = 'testimonials-container'>
            <h2>Testimonials</h2>
            <div className = 'testimonials-list'>
                <TestimonialItem
                    imageUrl = '/testimonial1.jpg'
                    name = 'John Doe'
                    rating = '3'
                    review = 'Loved the food, and everything was very clean.'
                />
                <TestimonialItem
                    imageUrl = '/testimonial1.jpg'
                    name = 'John Doe'
                    rating = '3'
                    review = 'Loved the food, and everything was very clean.'
                />
                <TestimonialItem
                    imageUrl = '/testimonial1.jpg'
                    name = 'John Doe'
                    rating = '3'
                    review = 'Loved the food, and everything was very clean.'
                />
                <TestimonialItem
                    imageUrl = '/testimonial1.jpg'
                    name = 'John Doe'
                    rating = '3'
                    review = 'Loved the food, and everything was very clean.'
                />
            </div>
        </section>
    );
}

export default Testimonials;
