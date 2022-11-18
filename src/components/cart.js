import React, { useEffect, useState } from 'react';
import OrderApi from '../projectApi/OrderApi';
import CartCard from './CartCard';

const Cart = (props) => {

    const [displayEmpty, setDisplayEmpty] = useState(false)

    const handleCheckout = (event) => {
        let jwt = sessionStorage.getItem('jwt') // TODO get userId from jwt

        let order = { 'userId': '1', 'purchases': props.cart }
        OrderApi.addOrder(order);
    }

    useEffect(() => {
        if (props.cart.length === 0) {
            setDisplayEmpty(true)
        }
        else {
            setDisplayEmpty(false)
        }

    })

    return (
        <div>
            <h2 className="display-3">Shopping Cart</h2>

            {
                displayEmpty &&
                <div className="alert alert-info">
                    Your cart is empty.
                </div>
            }

            <div id='cart-list'>
                {
                    props.cart.map(p => <CartCard key={p.id}
                        product={p}
                        updateProduct={props.updateProduct}
                        removeProduct={props.removeProduct}
                    />
                    )
                }
            </div>

            {
                !displayEmpty &&
                <button className='btn btn-primary'
                    onClick={() => { handleCheckout() }}
                >
                    Checkout
                </button>
            }
        </div>
    );
};

export default Cart; 