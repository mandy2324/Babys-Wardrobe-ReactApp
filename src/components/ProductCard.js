import React, { useEffect, useState } from 'react';
import ProdApi from '../projectApi/ProdApi';

const ProductCard= ( props) => {

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

    const name = props.product.name ;

    const handleDelete = () => {
        const newList = [...props.productList];
        const index = newList.indexOf(props.product);
        newList.splice(index, 1);
        props.setProductList(newList);

        ProdApi.delete(props.product.id);
    }

    return (
        <div className='card'>

            <img src={props.product.imagePath} 
                 alt={name} 
                 className='product-img'
                 />

            <div className='card-body'  id="cardsProd">

                <h5 className='card-title'>{name}</h5>
                <p><strong>TYPE: </strong>{props.product.type}</p>
                <p><strong>GENDER: </strong>{props.product.gender}</p>
                <p><strong>AGE: </strong>{props.product.age}</p>
                <p><strong>PRICE: $</strong>{props.product.price}</p>
                  
                {
                    !inCart &&
                    <button className='btn btn-primary card-btn'
                        onClick={() => { props.addProduct(props.product, 1) }}
                    >
                        Add to Cart
                    </button>
                }
                {
                    inCart &&
                    <button className='btn btn-light card-btn m-auto'
                        onClick={() => { props.removeProduct(props.product.id) }}
                    >
                        Remove from Cart
                    </button>
                }

                <button className='btn btn-light card-btn m-auto'
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#productEditForm"
                        onClick={ () => { props.setToEdit(props.product) } }
                        >
                    Edit
                </button>
                <button className='btn btn-light card-btn m-auto'
                        onClick={ () => { handleDelete() } }
                        >
                    Delete
                </button>
            </div>
        </div>
    );
};
export default ProductCard;