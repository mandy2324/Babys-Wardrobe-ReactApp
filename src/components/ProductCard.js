import React from 'react';
import ProdApi from '../projectApi/ProdApi';


const ProductCard= ( props) => {
    
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
            
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p><strong>ID: </strong>{props.product.id}</p>
                <p><strong>NAME </strong>{props.product.name}</p>
                <p><strong>GENDER</strong>{props.product.gender}</p>
                <p><strong>PRICE </strong>{props.product.price}</p>
                <p><strong>AGE </strong>{props.product.age}</p>
                
                <button className='btn btn-primary card-btn'
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#productEditForm"
                        onClick={ () => { props.setToEdit(props.product) } }
                        >
                    Edit
                </button>
                <button className='btn btn-danger card-btn'
                        onClick={ () => { handleDelete() } }
                        >
                    Delete
                </button>
            </div>
        </div>
    );
};
export default ProductCard;
