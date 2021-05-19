import './Header.css';

import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <div className="header-container">
            <Logo />
            <Navigation />
        </div>
    );
}

export default Header;