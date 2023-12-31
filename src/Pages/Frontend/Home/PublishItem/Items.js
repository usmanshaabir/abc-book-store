import React from 'react';
import "../../../../Scss/Home/_publishItem.scss"
import Tabs from './AllTabs/Tabs';
import All from './AllTabs/All';
import Horror from './AllTabs/Horror';
import Thriller from './AllTabs/Thriller';
import ScienceFiction from './AllTabs/ScienceFiction';

import NewsLetter from '../Newsletter/NewsLetter';

export default function Items() {

  return (
    <>
      <div className="container mt-4 publish-items">
        <div className="row">
          <div className='d-flex justify-content-between'>
            <div>
              <h2>Latest Published items</h2>
            </div>
            <div>
              <Tabs />
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
              <All />
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" >
              <Horror />
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" >
              <Thriller />
            </div>
            <div className="tab-pane fade" id="science-fiction" role="tabpanel" aria-labelledby="science-fiction-tab" >
              <ScienceFiction />
            </div>
            <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab" >
              <Thriller />
            </div>
          </div>
          <div className='text-center mt-5 mb-5'>
            <button className='border-btn border-btn2 more-btn2'>Browse More</button>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <div className='img-tag d-flex justify-content-between align-items-center'>
              <div>
                <h2 className='text-light'>The History <br /> of Phipino</h2>
              </div>
              <div>
                <button className='btn btn-details rounded-pill'>View Details</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='img-tag2 d-flex justify-content-between align-items-center'>
              <div>
                <h2 className='text-light'>Wilma Mumduya</h2>
              </div>
              <div>
                <button className='btn btn-details rounded-pill'>View Details</button>
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </>
  )
}

