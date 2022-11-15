import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Recycle from './components/Recycle';
import Login from './components/login';
import Signup from './components/signup';


function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Routes>
        <Route path="/recycle" element={<Recycle />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>



    </div>
  );
}

export default App;

