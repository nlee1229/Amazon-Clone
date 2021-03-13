import React, {useState, useEffect} from 'react';
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    // when the orders component loads, this useEffect runs
    useEffect(() => {
        db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot => { // gives us a real time snapshot of the db

        })
    }, [])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

        </div>
    );
}

export default Orders;