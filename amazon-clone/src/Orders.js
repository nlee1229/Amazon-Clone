import React, {useState, useEffect} from 'react';
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    // when the orders component loads, this useEffect runs
    useEffect(() => {
        if(user) { // if user exists
            db.collection("users")
            .doc(user?.uid) // getting the specific user 
            .collection("orders") // accessing specific user's orders
            .orderBy("created", "desc") // all the orders will be ordered based on date created in descending order (most recent on top)
            .onSnapshot(snapshot => ( // gives us a real time snapshot of the db
                setOrders(snapshot.docs.map(doc => ({ // snapshot.docs.map is going to map through the list of orders and will display all the orders
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;