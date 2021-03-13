import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import {Link} from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = e => {
        // all stripe things
    }

    return (
        <div className="payment">

            <div className="payment_container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{cart?.length} items</Link>
                    )
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React Ln.</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>


                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
