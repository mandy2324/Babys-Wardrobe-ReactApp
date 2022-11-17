import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProdApi from '../projectApi/ProdApi';


const ProductsView = () => {

    const [displayEmpty, setDisplayEmpty] = useState(false)
    const [productList, setProductList] = useState([]);
    const [toEdit, setToEdit] = useState({
        id: '',
        name: '',
        type: '',
        gender: '',
        age: '',
        color: '',
        price: '',
        imagePath: ''
    });

    useEffect(() => {
        ProdApi.getAll(setProductList)
    }, [])

    useEffect(() => {
        if (productList.length === 0) {
            setDisplayEmpty(true)
        }
        else {
            setDisplayEmpty(false)
        }

    }, [productList])

    const handleChange = (event) => {
        setToEdit({
            ...toEdit,
            [event.target.name]: event.target.value
        })
    }

    const updateProduct = (event) => {

        ProdApi.update(toEdit, productList, setProductList)

        event.preventDefault()
    }

    return (
        <div>

            <h2 className="display-3">Products</h2>

            {
                displayEmpty &&
                <div className="alert alert-info">
                    There are no products to display, please try creating some products.
                </div>
            }

            <div id='product-cards'>
                {
                    productList.map(p => <ProductCard key={p.id}
                        product={p}
                        productList={productList}
                        setProductList={setProductList}
                        setToEdit={setToEdit}
                    />
                    )
                }
            </div>


            <div className='offcanvas offcanvas-start'
                tabIndex='-1'
                id='productEditForm'
            >
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title'
                        id='productEditFormLabel'
                    >
                        Edit Product with ID = {toEdit.id}
                    </h5>
                    <button type='button'
                        className='btn-close'
                        data-bs-dismiss='offcanvas'>
                    </button>
                </div>

                <div className='offcanvas-body'>

                    <form onSubmit={updateProduct}>

                        {/*  NAME INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='product-name'
                                className='form-label'>
                               Product Name
                            </label>
                            <input className='form-control'
                                type='text'
                                id='product-name'
                                name='name'
                                value={toEdit.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/*Type INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='product-type'
                                className='form-label'>
                                Type
                            </label>
                            <input className='form-control'
                                type='text'
                                id='product-type'
                                name='type'
                                value={toEdit.type}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Gender INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='product-gender'
                                className='form-label'>
                               Gender
                            </label>
                            <input className='form-control'
                                type='text'
                                id='product-gender'
                                name='gender'
                                value={toEdit.gender}
                                onChange={handleChange}
                                required
                            />
                            
                        </div>

                        {/* age INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='product-age'
                                className='form-label'>
                                Age
                            </label>
                            <input className='form-control'
                                type='text'
                                id='product-age'
                                name='age'
                                value={toEdit.age}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        
                        {/* color INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='product-color'
                                className='form-label'>
                                Color
                            </label>
                            <input className='form-control'
                                type='text'
                                id='product-color'
                                name='color'
                                value={toEdit.color}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        
                        {/* price INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='product-price'
                                className='form-label'>
                                Price
                            </label>
                            <input className='form-control'
                                type='text'
                                id='product-price'
                                name='price'
                                value={toEdit.price}
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
                                value={toEdit.imagePath}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button className='btn btn-primary'
                            type='submit'
                            data-bs-dismiss="offcanvas"
                        >
                            Update
                        </button>


                    </form>

                </div>

            </div>







        </div>
    );
};

export default ProductsView; 