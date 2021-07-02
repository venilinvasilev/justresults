import styles from './Content.module.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
//import CreateWorkout from './CreateWorkout';
import CreateArticle from './CreateArticle';
//import WorkoutsList from './WorkoutsList';
import ArticleList from './ArticleList';
//import WorkoutDetails from './WorkoutDetails';
import ArticleDetails from './ArticleDetails';
import EditArticle from './EditArticle';
import Calculator from './Calculator';
function Content() {
    return (
        <div className={styles.siteContent}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/create-article" exact component={CreateArticle} />
                    <Route path="/articles" exact component={ArticleList} />
                    <Route path="/articles/:id" component={ArticleDetails} />
                    <Route path="/edit/:id" component={EditArticle} />
                    <Route path="/calculator" exact component={Calculator} />
                </Switch>
        </div>
    );
}

export default Content;