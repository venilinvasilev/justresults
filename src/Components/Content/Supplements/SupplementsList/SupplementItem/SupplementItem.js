import './SupplementItem.scss';

import { truncate } from '../../../../../utils/misc/index';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../../store/cart-slice';
export default function SupplementItem({supplement}) {
    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch({ type: cartActions.CART_ADD_ITEM, payload: supplement });
    }
    return (
        <div className="col-12 col-lg-6 col-xl-4">
            <div className="card bg-dark p-3 supplement-item-card">
                <img className="card-img-top" src={`./${supplement.imageUrl}`} alt={supplement.name} />
                <div className="card-body">
                    <h5 className="card-title">{supplement.name}</h5>
                    <p className="card-text">
                        {truncate(supplement.description, 80, true)}
                    </p>
                    <div className="d-flex align-items-center justify-content-between"><p className="card-text align-middle text-warning m-0">Price: {supplement.price}$</p>
                    <button onClick={addToCartHandler} className="btn btn-light">Add to cart</button></div>
                </div>
            </div>
        </div>
    );
}