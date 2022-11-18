import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Recycle from './components/Recycle';
import Login from './components/login';
import Signup from './components/Signup';
import ProductsView from './components/ProductsView';
import CreateProducts from './components/CreateProducts';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addProduct = (product, qty) => {
    product.qty = qty
    setCart([...cart, product])
  }

  const updateProduct = (productId, qty) => {
    console.log('todo: updateProduct')
  }
  const removeProduct = (productId) => {
    let newCart = [...cart];

    var productToRemove = newCart.find(product => {
      return product.id === productId;
    })

    let index = newCart.indexOf(productToRemove);

    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/recycle" element={<Recycle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart
          cart={cart}
          updateProduct={updateProduct}
          removeProduct={removeProduct}
        />} />
        <Route path="/addProd" element={<CreateProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/viewProducts" element={<ProductsView
          cart={cart}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />} />
      </Routes>

    </div>
  );
}

export default App;