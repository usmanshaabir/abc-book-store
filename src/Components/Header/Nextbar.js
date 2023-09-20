import React from 'react';
import '../../Scss/Header/_nextbar.scss';
import { Link } from 'react-router-dom';


export default function Nextbar() {
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
                <Link to="/" className="nav-link " aria-current="page">Home</Link >
              </li>
              <li className="nav-item">
                <Link to="/Categories" className="nav-link">Categories</Link >
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link >
              </li>
              <li className="nav-item dropdown">
                <Link to="" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </Link >
                <ul className="dropdown-menu">
                  <li><Link to="/Auth/login" className="dropdown-item">Login</Link ></li>
                  <li><Link to="/pages/cart" className="dropdown-item">Cart</Link ></li>
                  <li><Link to="" className="dropdown-item">Checkout</Link ></li>
                  <li><Link to="" className="dropdown-item">Book Details</Link ></li>
                  <li><Link to="" className="dropdown-item">Blog Details</Link ></li>
                  <li><Link to="" className="dropdown-item">Element</Link ></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Blog" className="nav-link">Blog</Link >
              </li>
              <li className="nav-item">
                <Link to="/Contect" className="nav-link">Contect</Link >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
