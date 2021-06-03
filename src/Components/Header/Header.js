import styles from './Header.module.css';

import Logo from './Logo';
import Navigation from './Navigation';
import TopNavigation from './TopNavigation';
function Header() {
    return (
        <div className={styles.headerContainer}>
            <Logo />
            <TopNavigation />
        </div>
    );
}

export default Header;