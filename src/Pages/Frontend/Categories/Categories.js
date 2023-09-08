import React from 'react';
import '../../../Scss/Category/_categories.scss'
import SideArea from './Sidebar/SideArea';
import Cards from './Cards/Cards';

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
                    <div className="row">
                        <div className='section-bg'>
                            <div className='text-center '>
                                <h3>Join Newsletter</h3>
                                <p>Lorem started its journey with cast iron (CI) products in 1980. The initial main <br /> objective was to ensure pure water and affordable irrigation.</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                                <div className='me-3'>
                                    <input type="text" className="form-control rounded-pill" placeholder="Enter your email" />
                                </div>
                                <div>
                                    <button className='btn   rounded-pill'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
