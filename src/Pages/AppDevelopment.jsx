import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import Modal from "../SmallComponent/Modal";
import OtherPageNav from "../Components/OtherPageNav";
import Footer from "../Components/Footer";
import app_dev from "../assets/app.svg";
import Portfolio from "../Components/Portfolio";

function AppDevelopment() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      fullName,
      organization,
      email,
      mobile,
      organizationAddress,
    };
    setReviewsList([...reviewsList, newReview]);
    setFullName("");
    setOrganization("");
    setEmail("");
    setMobile("");
    setOrganizationAddress("");
    setShowModal(false);
  };

  const handleWriteReviewClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="full-bg-color">
      <OtherPageNav />
      <div className="service-page-header container-fluid">
        <div className="about-bg-color">
        <div className="container">
          <div className="about-header-wrapper">
            <div className="row">
              <div className="col-md-7">
                <div className="service-page-header-details">
                  <h2>Best App Development Company In Bangladesh</h2>
                  <p>
                  Want quality mobile application development services within your budget?

Well, you must find out the best app developer in Bangladesh that can deliver applications with stunning UI, incredibly fast loading time, and reliable support.
                  </p>
                  <p>Being a remarkable mobile app development company in Bangladesh, we possess both the workforce and the infrastructure to build winning mobile applications.</p>
                  <p>As you’ve already witnessed our software development capabilities, it’s time for deciding on the plans that suit you better. Apart from the set plans, you can also go for fully customized plans personalized absolutely how you want them.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="service-page-header-img">
                  <img src={app_dev} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="container-fluid school-management-wrapper">
        <div className="container">
          <div className="section-title">
            <h1 className="text-center">Plans and Pricing</h1>
          </div>
          <div className="packeg-wrapper">
            <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="single-packge-wrapper">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ borderBottom: "1px solid #f8fafc14" }}
                    >
                      <Card.Title>Basic</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                      <li>
                          <span className="check" ><BiCheck /></span>OS Support: 1
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span>Include Source Code: no
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Include Server & installation Cost
                        </li>
                        <li>
                          <AiFillStar style={{color:'#000'}} /> Include Server & installation
                          Cost
                        </li>
                      </ul>

                      <Modal />
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-packge-wrapper">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ borderBottom: "1px solid #f8fafc14" }}
                    >
                      <Card.Title>Standard</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                      <li>
                          <span className="check" ><BiCheck /></span>OS Support: 1
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span>Include Source Code: no
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Include Server & installation Cost
                        </li>
                        <li>
                          <AiFillStar style={{color:'#000'}} /> Include Server & installation
                          Cost
                        </li>
                      </ul>

                      <Modal />
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-packge-wrapper">
                  <Card>
                    <Card.Header
                      className="text-center"
                      style={{ borderBottom: "1px solid #f8fafc14" }}
                    >
                      <Card.Title>Advanced</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                      <li>
                          <span className="check" ><BiCheck /></span>OS Support: 1
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Include Source Code: no
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Include Server & installation Cost
                        </li>
                        <li>
                          <AiFillStar style={{color:'#000'}} /> Include Server & installation
                          Cost
                        </li>
                      </ul>

                      <Modal />
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio/>
      <Footer />
    </div>
  );
}

export default AppDevelopment;
