import React, { useState } from 'react';
import "../../Scss/Auth/_login.scss";
import { auth } from '../../Firebase/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initState = { email: '', password: '' }

export default function SignUp() {

  const [state, setState] = useState(initState);


  const handleChange = (event) => {
    setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSignup = () => {

    const { email, password } = state;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Signed up", user);
        toast("Your Account Successfully Done");
      })
      .catch((error) => {
        console.error('Error', error);
        // alert("Already in Use Email and Password");
        toast("Email and Password Already in Use");

      });
  }
  return (
    <>
      <div className="container login">
        <div className="row justify-content-center mt-4">
          <div class="card" style={{ width: "700px" }}>
            <div class="card-body mt-3">
              <h3 class="card-title text-center fw-semibold">Sign Up</h3>
              <p class="card-text text-center">Create your account to get full access</p>
              <div class="mb-3 mt-5">
                <label for="exampleFormControlInput1" class="form-label email-address">Full Name</label>
                <input type="name" class="form-control inp-email" id="exampleFormControlInput1" placeholder="Enter full name" />
              </div>
              <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" class="form-label email-address">Email Address</label>
                <input type="email" name='email' onChange={handleChange} class="form-control inp-email" id="exampleFormControlInput1" placeholder="Enter email address" />
              </div>
              <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" class="form-label email-address">Password</label>
                <input type="password" name='password' onChange={handleChange} class="form-control inp-email" id="exampleFormControlInput1" placeholder="Enter Password" />
              </div>
              <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" class="form-label email-address">Confirm Password</label>
                <input type="email" class="form-control inp-email" id="exampleFormControlInput1" placeholder="Confirm Password" />
              </div>

              <div className='d-flex justify-content-between align-items-end pt-5 mt-5 '>
                <div>
                  <p className='sign-up'>Don’t have an account? <a href="./login">Login</a> here</p>
                </div>
                <div>
                  <button className="btn btn-login" onClick={handleSignup}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <ToastContainer />

    </>
  )
}
