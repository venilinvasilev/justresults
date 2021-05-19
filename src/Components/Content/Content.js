import './Content.css';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';

function Content() {
    return (
        <div className="site-content">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-in" exact component={Login} />
            </Switch>
        </div>
    );
}

export default Content;