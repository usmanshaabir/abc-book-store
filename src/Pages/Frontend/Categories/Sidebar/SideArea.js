import React, { useRef, useState } from 'react';
import '../../../../Scss/Category/_categories.scss'

export default function SideArea() {
    const [dropdown, setDropdown] = useState("Filter by Rating");
    const [activeItem, setActiveItem] = useState(false);

    const handleActive = () => {
        setActiveItem(!activeItem)
    }

    const handleDropdownItemClick = (e) => {
        e.preventDefault();
        setDropdown(e.target.textContent)
    };
    return (
        <div className='side-bar'>
            <h5 className='pb-3'>Filter by Genres</h5>
            <div>
                <div className="form-check">
                    <input className={`form-check-input active ${activeItem ? 'active' : ''}`} onClick={handleActive} type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                        History
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                        Horror - Thriller
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                        Love Stories
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                        Science Fiction
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                        Biography
                    </label>
                </div>
            </div>
            <div>
                <h5 className='pb-3 pt-5'>Filter by Rating</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle custom-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        {dropdown}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>Filter by Rating</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>5 Star Rating</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>4 Star Rating</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>3 Star Rating</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>2 Star Rating</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>1 Star Rating</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <h5 className='pb-3 pt-5'>Filter by Publisher</h5>
                <div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Green Publications
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Anondo Publications
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Rinku Publications
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Sheba Publications
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Red Publications
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <h5 className='pb-3 pt-5'>Rinku Publications</h5>
                <div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Buster Hyman
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Phil Harmonic
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Cam L. Toe
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Otto Matic
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label mt-1 ms-2 " htmlFor="flexCheckDefault">
                            Juan Annatoo
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
