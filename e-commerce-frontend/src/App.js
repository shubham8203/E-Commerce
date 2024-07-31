import React, {useState,useEffect} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import banner_mens from './components/assets/Ecommerce_Assets/Assets/Frontend_Assets/banner_mens.png'
import banner_women from './components/assets/Ecommerce_Assets/Assets/Frontend_Assets/banner_women.png'
import banner_kids from './components/assets/Ecommerce_Assets/Assets/Frontend_Assets/banner_kids.png'
import Category from './components/Category/Category';
import Search from './pages/Search';


function App(){
  
 
     
    return ( 
      
    <>
    <BrowserRouter>
    <Navbar/>
    {(window.location.pathname!=='/login'&&window.location.pathname!=='/signup')&&<Category/>} 
    <Routes>
      <Route path='/search' element={<Search search={localStorage.getItem('search')} />}></Route>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory banner={banner_mens} category="mens-wear"/>}></Route>
      <Route path='/womens' element={<ShopCategory banner={banner_women} category="women-wear"/>}></Route>
      <Route path='/kids' element={<ShopCategory banner={banner_kids} category="Kids"/>}></Route>
      <Route path="/product" >
          <Route path=":productId" element={<Product/>}>

          </Route>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Loginsignup/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

     
    </>
    
)
 
  

};

export default App;

