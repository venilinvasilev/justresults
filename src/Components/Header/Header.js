import './Header.scss';

import Logo from './Logo';
//import TopNavigation from './TopNavigation';
import CartModal from './CartModal';
import Navigation from './Navigation/Navigation';

function Header() {
    return (
        <div className="row align-content-center px-0 pt-3 Header">
            <Logo />

            <Navigation onKe />
            <CartModal />
        </div>
    );
}

export default Header;
