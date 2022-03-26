import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product,addToCart}) => {

    const {name, image, price}= product;

    return (
        <div>
            <div className="product-card">
                <img src={image} alt="Its Product Immage"/>
                <div className="Product-info">
                    <h3>Name: <span>{name}</span></h3>
                </div>
                <div className="price-conatiner">
                <p>Price:  <span>$ {price}</span> </p>
                <button onClick={()=>addToCart(product)}>Add Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;