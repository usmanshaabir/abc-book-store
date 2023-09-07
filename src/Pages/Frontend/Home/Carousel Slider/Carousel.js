import React from 'react';
import Slider from "react-slick";
import '../../../../Scss/Home/_carousel.scss'
import heroOne from '../../../../Assets/Images/h1_hero1.jpg'
import heroTwo from '../../../../Assets/Images/h1_hero2.jpg'
import heroThree from '../../../../Assets/Images/h1_hero3.jpg'
import bestSellingOne from "../../../../Assets/Images/Slick Silder/best_selling1.jpg"
import bestSellingTwo from "../../../../Assets/Images/Slick Silder/best_selling2.jpg"
import bestSellingThree from "../../../../Assets/Images/Slick Silder/best_selling3.jpg"
import bestSellingFour from "../../../../Assets/Images/Slick Silder/best_selling6.jpg"
import bestSellingFive from "../../../../Assets/Images/Slick Silder/best_selling5.jpg"
import ReactStars from "react-rating-stars-component";


export default function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjust the number of slides shown as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025, // Breakpoint for screens larger than 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769, // Breakpoint for screens larger than 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Breakpoint for screens larger than 576px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className='bg-carsouel'>
      <div className="container ">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={heroOne} className="d-block w-100" alt="Image Not Found" />
            </div>
            <div className="carousel-item">
              <img src={heroTwo} className="d-block w-100" alt="Image Not Found" />
            </div>
            <div className="carousel-item">
              <img src={heroThree} className="d-block w-100" alt="Image Not Found" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container best-selling">
        <div className="row">
          <h2 className='text-center mt-5'>Best Selling Books Ever</h2>
          <div>
            <Slider {...settings}>
              <div>
                <div className="card me-3" >
                  <img src={bestSellingOne} className="card-img-top" alt="bestSellingOne" />
                  <div className="card-body">
                    <h5 className="card-title">Moon Dance</h5>
                    <p className="card-text mb-0">J. R Rain</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <div>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <p>(<span className='text-info'>120</span> Review)</p>
                      </div>
                      <div>
                        <h5 className='text-danger'>$50</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3" >
                  <img src={bestSellingTwo} className="card-img-top" alt="bestSellingOne" />
                  <div className="card-body">
                    <h5 className="card-title">Moon Dance</h5>
                    <p className="card-text mb-0">J. R Rain</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <div>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <p>(<span className='text-info'>120</span> Review)</p>
                      </div>
                      <div>
                        <h5 className='text-danger'>$50</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3 " >
                  <img src={bestSellingThree} className="card-img-top" alt="bestSellingOne" />
                  <div className="card-body">
                    <h5 className="card-title">Moon Dance</h5>
                    <p className="card-text mb-0">J. R Rain</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <div>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <p>(<span className='text-info'>120</span> Review)</p>
                      </div>
                      <div>
                        <h5 className='text-danger'>$50</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3 " >
                  <img src={bestSellingFour} className="card-img-top" alt="bestSellingOne" />
                  <div className="card-body">
                    <h5 className="card-title">Moon Dance</h5>
                    <p className="card-text mb-0">J. R Rain</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <div>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <p>(<span className='text-info'>120</span> Review)</p>
                      </div>
                      <div>
                        <h5 className='text-danger'>$50</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3 " >
                  <img src={bestSellingFive} className="card-img-top" alt="bestSellingOne" />
                  <div className="card-body">
                    <h5 className="card-title">Moon Dance</h5>
                    <p className="card-text mb-0">J. R Rain</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <div>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <p>(<span className='text-info'>120</span> Review)</p>
                      </div>
                      <div>
                        <h5 className='text-danger'>$50</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3 " >
                  <img src={bestSellingOne} className="card-img-top" alt="bestSellingOne" />
                  <div className="card-body">
                    <h5 className="card-title">Moon Dance</h5>
                    <p className="card-text mb-0">J. R Rain</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <div>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <p>(<span className='text-info'>120</span> Review)</p>
                      </div>
                      <div>
                        <h5 className='text-danger'>$50</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card me-3 " >
                  <img src={bestSellingThree} className="card-img-top" alt="bestSellingOne" />
                  <div className="card-body">
                    <h5 className="card-title">Moon Dance</h5>
                    <p className="card-text mb-0">J. R Rain</p>
                    <div className='d-flex justify-content-between align-items-end'>
                      <div>
                        <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                        <p>(<span className='text-info'>120</span> Review)</p>
                      </div>
                      <div>
                        <h5 className='text-danger'>$50</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
