import React from 'react';
import Carousel from './Carousel Slider/Carousel';
import Feature from './Feature/Feature';
import Items from './PublishItem/Items';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

export default function index() {
    return (
        <>
            <Header />
            <Carousel />
            <Feature />
            <Items />
            <Footer />
        </>
    )
}
