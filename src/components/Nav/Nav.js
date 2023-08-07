import { Link } from 'react-router-dom';
import './Nav.css';

/**
 * Navigation component.
 * 
 * @returns { JSX.Element }
 */
const Nav = () => {

    return (
        <div className = 'nav-container'>
            <div className = 'nav-logo-container'>
                <img src = '/logo.svg' alt = 'Little Lemon Logo' />
            </div>
            <nav>
                <ul className = 'links'>
                    <li>
                        <Link to = '/' className = 'link'>Home</Link>
                    </li>
                    <li>
                        <a href='#' className = 'link'>About</a>
                    </li>
                    <li>
                        <a href='#' className = 'link'>Menu</a>
                    </li>
                    <li>
                        <a href='#' className = 'link'>Reservations</a>
                    </li>
                    <li>
                        <a href='#' className = 'link'>Order Online</a>
                    </li>
                    <li>
                        <a href='#' className = 'link'>Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;

