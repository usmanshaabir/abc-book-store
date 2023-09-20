import React from 'react';
import '../../../Scss/Category/_categories.scss'
import SideArea from './Sidebar/SideArea';
import Cards from './Cards/Cards';
import NewsLetter from '../Home/Newsletter/NewsLetter';

export default function Categories() {
    return (
        <div className='Categories'>
            <div className="container">
                <div className="row">
                    <div className='book-category d-flex justify-content-center align-items-center'>
                        <p className='img-text'>Book Category</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <SideArea />
                    </div>
                    <div className="col-lg-8">
                        <Cards />
                    </div>
                    <NewsLetter />
                </div>
            </div>
        </div>
    )
}
