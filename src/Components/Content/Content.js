import './Content.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import '../../utils/firebase'
import firebase from '../../utils/firebase';

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('logged in');
        console.log(user)
    } else {
        console.log('guest');
    }
});

function Content() {
    return (
        <div className="site-content">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/logout" exact render={props => {
                        firebase.auth().signOut();
                        return <Redirect to='/' />;
                    }
                } />
            </Switch>
        </div>
    );
}

export default Content;