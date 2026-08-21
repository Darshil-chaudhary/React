import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<h1>404 not found</h1>}></Route>
    </Routes>
    </>
  )
}

export default App