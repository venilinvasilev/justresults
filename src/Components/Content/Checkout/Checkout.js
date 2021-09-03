import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { parseFormData } from "../../../utils/misc";
import Loader from "../../Common/Loader";
import "./Checkout.scss";
import ChekoutItem from "./ChekoutItem";

export default function Checkout() {
    const user = useSelector((state) => state.userAuth);
    const cart = useSelector((state) => state.cart);
    const [discount, setDiscount] = useState(0);
    const promoCodes = {
        HESOYAM: 7,
    };
    const promoCodeInput = useRef();
    const handleUsePromoCode = (ev) => {
        ev.preventDefault();
        if (promoCodes.hasOwnProperty(promoCodeInput.current.value)) {
            return setDiscount(promoCodes[promoCodeInput.current.value]);
        }
        return setDiscount(0);
    };
    const handleCheckout = (ev) => {
        ev.preventDefault();
        const data = parseFormData(ev.target);
        console.log(data);
    };
    useEffect(() => {

    })
    if (!user.loggedIn) return <Loader />;
    return (
        <div className="container bg-dark p-4">
            <div className="py-5 text-center">
                <h2>Checkout</h2>
            </div>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">
                            {cart.totalQuantity}
                        </span>
                    </h4>
                    <ul className="list-group mb-3 sticky-top">
                        {cart.items.map((item) => (
                            <ChekoutItem key={item._id} supplement={item} />
                        ))}
                        <li className="list-group-item d-flex justify-content-between bg-dark">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            {discount ? (
                                <span className="text-success">-${discount}</span>
                            ) : (
                                <span className="text-success">${discount}</span>
                            )}
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-dark">
                            <span>Total (USD)</span>
                            <strong>${cart.totalPrice - discount}</strong>
                        </li>
                    </ul>
                    <form onSubmit={handleUsePromoCode} className="card p-2">
                        <div className="input-group">
                            <input
                                ref={promoCodeInput}
                                type="text"
                                className="form-control"
                                placeholder="Promo code"
                            />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">
                                    Redeem
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form onSubmit={handleCheckout} className="needs-validation" noValidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    defaultValue={user.firstName}
                                    required
                                />
                                <div className="invalid-feedback">
                                    {" "}
                                    Valid first name is required.{" "}
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    defaultValue={user.lastName}
                                    required
                                />
                                <div className="invalid-feedback">
                                    {" "}
                                    Valid last name is required.{" "}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="username">Username</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Username"
                                        defaultValue={user.username}
                                        required
                                    />
                                    <div className="invalid-feedback" style={{ width: "100%" }}>
                                        {" "}
                                        Your username is required.{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="you@example.com"
                                    defaultValue={user.email}
                                />
                                <div className="invalid-feedback">
                                    {" "}
                                    Please enter a valid email address for shipping updates.{" "}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="1234 Main St"
                                defaultValue={user.address}
                                required
                            />
                            <div className="invalid-feedback">
                                {" "}
                                Please enter your shipping address.{" "}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address2">
                                Address 2 <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="address2"
                                placeholder="Apartment or suite"
                            />
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="same-address"
                            />
                            <label className="custom-control-label" htmlFor="same-address">
                                Shipping address is the same as my billing address
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="save-info"
                            />
                            <label className="custom-control-label" htmlFor="save-info">
                                Save this information for next time
                            </label>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input
                                    id="credit"
                                    name="paymentMethod"
                                    type="radio"
                                    value="nqkfosi"
                                    className="custom-control-input"
                                    defaultChecked
                                    required
                                />
                                <label className="custom-control-label" htmlFor="credit">
                                    Credit card
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input
                                    id="debit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"
                                    required
                                />
                                <label className="custom-control-label" htmlFor="debit">
                                    Debit card
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input
                                    id="paypal"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"
                                    required
                                />
                                <label className="custom-control-label" htmlFor="paypal">
                                    PayPal
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" required />
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback"> Name on card is required </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Credit card number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-number"
                                    required
                                />
                                <div className="invalid-feedback">
                                    {" "}
                                    Credit card number is required{" "}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Expiration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-expiration"
                                    required
                                />
                                <div className="invalid-feedback"> Expiration date required </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-cvv">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" required />
                                <div className="invalid-feedback"> Security code required </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Continue to checkout
                        </button>
                    </form>
                </div>
            </div>
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2017-2019 Company Name</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="/">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/">Terms</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/">Support</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
