import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonails";

/**
 * Main content for the page.
 *
 * @returns { JSX.Element }
 */
const Main = () => {

    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
        </main>
    );
}

export default Main;
