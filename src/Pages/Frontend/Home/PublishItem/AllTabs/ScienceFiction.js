import React from 'react';
import AllTabOne from "../../../../../Assets/Images/Tab(All)/best_selling2.jpg";
import AllTabTwo from "../../../../../Assets/Images/Tab(All)/best_selling4.jpg";
import AllTabThree from "../../../../../Assets/Images/Tab(All)/best_selling6.jpg";
import AllTabFour from "../../../../../Assets/Images/Tab(All)/best_selling8.jpg";
import AllTabFive from "../../../../../Assets/Images/Tab(All)/best_selling9.jpg";
import AllTabSix from "../../../../../Assets/Images/Tab(All)/best_selling6.jpg";
import ReactStars from "react-rating-stars-component";

export default function ScienceFiction() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <div className="card me-3" style={{ width: "13rem" }}>
            <img src={AllTabFive} className="card-img-top " style={{ height: "16rem" }} alt="bestSellingOne" />
            <div className="card-body">
              <h5 className="card-title">Moon Dance</h5>
              <p className="card-text mb-0">J. R Rain</p>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" color="#FF5700" />
                  <p className='mb-0'>(<span>120</span> Review)</p>
                </div>
                <div>
                  <h5 className='text-danger'>$50</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card me-3" style={{ width: "13rem" }}>
            <img src={AllTabSix} className="card-img-top " style={{ height: "16rem" }} alt="bestSellingOne" />
            <div className="card-body">
              <h5 className="card-title">Moon Dance</h5>
              <p className="card-text mb-0">J. R Rain</p>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" color="#FF5700" />
                  <p className='mb-0'>(<span>120</span> Review)</p>
                </div>
                <div>
                  <h5 className='text-danger'>$50</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card me-3" style={{ width: "13rem" }}>
            <img src={AllTabThree} className="card-img-top " style={{ height: "16rem" }} alt="bestSellingOne" />
            <div className="card-body">
              <h5 className="card-title">Moon Dance</h5>
              <p className="card-text mb-0">J. R Rain</p>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" color="#FF5700" />
                  <p className='mb-0'>(<span>120</span> Review)</p>
                </div>
                <div>
                  <h5 className='text-danger'>$50</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card me-3" style={{ width: "13rem" }}>
            <img src={AllTabFour} className="card-img-top " style={{ height: "16rem" }} alt="bestSellingOne" />
            <div className="card-body">
              <h5 className="card-title">Moon Dance</h5>
              <p className="card-text mb-0">J. R Rain</p>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" color="#FF5700" />
                  <p className='mb-0'>(<span>120</span> Review)</p>
                </div>
                <div>
                  <h5 className='text-danger'>$50</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card me-3" style={{ width: "13rem" }}>
            <img src={AllTabTwo} className="card-img-top " style={{ height: "16rem" }} alt="bestSellingOne" />
            <div className="card-body">
              <h5 className="card-title">Moon Dance</h5>
              <p className="card-text mb-0">J. R Rain</p>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" color="#FF5700" />
                  <p className='mb-0'>(<span>120</span> Review)</p>
                </div>
                <div>
                  <h5 className='text-danger'>$50</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card me-3" style={{ width: "13rem" }}>
            <img src={AllTabOne} className="card-img-top " style={{ height: "16rem" }} alt="bestSellingOne" />
            <div className="card-body">
              <h5 className="card-title">Moon Dance</h5>
              <p className="card-text mb-0">J. R Rain</p>
              <div className='d-flex justify-content-between align-items-end'>
                <div>
                  <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" color="#FF5700" />
                  <p className='mb-0'>(<span>120</span> Review)</p>
                </div>
                <div>
                  <h5 className='text-danger'>$50</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
