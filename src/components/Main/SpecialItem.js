import './SpecialItem.css';

/**
 * Special item.
 *
 * @returns { JSX.Element }
 */
const SpecialItem = ({ imageUrl, name, price, description }) => {

    return (
        <div className = 'special-item'>
            <img src = { imageUrl } alt = 'Dish image' />
            <div className = 'info-container'>
                <div className = 'header'>
                    <span className = 'dish-name'>{ name }</span>
                    <span className = 'dish-price'>${ price }</span>
                </div>
                <p className = 'dish-description'>{ description }</p>
                <a href = '#' className = 'cta-special-item'>
                    Order a delivery 
                    <img src = '/motorcycle.svg' alt = 'Delivery icon' />
                </a>

            </div>
        </div>
    );
}

export default SpecialItem;
