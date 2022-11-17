import React, { useState } from 'react';
import ProdApi from '../projectApi/ProdApi';

const CreateProducts = () => {

    const [product, setProduct] = useState({
        id: '',
        name: '',
        type: '',
        gender: '',
        age: '',
        color: '',
        price: '',
        imagePath: ''
    })

    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        // Convert color input into an array
        product.color=product.color.toString().split(',')
        console.log(product)    // TODO delete this

        ProdApi.add(product)
        event.preventDefault()
    }

    const clearForm = () => {
        setProduct({
            id: '',
            name: '',
            type: '',
            gender: '',
            age: '',
            color: '',
            price: '',
            imagePath: ''
        })
    }

    return (
        <div>

            <div  id = "prodForm" className='new-product-form border'
                style={{
                    width: "70%",
                    margin: "0 auto",
                    padding: "1rem"
                   
                }}>

                <h2 className="display-5"
                    style={{ marginBottom: "1rem" }}
                >
                    Create product
                </h2>

                <form onSubmit={handleSubmit} >

                    {/* PRODUCT NAME INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='product-name'
                            className='form-label'>
                            Product Name
                        </label>
                        <input className='form-control'
                            type='text'
                            id='product-name'
                            name='name'
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Product Type  INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='product-type'
                            className='form-label'>
                            Product Type
                        </label>
                        <input className='form-control'
                            type='text'
                            id='product-type'
                            name='type'
                            value={product.type}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Gender INPUT */}
                 
                    <div className='mb-3'>
                        <label htmlFor='product-gender' 
                               className='form-label'>
                            Gender   ( B , G , U )
                        </label>
                        <input className='form-control'
                               type='text'
                               id='product-gender'
                               name='gender'
                               value={product.gender}
                               onChange={ handleChange }
                               required
                               />
                    </div>
                    {/* Age INPUT */}

                    <div className='mb-3'>
                        <label htmlFor='product-age' 
                               className='form-label'>
                            Age - Group
                        </label>
                        <input className='form-control'
                               type='text'
                               id='product-age'
                               name='age'
                               value={product.age}
                               onChange={ handleChange }
                               required
                               />
                    </div>


                    {/* COLOR INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='product-color'
                            className='form-label'>
                            COLOR
                        </label>
                        <input className='form-control'
                            type='text'
                            id='product-color'
                            name='color'
                            value={product.color}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* PRICE  INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='product-price'
                            className='form-label'>
                            PRICE
                        </label>
                        <input className='form-control'
                            type='text'
                            id='product-Price'
                            name='price'
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* IMAGE PATH INPUT */}
                    <div className='mb-3'>
                        <label htmlFor='product-image-path'
                            className='form-label'>
                            Image Path
                        </label>
                        <input className='form-control'
                            type='text'
                            id='product-image-path'
                            name='imagePath'
                            value={product.imagePath}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className='btn btn-light'
                        type='submit'>
                        Create
                    </button>

                    <button className='btn btn-light'
                        style={{ marginLeft: "0.5rem" }}
                        onClick={() => { clearForm() }}
                    >
                        Clear
                    </button>

                </form>

            </div>


        </div>
    );
};

export default CreateProducts;