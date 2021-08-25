import styles from './TopNavigation.module.css';

import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthActions } from '../../../store/auth-slice';
import { logoutUser } from '../../../utils/api/data';
function TopNavigation() {
    const dispatch = useDispatch();
    const userAuth = useSelector((state) => state.userAuth);
    const [menuStyles, setMenuStyles] = useState([styles.menu])
    const [dropDown, setDropdown] = useState(styles.dropDownMenuInactive);
    useEffect(() => {
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        }
    }, [])
    const handleClick = (ev) => {
        if (ev.target.tagName !== 'BUTTON' && ev.target.tagName !== 'svg' && ev.target.tagName !== 'path' && ev.target.tagName !== 'A') {
            setDropdown(styles.dropDownMenuInactive);
            setMenuStyles([styles.menu]);
        }
    }
    const toggleMenu = (ev) => {
        ev.stopPropagation()
        setMenuStyles(oldStyles => {
            if (oldStyles.length > 1) {
                setDropdown(styles.dropDownMenuInactive)
                return [styles.menu];
            }
            setDropdown(styles.dropDownMenuActive)
            return oldStyles.concat(styles.opened)
        })
    }
    const handleLogout = async () => {
        try {
            await logoutUser();
            dispatch({ type: userAuthActions.AUTH_LOGOUT });
        } catch (err) {
            alert(err.message);
        }

    }
    return (
        <div>
            <button className={menuStyles.join(' ')} onClick={toggleMenu}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path className={styles.line + ' ' + styles.line1} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className={styles.line + ' ' + styles.line2} d="M 20,50 H 80" />
                    <path className={styles.line + ' ' + styles.line3} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <div className={dropDown}>
                <Link className={styles.linkItem} to='/articles'>Articles</Link>
                {userAuth.loggedIn ? <Link className={styles.linkItem} to="/create-article">Write an Article</Link> : ''}
                <Link className={styles.linkItem} to="/supplements">Supplements</Link>
                {userAuth.role === 'admin' && <Link className={styles.linkItem} to="/add-supplement">Add Supplement</Link>}
                <Link className={styles.linkItem} to="/calculator">Calculator</Link>
                {!userAuth.loggedIn ? <div>
                    <Link className={styles.linkItem} to="/login">Login</Link>
                    <Link className={styles.linkItem} to="/register">Register</Link>
                </div> :
                    <Fragment>
                        <Link className={styles.linkItem} to="/profile">My Profile</Link>
                        <Link className={styles.linkItem} onClick={handleLogout} to="/">Logout</Link>
                    </Fragment>
                }

            </div>
        </div>
    );
}

export default TopNavigation;