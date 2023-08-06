import './Story.css';

/**
 * Story about the restaurant section.
 *
 * @returns { JSX.Element }
 */
const Story = () => {

    return (
        <section className = 'story'>
            <div className = 'story-info'>
                <h2>Little Lemon</h2>
                <h5>Chicago</h5>
                <p className = 'story-info-description'>
                    Lorem pariatur magna eu reprehenderit consequat eu aliquip mollit consectetur dolore fugiat excepteur.
                    Dolore id aliquip occaecat Lorem ea in magna ea magna proident. Esse eu anim Lorem ex amet ipsum id
                    mollit excepteur. Sunt ex anim elit cupidatat cupidatat consectetur.
                </p>
            </div>
            <div className = 'story-images'>
                <img src = '/restaurant.jpg' alt = 'Restaurante image' className = 'story-img-1' />
                <img src = '/testimonial1.jpg' alt = 'Chefs image' className = 'story-img-2' />
            </div>
        </section>
    );
}

export default Story;
