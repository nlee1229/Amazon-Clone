import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-CBCC-unloggedin-header.png" 
                    alt="" 
                />
           

                <div>
                    <h2 className="checkout_title">Shopping Cart</h2>
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
        
    );
}

export default Checkout;
