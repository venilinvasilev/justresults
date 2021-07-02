import styles from './Navigation.module.css';

import { useContext } from 'react';
import { UserCtx } from '../../../App';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const userInfo = useContext(UserCtx);
    return (userInfo ?
        <nav className={styles.navWrapper}>
            <div>
                <NavLink className={styles.siteNavLink} activeClassName={styles.siteActiveNavLink} to="/workouts">Workout Programs</NavLink>
                {userInfo?.email ?
                    <NavLink className={styles.siteNavLink} activeClassName={styles.siteActiveNavLink} to="/create-workout">Create Workout</NavLink>
                    : 
                    ''
                }
                <NavLink className={styles.siteNavLink} activeClassName={styles.siteActiveNavLink} to="/calculator">Calculator</NavLink>
            </div>
            <div>
                {userInfo?.email ?
                    <>
                    <span>Wellcome back, {userInfo.username}!</span>
                    <NavLink className={styles.siteNavLink} activeClassName={styles.siteActiveNavLink} exact to="/logout">Logout</NavLink>
                    </>
                    :
                    <div>
                        <NavLink className={styles.siteNavLink} activeClassName={styles.siteActiveNavLink} exact to="/login">Login</NavLink>
                        <NavLink className={styles.siteNavLink} activeClassName={styles.siteActiveNavLink} exact to="/register">Register</NavLink>
                    </div>
                }

            </div>
        </nav> :
        ''
    )
}

export default Navigation;