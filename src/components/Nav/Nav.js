import './Nav.css';

/**
 * Navigation component.
 * 
 * @returns { JSX.Element }
 */
const Nav = () => {

    return (
        <div className = 'container'>
            <img src = '/logo.svg' alt = 'Little Lemon Logo' />
            <nav>
                <ul className = 'links'>
                    <li>
                        <a href='#' className = 'link'>Home</a>
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

