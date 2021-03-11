import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
    const [{cart, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <LocationOnIcon className="location_on_icon" />
            <div className="header_option">
                <span className="header_optionLineOne">Hello</span>
                <span className="header_optionLineTwo">Select your address</span>
            </div>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">{user ? 'Sign Out' : 'Hello, Sign In'}</span>
                        <span className="header_optionLineTwo">Account & Lists</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionCart">
                        <ShoppingCartIcon /> 
                        <span className="header_optionLineTwo header_cartCount">{cart?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;
