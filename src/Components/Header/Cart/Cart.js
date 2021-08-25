import './Cart.scss';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const renderCount = useRef(1);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes('supplements') && !cart.active) {
            renderCount.current += 1
            return dispatch({ type: cartActions.CART_DISPLAY });
        } else if (!location.pathname.includes('supplements') && cart.active) {
            renderCount.current += 1
            return dispatch({ type: cartActions.CART_HIDE });
        }
    }, [location, dispatch, cart.active]);
    const activateCartModalHandler = () => {
        return dispatch({ type: cartActions.CART_MODAL_TOGGLE });
    }
    return (
        <div className="col-6 p-5">
            {cart.active &&
                <button onClick={activateCartModalHandler} className="btn p-2 bg-dark cart-button">
                    <div>
                        <img src="http://localhost:3000/img/icons/shopping-cart.svg" alt="Cart Icon" />
                        <span className="cart-item-count">{cart.totalQuantity}</span>
                    </div>
                </button>
            }
        </div>
    );
}