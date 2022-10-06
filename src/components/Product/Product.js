import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Product = (props) => {
    const { product, handleAddtoCart } = props;
    const { img, name, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>seller: {seller}</small></p>
                <p><small>ratings: {ratings} stars</small></p>
            </div>
            <button className='btn-cart' onClick={() => handleAddtoCart(product)}>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;