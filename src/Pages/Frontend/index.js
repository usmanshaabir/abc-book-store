import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import About from './About';
import Blog from './Blog';
import Contect from './Contect';
import Pages from './Pages/index';

export default function Index() {
    return (

        <Routes>
            <Route index element={<Home />} />
            <Route path='Categories/' element={<Categories />} />
            <Route path='About/' element={<About />} />
            <Route path='Blog/' element={<Blog />} />
            <Route path='Contect/' element={<Contect />} />
            <Route path='pages/*' element={<Pages />} />
        </Routes>



    )
}
