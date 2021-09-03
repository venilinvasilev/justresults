import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/cart-slice';
import './CartItem.scss';
export default function CartItem({supplement}) {
    const dispatch = useDispatch();
    const increaseProductHandler = () => {
        dispatch({ type: cartActions.CART_ADD_ITEM, payload: supplement });
    }
    const decreaseProductHandler = () => {
        dispatch({ type: cartActions.CART_DECREASE_ITEM_COUNT, payload: supplement });
    }
    const removeProductHandler = () => {
        dispatch({ type: cartActions.CART_REMOVE_ITEM, payload: supplement });
    }
    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src={`http://localhost:3000/${supplement.imageUrl}`} alt={supplement.name} /></div>
                <div className="col">
                    <div className="row text-light">{supplement.name}</div>
                    <div className="row">{supplement.brand}</div>
                </div>
                <div className="col"> <button onClick={decreaseProductHandler} className="btn btn-danger btn-sm px-2 py-0">-</button>{supplement.totalQuantity}<button onClick={increaseProductHandler} className="btn btn-success btn-sm px-2 py-0">+</button> </div>
                <div className="col">$ {supplement.totalPrice.toFixed(2)} <button onClick={removeProductHandler} className="btn btn-outline-danger px-1 py-0">✕</button></div>
            </div>
        </div>
    );
}