import styles from './App.module.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from "react-cookie";

import { userAuthCheckSession } from './store/auth-slice';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { cartActions } from './store/cart-slice';

function App() {
    const userAuth = useSelector((state) => state.userAuth);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(userAuth.username);
    useEffect(() => {
        if(userAuth.username) {
            setCookie(userAuth.username, JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity,
                totalPrice: cart.totalPrice
            }), {
                path: "/"
            });
        }
        if(Object.keys(cookies).length && !cart.changed && userAuth.username) {
            dispatch({ type: cartActions.SET_USER_CART, payload: cookies[`${userAuth.username}`]});
        }
    }, [userAuth.username, cart.totalQuantity]);
    useEffect(() => {
        dispatch(userAuthCheckSession);
    }, [dispatch])
return (
    <Router>
        <div className={styles.siteWrapper}>
            <Header />
            <Content />
            <Footer />
        </div>
    </Router>
);
}

export default App;
