import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // sign in submission button
    const signIn = e => {
        e.preventDefault();
        // Firebase login
        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        // Firebase register
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // It successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                history.push("/") // Redirect if there authentication exists
            }
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" />
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign-In</button>
                </form>

                <small className="keep_signed_in">
                    <input type="checkbox" /> Keep me signed in.
                </small>

                <p>
                    By signing-in, you agree to NOT REAL AMAZON's Conditions of Use & Privacy Notice.
                </p>
            </div>
            <div className="new_to_amazon">
                <small className="new_account">
                    New to Amazon?
                </small>

                <button onClick={register} className="login_registerButton">Create your Amazon account</button>
            </div>
        </div>

    );
}

export default Login;

