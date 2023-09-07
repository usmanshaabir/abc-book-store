import React from 'react';
import "../../../../../Scss/Home/Tabs/_tabs.scss"

export default function Tabs() {
  return (
    <>
      <div className='tabs-pill'>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active rounded-pill" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-pill" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Horror</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-pill" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Thriller</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-pill" id="science-fiction-tab" data-bs-toggle="pill" data-bs-target="#science-fiction" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Science Fiction</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link rounded-pill" id="history-tab" data-bs-toggle="pill" data-bs-target="#history" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">History</button>
          </li>
        </ul>
      </div>
    </>
  )
}
