import React from 'react';
import './ChooseCart.css'

const ChooseCart = ({chooseItem}) => {
    return (
        <div>
            <h1>{chooseItem.name}</h1>
        </div>
    );
};

export default ChooseCart;