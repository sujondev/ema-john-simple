// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const stroedCart = getStoreCart()
        const saveCart = [];
        for (const id in stroedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quntity = stroedCart[id];
                addedProduct.quntity = quntity;
                addedProduct.quntity = quntity;
                saveCart.push(addedProduct)
            }
            setCart(saveCart)
        }
    }, [products])

    const handleAddtoCart = (selectedProduct) => {
        // console.log(product)
        const exists = cart.find(product => product.id === selectedProduct)
        let newCart = []
        if (!exists) {
            selectedProduct.quntity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct)
            exists.quntity = exists.quntity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Shop;