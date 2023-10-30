import React from "react";
import OtherPageNav from "../Components/OtherPageNav";
import "./Learn.css";
import Footer from "../Components/Footer";
import seminer_img from '../assets/seminer-img.png'
import LearnPageCounter from "../Components/LearnPageCounter";

function Learn() {
  return (
    <div className="learn-page" >
      <OtherPageNav />
      <div className="learn-page-wrapper">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
                <div className="learn-title">
                  <h1>Web Design and Development</h1>
                  <p>
                  In Digital Creativity and Success Training, <br /> We are with you
                  </p>
                  <p>
                    <span>Learn Code</span> <span>Do The Code</span>{" "}
                    <span>Build Career</span>
                  </p>
                </div>
              
            </div>
            <div className="seminer-wrapper">
              <div className="seminer-title">
                <h1 className="text-center" >Web Design and Development Seminar</h1>
              </div>
              <div className="row">
                <div className="col-md-7">
                <div className="seminer-details">
                  <h2>In a team to build the digital world</h2>
                  <p>
                  Our company "Amaito Soft" is an innovative technology
                     Company, which is towards advanced web design and development
                     face to face We are proudly organizing a seminar,
                     That's all about web design and development
                     Will try to expand knowledge and skills.
                  </p>
                  <p>Seminar Date & Time: 20 August 2023, 8:00 PM</p>
                  <p>Register to attend the seminar: <br /> <a className="registrasino-link" target="blank" href="https://www.jotform.com/assign/232242290984054/232242324411037">Registration link</a></p>
                  <p>Welcome to the seminar and we look forward to being with you.</p>
                  <p>Your esteemed "Amaito Soft"</p>

                  
                </div>
                </div>
                <div className="col-md-5">
                <div className="seminer-img-wrapper">
                    <div className="seminer-img">
                    <img className="img-fluid" src={seminer_img} alt="" />
                    </div>
                    <div className="seminer-time">
                        <p>Time: 20 August 2023, 8:00 PM</p>
                        <p>Speaker: Iftihar Mahmood [CEO Amaito Soft]</p>
                        <p>Speaker: Abhishek Das [COO Amaito Soft]</p>
                    </div>
                    <div className="registrasion-link-wrapper" >
                        <a target="blank" href="https://www.jotform.com/assign/232242290984054/232242324411037">Register Here</a>
                    </div>
                </div>
              </div>
              </div>
              <LearnPageCounter/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Learn;
