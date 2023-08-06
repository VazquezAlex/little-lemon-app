import Hero from "./Hero";
import Specials from "./Specials";
import Story from "./Story";
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
            <Story />
        </main>
    );
}

export default Main;
