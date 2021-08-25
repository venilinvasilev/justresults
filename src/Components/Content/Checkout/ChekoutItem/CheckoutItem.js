import './CheckoutItem.scss';

export default function ChekoutItem({ supplement }) {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <div className="col-4">
                <h6 className="text-primary fw-bold">{supplement.name}</h6>
                <small className="text-warning">{supplement.brand}</small>
            </div>
            <div className="d-flex justify-content-between col-8">
                <div className="text-dark">Quantity {supplement.totalQuantity} </div><div className="text-success">${supplement.totalPrice.toFixed(2)}</div>
            </div>

        </li>
    );
}