import React from 'react';
import '../../../../Scss/Home/_feature.scss';
import Slider from "react-slick";
import featureBook from '../../../../Assets/Images/best-books1.jpg';
import Add from '../../../../Assets/Images/ad.jpg'
import ReactStars from "react-rating-stars-component";

export default function Feature() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container feature mb-5">
      <div className="row mt-5">
        <div className="col-md-9">
          <div className='d-flex justify-content-between '>
            <div>
              <h2>Featured This Week</h2>
            </div>
            <div>
              <button className="btn btn-view">View All</button>
            </div>
          </div>
          <div className='bg-danger'>
            <Slider {...settings}>
              <div className='pt-3 ps-3'>
                <div className="card mb-3 border-0" style={{ maxWidth: "540 px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 bg-danger">
                      <img src={featureBook} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 bg-danger card-text">
                      <div className="card-body mt-5 ms-4">
                        <h5 className="card-title ">The Rage of Dragons</h5>
                        <p className="card-text text-white">By Evan Winter</p>
                        <p className="card-text text-white fw-bold fs-3 ">$50.00</p>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"
                        />
                        <button className="btn btn-lg text-white border rounded-pill">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pt-3 ps-3'>
                <div className="card mb-3 border-0" style={{ maxWidth: "540 px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 bg-danger">
                      <img src={featureBook} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 bg-danger card-text">
                      <div className="card-body mt-5 ms-4">
                        <h5 className="card-title ">The Rage of Dragons</h5>
                        <p className="card-text text-white">By Evan Winter</p>
                        <p className="card-text text-white fw-bold fs-3 ">$50.00</p>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"
                        />
                        <button className="btn btn-lg text-white border rounded-pill">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-md-3 ">
          <img src={Add} className='w-100 add' alt="" />
        </div>
      </div>
    </div>
  )
}
