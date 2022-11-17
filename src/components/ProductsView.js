import React, { useEffect, useState } from 'react';
import ProdApi from '../projectApi/ProdApi';

const ProductsView = () => {

    const [displayEmpty, setDisplayEmpty] = useState(false)
    const[productList, setProductList] = useState([]);
    const[ toEdit, setToEdit ] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        imagePath: ''
    });

    useEffect( () => {
        ProdApi.getAll(setProductList)
    }, [] )

    useEffect( () => {
        if(productList.length === 0) {
            setDisplayEmpty(true)
        }
        else {
            setDisplayEmpty(false)
        }

    }, [productList] )

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

            <h2 className="text-center display-3">Products</h2>

            {
                displayEmpty && 
                <div className="alert alert-info">
                    There are no Product to display, please try creating some Product.
                </div>
            }

            <div id='product-cards'>
            {
                productList.map( p => <ProductsView key={p.id}
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
                 id='EditForm'
                 >
                <div className='offcanvas-header'>
                    <h5 className='offcanvas-title'
                        id='EditFormLabel'
                        >
                        Edit product with ID = {toEdit.id}
                    </h5>
                    <button type='button'
                            className='btn-close'
                            data-bs-dismiss='offcanvas'>
                    </button>
                </div>

                <div className='offcanvas-body'>

                    <form onSubmit={ updateProduct }>

                        {/* FIRST NAME INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='-first-name' 
                                className='form-label'>
                                    First Name
                            </label>
                            <input className='form-control'
                                type='text'
                                id='-first-name'
                                name='firstName'
                                value={toEdit.firstName}
                                onChange={ handleChange }
                                required
                                />
                        </div>

                        {/* LAST NAME INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='-last-name' 
                                className='form-label'>
                                    Last Name
                            </label>
                            <input className='form-control'
                                type='text'
                                id='-last-name'
                                name='lastName'
                                value={toEdit.lastName}
                                onChange={ handleChange }
                                required
                                />
                        </div>

                        {/* EMAIL INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='-email' 
                                className='form-label'>
                                    Email
                            </label>
                            <input className='form-control'
                                type='email'
                                id='-email'
                                name='email'
                                value={toEdit.email}
                                onChange={ handleChange }
                                required
                                />
                                <div className='form-text'>
                                    You may not use duplicate emails, make sure your email is unique.
                                </div>
                        </div>

                        {/* DEPARTMENT INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='-department' 
                                className='form-label'>
                                    Department
                            </label>
                            <input className='form-control'
                                type='text'
                                id='-department'
                                name='department'
                                value={toEdit.department}
                                onChange={ handleChange }
                                required
                                />
                        </div>

                        {/* IMAGE PATH INPUT */}
                        <div className='mb-3'>
                            <label htmlFor='-image-path' 
                                className='form-label'>
                                    Image Path
                            </label>
                            <input className='form-control'
                                type='text'
                                id='-image-path'
                                name='imagePath'
                                value={toEdit.imagePath}
                                onChange={ handleChange }
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