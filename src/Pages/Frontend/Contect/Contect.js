import React from 'react';
import "../../../Scss/Contect/_contect.scss";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";


export default function Contect() {
    const mapStyles = {
        height: '400px',
        width: '100%',
    }
    const defaultCenter = {
        lat: 37.7749, // Default latitude
        lng: -122.4194, // Default longitude
    };

    return (
        <>
            <div className="container contect">
                <div className="row">
                    <div className='contect-img d-flex justify-content-center align-items-center'>
                        <p className='img-text'>Contect</p>
                    </div>
                    <div className='p-0 mt-5 pt-5 mb-5'>
                        <LoadScript googleMapsApiKey="YOUR_API_KEY" >
                            <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
                                <Marker position={defaultCenter} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className="row mb-5 pb-5">
                        <div className="col-md-8">
                            <div className="mb-3 text-area">
                                <label for="exampleFormControlTextarea1" className="form-label">Get in Touch</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" placeholder='Enter Message' style={{ resize: "none" }}></textarea>
                            </div>
                            <div className='d-flex mt-5'>
                                <div className="mb-3 col-md-6">
                                    <input type="name" className="form-control inp-flied" id="exampleFormControlInput1" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3 col-md-6">
                                    <input type="email" className="form-control inp-flied ms-3" id="exampleFormControlInput2" placeholder="Enter email address" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="name" className="form-control inp-subject" id="exampleFormControlInput1" placeholder="Enter subject " />
                            </div>
                            <div className='mt-5'>
                                <button type="button" class="btn btn-send">Send</button>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5 ">
                            <div className='d-flex ms-5'>
                                <div className='me-3'>
                                    <FontAwesomeIcon icon={faHouse} style={{ fontSize: "30px" }} />
                                </div>
                                <div className='text-address'>
                                    <h3 >Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className='d-flex ms-5'>
                                <div className='me-3'>
                                    <FontAwesomeIcon icon={faInbox} style={{ fontSize: "30px" }} />
                                </div>
                                <div className='text-address'>
                                    <h3 className='fst-italic' >+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className='d-flex ms-5'>
                                <div className='me-3'>
                                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "30px" }} />
                                </div>
                                <div className='text-address'>
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
