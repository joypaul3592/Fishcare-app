import React, { useState } from 'react';
import CartDetais from '../CartDetais/CartDetais';
import './Cart.css'
import ChooseCart from '../ChooseCart/ChooseCart';

const Cart = ({Products}) => {
    // console.log(Products);
    const [chooseItem, setChooseItem] = useState({})
    
   const chooseForMe = product=>{
 
     let item = product[Math.floor(Math.random()*product.length)];

    setChooseItem(item);
    
   }
   

   const reset = (products)=>{
     setChooseItem([])
   } 

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
                <button onClick={()=>reset(chooseItem)}>Reset</button>
            </div>



            {/* <ChooseCart chooseItem={chooseItem}></ChooseCart> */}
            
        </div>
    );
};

export default Cart;