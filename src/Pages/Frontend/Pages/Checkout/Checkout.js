import React, { useState } from 'react';
import checkout from '../../../../Assets/Images/about-hero.jpg';
import '../../../../Scss/Pages/_checkout.scss'

export default function Checkout() {

  return (
    <>
      <div className="container Check-out-page">
        <div className="row">
          <div className='position-relative mb-5'>
            <img src={checkout} className='img-fluid' alt="Checkout hero image not found" />
            <div className='position-absolute check-out'>
              <p className='mb-0'>Check Out</p>
            </div>
          </div>
          <div className='mt-5 mb-4'>
            <div style={{ backgroundColor: "#f4f4f4" }} className='ps-4 pt-2 pb-2'>
              <p className='mb-0'>Returning Customer?<a href="" style={{ color: "#FF1616" }}>Click here to login</a></p>
            </div>
          </div>
          <div className='text-note row'>
            <p className='ps-4'>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
            <div className="col-md-3 mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Username or Email" />
            </div>
            <div className="col-md-3 mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
            </div>
            <div className="d-flex align-items-center pt-3">
              <div className="">
                <button className='btn btn-danger rounded-pill' style={{ padding: "9px 32px" }}>log in</button>
              </div>
              <div className="form-check ms-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Create an account?
                </label>
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div style={{ backgroundColor: "#f4f4f4" }} className='ps-4 pt-2 pb-2'>
              <p className='mb-0'> Have a coupon?<a href="" style={{ color: "#FF1616" }}>Click here to enter your code</a></p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-7 ms-3">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter coupon code" />
            </div>
            <div className='mt-3 mb-5'>
              <button className='btn-button'>Apply Coupon</button>
            </div>
          </div>
          <div className="row Billing">
            <div className="col-md-8">
              <h4>Billing Details</h4>
              <div className="d-flex">
                <div className="mb-3 w-50 mt-4 me-4">
                  <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='First Name *' />
                </div>
                <div className="mb-3 w-50 mt-4 ">
                  <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Last Name *' />
                </div>
              </div>
              <div className="mb-3 mt-2">
                <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Company Name' />
              </div>
              <div className="d-flex mt-4">
                <div className="mb-3 w-50  me-4">
                  <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Phone Number *' />
                </div>
                <div className="mb-3 w-50  ">
                  <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Email Adress *' />
                </div>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle rounded-pill w-100 btn-country" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </button>
                <ul class="dropdown-menu w-100">
                  <li><a class="dropdown-item" href="#">Country</a></li>
                  <li><a class="dropdown-item" href="#">Country</a></li>
                  <li><a class="dropdown-item" href="#">Country</a></li>
                </ul>
              </div>
              <div className="mb-3 mt-5">
                <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Address line 01 *' />
              </div>
              <div className="mb-3 mt-2">
                <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Address line 02 *' />
              </div>
              <div className="mb-3 mt-2">
                <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Town / City *' />
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle rounded-pill w-100 btn-country" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  District
                </button>
                <ul class="dropdown-menu w-100">
                  <li><a class="dropdown-item" href="#">District</a></li>
                  <li><a class="dropdown-item" href="#">District</a></li>
                  <li><a class="dropdown-item" href="#">District</a></li>
                </ul>
              </div>
              <div className="mb-3 mt-5">
                <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder='Postcode/ZIP' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
