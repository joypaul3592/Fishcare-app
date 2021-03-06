import React, { useEffect, useState } from 'react';
import CartDetais from '../CartDetais/CartDetais';
import './Cart.css'
import ChooseCart from '../ChooseCart/ChooseCart';

const Cart = ({Products, resetFun}) => {
    console.log(Products);

    const [chooseItem, setChooseItem] = useState({})
    
    const chooseForMe = product=>{
    const random = Math.floor(Math.random()*product.length)

    setChooseItem(product[random]);
    
   }


//    const [resetData, setResetData] = useState([])

//    const reset = () =>{
    
//   } 

    return (
        <div className='Cart'>
            <div className="cart-header">
                <h1>Added Item</h1>
            </div>
           
            <div className="cart-info">
                {
                    Products.map(product=><CartDetais key={product.id} product={product}></CartDetais>)
                }
            </div>

            <div className="choose-btn">
                <button onClick={()=>chooseForMe(Products)}>Choose For Me</button>
                <button onClick={()=>resetFun()}>Reset</button>
            </div>

            <ChooseCart chooseItem={chooseItem}></ChooseCart>
            
        </div>
    );
};

export default Cart;