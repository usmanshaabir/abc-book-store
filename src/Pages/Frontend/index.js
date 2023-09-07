import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Frontend/Home/index';
import Categories from '../Frontend/Categories/index';
import Header from '../../Components/Header';
// import Footer from '../../Components/Footer';

export default function Index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='Categories' element={<Categories />} />
                </Routes>
            </main>
            {/* <Footer /> */}
        </>
    )
}
