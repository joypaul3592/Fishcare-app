import React, { useState } from 'react';
import './Cart.css'

const Cart = ({Product}) => {
    console.log(Product);
    // const [storagDb, setStorageDb] = useState({})
    let name = '';
    for(const selectProduct of Product){
        console.log(selectProduct.name); 
        
    }
    // console.log(storagDb);
    return (
        <div className='Cart'>
            <h1>Added Item</h1>
            <h2>{name}</h2>
            
        </div>
    );
};

export default Cart;