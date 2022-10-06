import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quntity
        shipping += product.shipping
        quantity += product.quntity
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandtotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p><small>Tax: ${tax}</small></p>
            <h5>Grand Total: ${grandtotal}</h5>
        </div>
    );
};

export default Cart;