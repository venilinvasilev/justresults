import styles from './Header.module.css';

import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <div className={styles.headerContainer}>
            <Logo />
            <Navigation />
        </div>
    );
}

export default Header;