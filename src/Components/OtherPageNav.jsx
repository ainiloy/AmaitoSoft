import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {  FaPhoneAlt } from 'react-icons/fa';
import {  MdLocationOn } from 'react-icons/md';

function OtherPageNav() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='container-fluid other-page-nav-wrapper' >
        <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-3 col-xs-12">
            <div>
              <a href="/"><img src={logo} alt="Amaito Soft" className="logo" /></a>
            </div>
          </div>
          <div className="col-md-9 offset-md-1">
          <div className="menu-button">
              <div className="res-menu-div"  onClick={handleClick}>
                <span>MENU</span>
                <div>
                <div className="nav-icon" ></div>
                <div className="nav-icon" ></div>
                <div className="nav-icon" ></div>
                </div>
              </div>
            </div>
            <div className="nav-info-bg" >
            <div className="nav-info-wrapper d-flex">
              <div className="single-nav-info d-flex" >
                <span><MdLocationOn/></span>
                <p>Arambag, Feni, Chittagong, Bangladesh</p>
              </div>
              <div className="single-nav-info d-flex" >
                <span><FaPhoneAlt/></span>
                <p>+880 1319-864529</p>
              </div>
            </div>
            </div>
            <div className={isClicked?'res-nev':"nav-wrapper"}>
              <div className="nav-link-wrapper d-flex">
                <div className="nav-link" ><a href="/" className="active">Home</a></div>
                <div  className="nav-link"><a href="/about">About Us</a></div>
                <div className="nav-link">
                  <a href="#"  className="dropdown-service" >
                    <span>Services</span>
                    <ul className="nav-drowdown-wrapper" >
                      <li>
                        <a href="/web-development">Web Development</a>
                      </li>
                      <li>
                        <a href="/app-development">App Development</a>
                      </li>
                      <li>
                        <a href="/ui-ux-design">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="/digital-marketing">Digital Marketing</a>
                      </li>
                    </ul>
                  </a>
                  
                  </div>
                <div className="nav-link"><a href="/portfolio">Portfolio</a></div>
                <div className="nav-link"><a href="/contact">Contact</a></div>
                <div className="nav-link"><a href="/learn">Learn</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherPageNav