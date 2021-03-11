import React from 'react';
import "./Product.css";


function Product({id, title, image, price, rating}) {
    const addToCart = () => {
        // dispatch the item into the data layer
    }



    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐ </p>
                    ))}
                </div>
            </div>

            <img 
                src={image}
                alt=""
            />
            <button onClick={addToCart}>Add to Cart</button>
            </div>
    );
}

export default Product;
