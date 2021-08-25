import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';
import CartModal from './CartModal';
import styles from './Header.module.css';

import Logo from './Logo';
//import Navigation from './Navigation';
import TopNavigation from './TopNavigation';
function Header() {
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
    }, [location]);
    return (
        <div className={styles.headerContainer}>
            <Logo />
            <Cart />
            <TopNavigation />
            <CartModal />
        </div>
    );
}

export default Header;