import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price
    }
    return (
        <div className="position-fixed order-summary">
            <h3>Course Summary</h3>
            <h5>Enroll Item : {cart.length}</h5>
            <h5>Total Price : ${total}</h5>
            <br/>
            <button className="btn btn-primary">Pay Now (Total ${total})</button>
            <br/>
            <br/>
        </div>
    );
};

export default Cart;