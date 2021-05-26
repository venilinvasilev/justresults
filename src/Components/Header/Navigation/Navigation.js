import './Navigation.css';

import { useContext } from 'react';
import { UserCtx } from '../../../App';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const userInfo = useContext(UserCtx);
    return (
        <nav>
            <div className="left-nav">
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/">Home</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/workouts">Workout Programs</NavLink>
                {userInfo?.email ?
                    <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/create-workout">Create Workout</NavLink>
                    : 
                    ''
                }
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/exercises">Exercise Catalog</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/calculator">Calculator</NavLink>
            </div>
            <div className="right-nav">
                {userInfo?.email ?
                    <>
                    <span>Wellcome back, {userInfo.username}!</span>
                    <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/logout">Logout</NavLink>
                    </>
                    :
                    <div>
                        <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/login">Login</NavLink>
                        <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/register">Register</NavLink>
                    </div>
                }

            </div>
        </nav>
    );
}

export default Navigation;