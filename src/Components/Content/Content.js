import './Content.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import CreateWorkout from './CreateWorkout';
function Content() {
    return (
        <div className="site-content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/create-workout" exact component={CreateWorkout} />
                </Switch>
        </div>
    );
}

export default Content;