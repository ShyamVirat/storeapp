// src/App.js
import React from 'react';
// import { BrowserRouter as Route,Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.scss';

function App() {
  return (

    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>

  );
}
export default App;


