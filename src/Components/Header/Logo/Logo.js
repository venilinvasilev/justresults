import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
function Logo() {
    return (
        <Link className={styles.logoLink} exact="true" to="/">
            <div className={styles.siteLogo}>#JustResults</div>
        </Link>
    );
}

export default Logo;