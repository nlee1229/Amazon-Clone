import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                
                <div className="home_row">
                    <Product 
                    title="Echo Dot (3rd Gen)" 
                    price={39.99} 
                    image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
                    rating={4}
                    />
                    <Product />
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Home;
