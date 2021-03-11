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
                        id="23874509"
                        title="Echo Dot (2nd Generation) - Smart speaker with Alexa - Black" 
                        price={39.99} 
                        image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
                        rating={4}
                    />
                    <Product 
                        id="97846364"
                        title="CANDLE WARMERS ETC, Midas 2-in-1 Fragrance Warmer for Warming Scented Candles or Wax Melts and Tarts with to Freshen Room" 
                        price={17.81} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71t80z2e1ZL._AC_SL1500_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home_row">
                    <Product 
                        id="67492563"
                        title="Fire TV Stick 4K streaming device" 
                        price={49.99} 
                        image="https://i.insider.com/5cbe1f80b14bf407f11cf82b?width=1100&format=jpeg&auto=webp"
                        rating={5}
                    />
                    <Product 
                        id="29836543"
                        title="8 Pin to Type C Adapter 2-Pack, Coolbee 8-Pin Female to Type C(USB C) Male Charge and Sync Adapter Transfer 8 Pin Cable to USB-C Cable for USBC Type C Devices (Gray)" 
                        price={14.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51WDO5z5KHL._AC_SX466_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="59240924"
                        title="Leather Passport Holder Travel Wallet - RFID Blocking Genuine Leather Travel Wallet for Men and Women - Bifold Passport Wallet for Travel" 
                        price={37.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71nI6wtdntL._AC_SY355_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product 
                        id="72569849"
                        title="Quilted Northern  Ultra Plush Toilet Paper, Pack of 48 Double Rolls (Four 12-roll packages), Equivalent to 96 Regular Rolls--Packaging May Vary" 
                        price={52.00} 
                        image="https://m.media-amazon.com/images/I/91wfLZn9yWL._AC_UL320_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="74902567"
                        title="ClarityRx Beauty Basics Skincare Kit for All Skin Types" 
                        price={48.50} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71osR1OpVNL._SX466_.jpg"
                        rating={5}
                    />
                     <Product 
                        id="74907622"
                        title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | 19 Ounce" 
                        price={16.08} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._SY355_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="87237726"
                        title="Woobamboo! Eco-Friendly Toothpaste Bundle: 3 Marshmallow Natural Toothpaste" 
                        price={19.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61Rc-mYtGJL._AC_SY450_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home_row">
                    <Product 
                            id="09266426"
                            title="Samsung Galaxy S10 128GB+8GB RAM SM-G973F/DS Dual Sim 6.1' LTE Factory Unlocked Smartphone (International Model No Warranty) (Prism White)" 
                            price={589.95} 
                            image="https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SX522_.jpg"
                            rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
