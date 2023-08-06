import Button from "./Button";
import SpecialItem from "./SpecialItem";
import './Specials.css';

/**
 * Display the week's special on the home page.
 *
 * @returns { JSX.Element }
 */
const Specials = () => {

    return (
        <section className = "specials-container">
            <div className = "specials-title">
                <h2>This weeks specials!</h2>
                <Button text = 'Online Menu' url = '/menu' />
            </div>
            <div className = "specials-list">
                <SpecialItem 
                    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, metus eu efficitur dignissim, eros lectus tempus eros, vitae hendrerit.'
                    imageUrl = '/greek salad.jpg'
                    name = 'Greek Salad'
                    price = '12.98'
                />
                <SpecialItem 
                    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, metus eu efficitur dignissim, eros lectus tempus eros, vitae hendrerit.'
                    imageUrl = '/greek salad.jpg'
                    name = 'Greek Salad'
                    price = '12.98'
                />
                <SpecialItem 
                    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere, metus eu efficitur dignissim, eros lectus tempus eros, vitae hendrerit.'
                    imageUrl = '/greek salad.jpg'
                    name = 'Greek Salad'
                    price = '12.98'
                />
            </div>
        </section>
    );
}

export default Specials;
