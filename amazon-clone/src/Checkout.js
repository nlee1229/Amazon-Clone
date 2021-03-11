import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";


function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-CBCC-unloggedin-header.png" 
                    alt="" 
                />
           

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Shopping Cart</h2>

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

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
        
    );
}

export default Checkout;
