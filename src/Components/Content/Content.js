import styles from './Content.module.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import CreateWorkout from './CreateWorkout';
import WorkoutsList from './WorkoutsList';

function Content() {
    return (
        <div className={styles.siteContent}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/create-workout" exact component={CreateWorkout} />
                    <Route path="/workouts" exact component={WorkoutsList} />
                </Switch>
        </div>
    );
}

export default Content;