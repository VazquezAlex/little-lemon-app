import './Footer.css';

/**
 * Footer component for the page.
 *
 * @returns { JSX.Element }
 */
const Footer = () => {

    return (
        <footer>
            <div className = 'col'>
                <img src = '/logo.svg' alt = 'Little Lemon Logo' />
            </div>
            <div className = 'col'>
                <span className = 'col-header'>Doormat navigation</span>
                <nav className = 'footer-nav'>
                    <ul>
                        <li>
                            <a href='#' className = 'footer-link'>Home</a>
                        </li>
                        <li>
                            <a href='#' className = 'footer-link'>About</a>
                        </li>
                        <li>
                            <a href='#' className = 'footer-link'>Menu</a>
                        </li>
                        <li>
                            <a href='#' className = 'footer-link'>Reservations</a>
                        </li>
                        <li>
                            <a href='#' className = 'footer-link'>Order Online</a>
                        </li>
                        <li>
                            <a href='#' className = 'footer-link'>Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className = 'col'>
                <span className = 'col-header'>Contact</span>
                <nav className = 'footer-nav'>
                    <ul>
                        <li>
                            <span className = 'footer-link'>Address</span>
                        </li>
                        <li>
                            <a href='tel:+1123123212' className = 'footer-link'>+1 123 12 3212</a>
                        </li>
                        <li>
                            <a href='mailto:contact@littlelemon.com' className = 'footer-link'>contact@littlelemon.com</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className = 'col'>
                <span className = 'col-header'>Social Media Links</span>
                <nav className = 'footer-nav'>
                    <ul>
                        <li>
                            <a href='#' className = 'footer-link'>Facebook</a>
                        </li>
                        <li>
                            <a href='#' className = 'footer-link'>Instagram</a>
                        </li>
                        <li>
                            <a href='#' className = 'footer-link'>Pinterest</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
