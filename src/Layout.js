import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import 'antd/dist/antd.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import Product from './components/Product/Product';
import ProductPage from './components/Product/ProductPage';
import Cart from './components/Cart/Cart';
import SingleCart from './components/Cart/SingleCard';
import Register from './components/register/Register';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/NotFound';

const Layout = () => {

    return (
        <div>
            <Navbar />
            <div className='body overflow-hidden'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/product/:category' element={<Product />} />
                    <Route path='/products' element={<ProductPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/products/:id' element={<SingleCart />} /> 
                    <Route path='*' element={<NotFound />} /> 
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
