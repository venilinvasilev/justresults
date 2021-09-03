import './App.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import React, { useEffect, useMemo } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Cookies } from 'react-cookie';

import { userAuthCheckSession } from './store/auth-slice';

import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { cartActions } from './store/cart-slice';

function App() {
    const userAuth = useSelector((state) => state.userAuth);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const cookie = useMemo(() => new Cookies(), []);

    useEffect(() => {
        if (userAuth.loggedIn) {
            const cartCookie = cookie.get(userAuth.username);
            dispatch({ type: cartActions.SET_USER_CART, payload: cartCookie });
        }
    }, [userAuth.loggedIn, userAuth.username, cookie, dispatch]);

    useEffect(() => {
        if (cart.changed && userAuth.loggedIn) {
            cookie.set(
                userAuth.username,
                JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                    totalPrice: cart.totalPrice,
                }),
                {
                    path: '/',
                }
            );
        }
    }, [cart, cookie, userAuth.loggedIn, userAuth.username]);
    useEffect(() => {
        dispatch(userAuthCheckSession);
    }, [dispatch]);
    return (
        <Router>
            <div className="container bg-dark App">
                <Header />
                <Content />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
