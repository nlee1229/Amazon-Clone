import React, {useState, useEffect} from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import {Link, useHistory} from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./Reducer";
import axios from "./axios";

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a user
        // ** everything in this function ** whenever the cart changes, we need a new secret b/c the price changes. It will update the special dtripe swcret which allows us to charge the correct amount
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits (if you're using dollars, it expects you to pass a total amount in cents, but to prevent that we do this )
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])

    console.log("THE SECRET IS >>>", clientSecret);

    const handleSubmit = async (event) => {
        // all stripe things
        event.preventDefault(); // will stop it from refreshing
        setProcessing(true); // set processing to true... stop users from clicking the button multiple times

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent is basically payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace("/orders") // after placing an order, we will send users to the order page
        })
    }

    const handleChange = e => {
        // listens for changes in CardElement & display any errors as user types their card details
        setDisabled(e.empty); // if event is empty, then disable the button
        setError(e.error ? e.error.message: ""); // if there is an error, show the error or show nothing
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
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
