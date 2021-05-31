import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './utils/firebase';
import { auth } from './utils/firebase';
import { getUserInfo } from './utils/firebase/data';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

export let UserCtx = React.createContext();

function App() {
    const [userInfo, setUserInfo] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                getUserInfo(user.uid)
                    .then((data) => {
                        data.uid = user.uid;
                        setUserInfo(data)
                    })
                    .catch(err => console.log(err.message));
            } else {
                setUserInfo();
            }
        });
    }, []);
    return (
        <Router>
            <div className={styles.siteWrapper}>
                <UserCtx.Provider value={userInfo}>
                    <Header />
                    <hr className={styles.separationLine} />
                    <Content />
                </UserCtx.Provider>
                <Footer />
            </div>
            <Route path="/logout" exact render={props => {
                    auth.signOut();
                    return <Redirect to='/' />;
                }
            } />
        </Router>
    );
}

export default App;
