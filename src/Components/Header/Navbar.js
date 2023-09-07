import React, { useEffect, useState } from 'react';
import '../../Scss/Header/_navbar.scss';
import BookLogo from '../../Assets/Images/BookLogo.png';
import cart from '../../Assets/Images/cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth = 768);
    };

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={BookLogo} alt="BookLogo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex position-relative search-mian ms-5 mt-2 ">
              <input className="form-control form-input me-2 position-relative rounded-pill " type="search" placeholder="Search book by author or publisher" aria-label="Search" />
              <FontAwesomeIcon className='position-absolute search-icon' icon={faSearch} />
            </div>
            {isMobile ? (
              <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                <div className='d-flex justify-content-evenly'>
                  <div className="nav-item">
                    <a className="nav-link active me-4 mt-2" aria-current="page" href="#">FAQ</a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link active me-4 mt-2" aria-current="page" href="#">Track Order</a>
                  </div>
                </div>
                <div className='d-flex justify-content-evenly mt-3'>
                  <div>
                    <img src={cart} className='me-4' alt="cart" />
                  </div>
                  <div>
                    <button className='btn btn-danger rounded-pill ps-4 pe-4 '>Sign in</button>
                  </div>
                </div>
              </div>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active me-4" aria-current="page" href="#">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active me-4" aria-current="page" href="#">Track Order</a>
                </li>
                <li className="nav-item">
                  <img src={cart} className='me-4' alt="cart" />
                </li>
                <li className="nav-item">
                  <button className='btn btn-danger rounded-pill ps-4 pe-4 button-LP '>Sign in</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>

  )
}
