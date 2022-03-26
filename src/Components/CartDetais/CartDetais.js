import React from 'react';
import './CartDetais.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const CartDetais = ({product}) => {

    return (
        <div className='details-card'>
            <div className="icon-image">
                <img src={product.icon} alt="icon image" />
            </div>
            <h3>{product.name}</h3>
            <div className="delete-icon">
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default CartDetais;