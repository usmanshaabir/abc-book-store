import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout';

export default function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
