import './Navigation.css';

import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <div className="left-nav">
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/">Home</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/workouts">Workout Programs</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/create-workout">Create Workout</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/exercises">Exercise Catalog</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" to="/calculator">Calculator</NavLink>
            </div>
            <div className="right-nav">
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/login">Login</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/register">Register</NavLink>
                <NavLink className="site-nav-link" activeClassName="site-active-nav-link" exact to="/logout">Logout</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;