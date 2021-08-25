import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import './CartModal.scss';
import { cartActions } from '../../../store/cart-slice';
import { Link } from 'react-router-dom';
export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    if(!cart.activeModal) return <></>
    const closeModalHandler = () => {
        dispatch( {type: cartActions.CART_MODAL_TOGGLE });
    }
    return (
            <div className="cart">
                <div className="row">
                    <div className="col-md-8 p-4 bg-dark">
                        <div className="title">
                            <div className="row">
                                <div className="col">
                                    <h4><b>Shopping Cart</b></h4>
                                </div>
                                <div className="col align-self-center text-right text-muted">{cart.totalQuantity} items</div>
                            </div>
                        </div>
                        {cart.items.map(supplement => <CartItem supplement={supplement} />)}
                        <div className="d-flex justify-content-center pt-4"><button onClick={closeModalHandler} className="btn-small btn-warning text-white">Back to shop</button></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div>
                            <h5 className="text-center"><b>Summary</b></h5>
                        </div>
                        <hr />
                        <div className="row justify-content-between">
                            <div className="col">ITEMS {cart.totalQuantity}</div>
                            <div className="col text-right">$ {cart.totalPrice.toFixed(2)}</div>
                        </div>
                        <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">$ {cart.totalPrice.toFixed(2)}</div>
                        </div> <Link onClick={closeModalHandler} to="/checkout"><button className="btn btn-success">CHECKOUT</button></Link>
                    </div>
                </div>
            </div>

    );
}