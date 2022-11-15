import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Recycle from './components/Recycle';


function App() {
  return (
    <div className="App">
      <Header> </Header>
      <Routes>
        <Route path="/recycle" element={<Recycle />} />
      </Routes>



    </div>
  );
}

export default App;

