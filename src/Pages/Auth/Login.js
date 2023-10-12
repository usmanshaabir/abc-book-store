import React from 'react';
import "../../Scss/Auth/_login.scss";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initState = { email: '', password: '' }
export default function Login() {

  const [state, setState] = useState(initState);
  const navigate = useNavigate()


  const handleChange = (event) => {
    setState((preState) => ({ ...preState, [event.target.name]: event.target.value }))
  }

  const handleLogin = () => {

    const { email, password } = state;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem('login', user.email)
        toast("Successfully Login");
        navigate('/')
        window.location.reload()
        console.log("Enter User", user);
      })
      .catch((error) => {
        console.error("Error", error)
        toast("Plz Try Again");

      });
  }
  return (
    <>
      <div className="container login">
        <div className="row justify-content-center mt-5">
          <div class="card" style={{ width: "700px" }}>
            <div class="card-body mt-3">
              <h3 class="card-title text-center fw-semibold">Login</h3>
              <p class="card-text text-center">Enter Login details to get access</p>
              <div class="mb-3 mt-5">
                <label for="exampleFormControlInput1" class="form-label email-address">Username or Email Address</label>
                <input type="email" name='email' onChange={handleChange} class="form-control inp-email" id="exampleFormControlInput1" placeholder="Username / Email address" />
              </div>
              <div class="mb-3 mt-4">
                <label for="exampleFormControlInput1" class="form-label email-address">Password</label>
                <input type="password" name='password' onChange={handleChange} class="form-control inp-email" id="exampleFormControlInput1" placeholder="Enter Password" />
              </div>
              <div className='d-flex justify-content-between pt-3'>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label class="form-check-label" for="flexCheckChecked">
                    Keep Me Logged In
                  </label>
                </div>
                <div className='forget-pas'>
                  <a href="">Forgot Password?</a>
                </div>
              </div>
              <div className='d-flex justify-content-between align-items-end pt-5 mt-5 pb-5'>
                <div>
                  <p className='sign-up'>Don’t have an account? <a href="./signup">Sign Up</a> here</p>
                </div>
                <div>
                  <button className="btn btn-login" onClick={handleLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}
