import Button from './Button';
import './Hero.css';

/**
 * Hero section for the home page.
 *
 * @returns { JSX.Element }
 */
const Hero = () => {

    return (
        <section className = "hero-container">
            <div className = 'hero-information'>
                <div className = 'content'>
                    <h1>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recepies served with a modern twist.
                    </p>
                    <br />
                    <Button text = 'Reserve a Table' url = '#' />
                </div>
            </div>
            <div className = 'hero-image'>
                <img src = '/restauranfood.jpg' alt = 'Dish image.' />
            </div>
        </section>
    );
}

export default Hero;
