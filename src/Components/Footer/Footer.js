import React from 'react';
import "../../Scss/Footer/_footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/Images/BookLogo.png'

export default function Footer() {
  const date = new Date().getFullYear();

  function handleFacekbook() {
    window.open("https://www.facebook.com", '_blank')
  }
  function handleInstragram() {
    window.open("https://www.instagram.com", '_blank')
  }
  function handleLinkdin() {
    window.open("https://www.linkedin.com", '_blank')
  }
  function handleYouTube() {
    window.open("https://www.youtube.com", '_blank')
  }
  return (
    <div className='footer'>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3">
            <div>
              <img src={logo} alt="Logo Not Found" />
              <p className='mt-4 mb-4'>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
            </div>
            <div className='d-flex'>
              <div className='facebook me-2'>
                <FontAwesomeIcon icon={faFacebook} onClick={handleFacekbook} style={{ cursor: "pointer" }} />
              </div>
              <div className='facebook me-2'>
                <FontAwesomeIcon icon={faInstagram} onClick={handleInstragram} style={{ cursor: "pointer" }} />
              </div>
              <div className='facebook me-2'>
                <FontAwesomeIcon icon={faLinkedin} onClick={handleLinkdin} style={{ cursor: "pointer" }} />
              </div>
              <div className='facebook'>
                <FontAwesomeIcon icon={faYoutube} onClick={handleYouTube} style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <ul className='book-category'>
              <li className='mb-4 '><a href="#" className='fw-bold fs-6'>Book Category</a></li>
              <li className='mb-2'><a href="#">History</a></li>
              <li className='mb-2'><a href="#">Horror - Thriller</a></li>
              <li className='mb-2'><a href="#">Love Stories</a></li>
              <li className='mb-2'><a href="#">Science Fiction</a></li>
              <li><a href="#">Business</a></li>
            </ul>
          </div>
          <div className="col-md-3  mt-5">
            <ul className='book-category'>
              <li className='mb-2'><a href="#">Biography</a></li>
              <li className='mb-2'><a href="#">Astrology</a></li>
              <li className='mb-2'><a href="#">Digital Marketing</a></li>
              <li className='mb-2'><a href="#">Software Development</a></li>
              <li><a href="#">Ecommerce</a></li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <ul className='book-category'>
              <li className='mb-4 '><a href="#" className='fw-bold fs-6'>Site Map</a></li>
              <li className='mb-2'><a href="#">Home</a></li>
              <li className='mb-2'><a href="#">About Us</a></li>
              <li className='mb-2'><a href="#">FAQs</a></li>
              <li className='mb-2'><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-center mt-5'>Copyright @ {date}  All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <a href="#">Colorlib</a></p>
        </div>
      </div>
    </div>
  )
}
