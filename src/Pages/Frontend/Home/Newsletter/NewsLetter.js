import React from 'react'
import { useState } from 'react';
import { firestore } from '../../../../Firebase/Config';
import { doc, setDoc } from 'firebase/firestore';

const initState = { email: '' };

export default function NewsLetter() {
  const [state, setState] = useState(initState);

  const handleChange = (event) => {
    setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSubscribe = async () => {

    const { email } = state;
    const userEmail = { email, id: Math.random().toString(36).slice(2) }

    try {
      await setDoc(doc(firestore, "newsletter", userEmail.id), userEmail);
      console.log("Email Successfully Added");
      setState(initState);

    }
    catch (error) {
      console.error("Code Error", error)
    }

  }

  return (
    <div>
      <div className="row">
        <div className='section-bg'>
          <div className='text-center '>
            <h3>Join Newsletter</h3>
            <p>Lorem started its journey with cast iron (CI) products in 1980. The initial main <br /> objective was to ensure pure water and affordable irrigation.</p>
          </div>
          <div className='d-flex justify-content-center align-items-center flex-wrap'>
            <div className='me-3'>
              <input type="email" name='email' onChange={handleChange} value={state.email} className="form-control rounded-pill" placeholder="Enter your email" />
            </div>
            <div>
              <button className='btn btn-subscribe rounded-pill' onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
