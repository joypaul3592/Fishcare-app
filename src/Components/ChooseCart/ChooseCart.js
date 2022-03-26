import React from 'react';
import './ChooseCart.css'

const ChooseCart = ({chooseItem}) => {
    return (
        <div className='choose-card'>
            <img src={chooseItem.icon} alt="" />
            <h3>{chooseItem.name}</h3>
        </div>
    );
};

export default ChooseCart;