import React, { useEffect, useState } from 'react';

const ProductCard = (props) => {

    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        // Toggles Add to Cart button if product is already in cart
        var found = props.cart.find(cartProduct => {
            return cartProduct.id === props.product.id;
        })

        if (found) {
            setInCart(true);
        }
        else {
            setInCart(false);
        }
        console.log(props.cart) //todo remove
    })

    return (
        <div className='card'>

            <img src={props.product.imagePath}
                alt={props.product.name + ' image'}
                className='product-img'
            />

            <div className='card-body'>
                <h5 className='card-title'>{props.product.name}</h5>
                <p><strong>$</strong>{props.product.price}</p>

                {
                    !inCart &&
                    <button className='btn btn-primary card-btn'
                        onClick={() => { props.addProduct(props.product) }}
                    >
                        Add to Cart
                    </button>
                }
                {
                    inCart &&
                    <button className='btn btn-primary card-btn'
                        onClick={() => { props.removeProduct(props.product.id) }}
                    >
                        Remove from Cart
                    </button>
                }
            </div >
        </div >
    );
};

export default ProductCard;