import React, { useState } from 'react';
import "../../../../Scss/Category/_cards.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bestSellingOne from "../../../../Assets/Images/Slick Silder/best_selling1.jpg"
import bestSellingTwo from "../../../../Assets/Images/Slick Silder/best_selling2.jpg"
import bestSellingThree from "../../../../Assets/Images/Slick Silder/best_selling3.jpg"
import bestSellingFour from "../../../../Assets/Images/Slick Silder/best_selling5.jpg"


export default function Cards() {
  const [dropdown, setDropdown] = useState("Browse by popularity");

  const handleDropdownItemClick = (e) => {
    e.preventDefault();
    setDropdown(e.target.textContent)
  };
  return (
    <>
      <div className='d-flex justify-content-end mt-5'>
        <div></div>
        <div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle custom-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
              {dropdown}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>Browse by popularity</a></li>
              <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>Name</a></li>
              <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>NEW</a></li>
              <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>Old</a></li>
              <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>Price</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container main-card">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingOne} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-3'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingTwo} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingThree} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingFour} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingOne} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-3'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingTwo} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingThree} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingFour} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingOne} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-3'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingTwo} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingThree} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-md-4 p-0">
            <div className="card me-3" >
              <img src={bestSellingFour} className="card-img-top" alt="bestSellingOne" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Moon Dance</h5>
                <p className="card-text mb-0">J. R Rain</p>
                <div className='d-flex justify-content-between align-items-end'>
                  <div>
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStar} className='star-icon' />
                    <FontAwesomeIcon icon={faStarHalfStroke} className='star-icon' />
                    <p>(<span style={{ color: "#FF5700" }}>120</span> Review)</p>
                  </div>
                  <div>
                    <h5 className='text-danger fw-bold fs-4'>$50</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='text-center mt-5 mb-5'>
          <button className='border-btn border-btn2 more-btn2'>Browse More</button>
        </div>

      </div>
    </>
  )
}
