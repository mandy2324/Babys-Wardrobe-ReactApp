import React, { useEffect, useState } from 'react';
import ProdApi from '../projectApi/ProdApi';

const CartCard = (props) => {

    const name = props.product.name;

    const handleDelete = () => {
        // todo delete cart item
    }

    return (
        <div className='cart-item'>
            <img src={props.product.imagePath}
                alt={name}
                className='cart-img'
            />

            <div className='cart-item-body'>
                <p>{props.product.name}</p>
                <p>{props.product.price}</p>
            </div>
        </div>
    );
};
export default CartCard;