import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {




    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('fishs.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    }, [0])

    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={product} addToCart = {addToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <div className="cart-body">
                    <Cart Product={cart}></Cart>
                    </div>
                   
                </div>
            </div>

            
        </div>
    );
};

export default Shop;



