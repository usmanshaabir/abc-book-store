import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Frontend/Home/index';
import Categories from '../Frontend/Categories/index';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import About from './About/About';
import Blog from './Blog/Blog';

export default function Index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='Categories' element={<Categories />} />
                    <Route path='About' element={<About />} />
                    <Route path='Blog' element={<Blog />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
