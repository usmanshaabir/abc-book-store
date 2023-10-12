import React from 'react';
import '../../Scss/Header/_nextbar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Nextbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleActive = (event) => {
    setActiveLink(event)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-navbar ">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav navbar-nav-custom">
              <li className="nav-item">
                <Link to="/" className={activeLink === 'Home' ? "nav-link active" : "nav-link"} onClick={() => { handleActive('Home') }} aria-current="page">Home</Link >
              </li>
              <li className="nav-item">
                <Link to="/Categories" className={activeLink === 'Categories' ? "nav-link active" : "nav-link"} onClick={() => { handleActive('Categories') }}>Categories</Link >
              </li>
              <li className="nav-item">
                <Link to="/About" className={activeLink === 'About' ? "nav-link active" : "nav-link"} onClick={() => { handleActive('About') }}>About</Link >
              </li>
              <li className="nav-item dropdown">
                <Link to="" className={activeLink === 'Pages' ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => { handleActive('Pages') }}>
                  Pages
                </Link >
                <ul className="dropdown-menu">
                  <li><Link to="/Auth/login" className="dropdown-item">Login</Link ></li>
                  <li><Link to="/pages/cart" className="dropdown-item">Cart</Link ></li>
                  <li><Link to="/pages/checkout" className="dropdown-item">Checkout</Link ></li>
                  <li><Link to="" className="dropdown-item">Book Details</Link ></li>
                  <li><Link to="" className="dropdown-item">Blog Details</Link ></li>
                  <li><Link to="" className="dropdown-item">Element</Link ></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Blog" className={activeLink === 'Blog' ? 'nav-link active' : 'nav-link'} onClick={() => { handleActive('Blog') }}>Blog</Link >
              </li>
              <li className="nav-item">
                <Link to="/Contect" className={activeLink === 'Contect' ? "nav-link active" : 'nav-link'} onClick={() => { handleActive('Contect') }}>Contect</Link >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
