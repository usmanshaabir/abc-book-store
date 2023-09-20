import React, { useState } from 'react';
import "../../../../Scss/Pages/_cart.scss";
import product from '../../../../Assets/Images/Slick Silder/best_selling2.jpg';
import productOne from '../../../../Assets/Images/Slick Silder/best_selling1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 10) {
      const increment = count + 1
      setCount(increment)
    }
  }
  const handleDecrement = () => {
    if (count > 0) {
      const decrement = count - 1
      setCount(decrement)
    }

  }
  return (
    <>
      <div className="container cart">
        <div className="row">
          <div className='contect-img d-flex justify-content-center align-items-center'>
            <p className='img-text'>Cart</p>
          </div>
          <div class="table-responsive mt-5 pt-5">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className='table-row'>
                  <th scope="row">
                    <div className='d-flex align-items-center'>
                      <div>
                        <img className='product-img' src={product} alt="" />
                      </div>
                      <div>
                        <p className='product-text'>Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </th>
                  <td className='fw-bold'>$360.00</td>
                  <td>
                    <div className='product-counter'>
                      <div className='w-25 '>
                        <input type="text" className='form-control w-100 text-center' value={count} name="" id="" />
                      </div>
                      <div>
                        <p className='mb-0 increment fw-bold' onClick={handleIncrement}>+</p>
                        <p className='mb-0 increment fw-bold' onClick={handleDecrement}>-</p>
                      </div>
                    </div>
                  </td>
                  <td className='fw-bold'>$720.00</td>
                </tr>
                <tr className='table-row'>
                  <th scope="row">
                    <div className='d-flex align-items-center'>
                      <div>
                        <img className='product-img' src={productOne} alt="" />
                      </div>
                      <div>
                        <p className='product-text'>Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </th>
                  <td className='fw-bold'>$360.00</td>
                  <td>
                    <div className='product-counter'>
                      <div className='w-25 '>
                        <input type="text" className='form-control w-100 text-center' value={count} name="" id="" />
                      </div>
                      <div>
                        <p className='mb-0 increment fw-bold' onClick={handleIncrement}>+</p>
                        <p className='mb-0 increment fw-bold' onClick={handleDecrement}>-</p>
                      </div>
                    </div>
                  </td>
                  <td className='fw-bold'>$720.00</td>
                </tr>
                <tr className='table-row'>
                  <td className='pt-4 pb-4'><button className='btn btn-update-cart fw-medium'>Update Cart</button></td>
                  <td className='pt-4 pb-4'><button className='btn btn-update-cart fw-medium'>Close Coupon</button></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className='table-row'>
                  <td></td>
                  <td></td>
                  <td className='pt-4 pb-4 fw-medium'>Subtotal</td>
                  <td className='pt-4 pb-4 fw-medium'>$2160.00</td>
                </tr>
                <tr className='table-row'>
                  <td></td>
                  <td></td>
                  <td className='pt-4 pb-4 fw-medium'>Shipping</td>
                  <td className='pt-4 pb-4 '>
                    <div class="form-check form-check-reverse">
                      <label class="form-check-label" for="flexRadioDefault1">Flat Rate: $5.00 </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </div>
                    <div class="form-check form-check-reverse">
                      <label class="form-check-label" for="flexRadioDefault2">Free Shipping </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    </div>
                    <div class="form-check form-check-reverse">
                      <label class="form-check-label" for="flexRadioDefault2">Flat Rate: $10.00 </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    </div>
                    <div class="form-check form-check-reverse">
                      <label class="form-check-label" for="flexRadioDefault2">Local Delivery: $2.00 </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    </div>
                    <div class="form-check form-check-reverse">
                      <label class="form-check-label" for="flexRadioDefault2">Local Delivery: $2.00 </label>
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    </div>
                    <div class="dropdown mt-4 ms-5">
                      <button class="btn btn-secondary dropdown-toggle rounded-pill btn-dropdown ps-5 pe-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Bangladesh <FontAwesomeIcon className='ps-5' icon={faAngleUp} />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Bangladesh</a></li>
                        <li><a class="dropdown-item" href="#">India</a></li>
                        <li><a class="dropdown-item" href="#">Pakistan</a></li>
                      </ul>
                    </div>
                    <div class="dropdown mt-4 ms-5">
                      <button class="btn btn-secondary dropdown-toggle rounded-pill btn-dropdown ps-5 pe-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select a State <FontAwesomeIcon className='ps-5' icon={faAngleUp} />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Select a State</a></li>
                        <li><a class="dropdown-item" href="#">Select a State</a></li>
                        <li><a class="dropdown-item" href="#">Select a State</a></li>
                      </ul>
                    </div>
                    <div class="mb-3 mt-4">
                      <input type="email" class="form-control postcode-inp" id="exampleFormControlInput1" placeholder="Postcode/Zipcode" />
                    </div>
                    <div style={{ textAlign: "end" }}>
                      <button className='btn btn-update-cart fw-medium'>Update Details</button>
                    </div>
                  </td>
                </tr>
                <tr className='table-row'>
                  <td className='pt-4 pb-4'>
                    <div className='d-flex'>
                      <div>
                        <button className='btn btn-update-cart fw-medium'>Continue Shopping</button>
                      </div>
                      <div className='ms-3'>
                        <button className='btn btn-update-cart fw-medium'>Proceed to checkout</button>
                      </div>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}
