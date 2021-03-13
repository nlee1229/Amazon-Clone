import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue} from "./StateProvider";
import HeaderTwo from "./HeaderTwo";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

// For Stripe
const promise = loadStripe("pk_test_51IUKWwJpaSoRz1wyKwyZBiTqWIw4D6XvithP9x11nvyZRiYtyD5rpuQ59hg2WW7vYv8TwKWMJbfTQPqxqa7pc4aj00iCl3p0RO");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads 
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER', 
          user: null
        })
      }
    }) // whenever the authentication changes, 
  }, [])


  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <HeaderTwo />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <HeaderTwo />
            <Elements stripe={promise}>
              <Payment />
            </Elements> 
          </Route>
          <Route path="/">
            <Header />
            <HeaderTwo />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
