import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Modal from "../SmallComponent/Modal";
import OtherPageNav from "../Components/OtherPageNav";
import Footer from "../Components/Footer";
import web_dev from "../assets/web.svg";
import Portfolio from "../Components/Portfolio";

function WebDevelopment() {
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
                  <h2>Best web development company in Bangladesh</h2>
                  <p>
                  An online face for your startup or established institution is now an absolute necessity. A proper and furnished online face can really make the path straight towards the highest excellence for you. And by online face, we mean a website. Publishing the best possible website is a perfect step for reaching out to your probable customers. It is also a step closer to outrun your competitors. To ensure you have the best website, you will surely want to hand over the task to the country's best web developer company.
                  </p>
                  <p>Well, if you are someone in Bangladesh and looking for the best web development company in Bangladesh, well, we got you perfectly covered. The best web design company in Dhaka that is highly capable of supplying you with the best deal within a reasonable amount can be Amaito Soft.</p>
                  <p>Now, you may be wondering why Amaito Soft? Well, worry not. Here we are to help you along the way.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="service-page-header-img">
                  <img src={web_dev} alt="" className="img-fluid" />
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
            <h1 className="text-center">Website Package</h1>
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
                          <span className="check" ><BiCheck /></span>  Free Domain+Hosting (200MB)
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Domain Name
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Email Address
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Total pages: 5
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Design: Basic
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Technology: As you need
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Logo Design
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Development Time: 5 days
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
                          <span className="check" ><BiCheck /></span>  Free Domain+Hosting (200MB)
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Domain Name
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Email Address
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Total pages: 10
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Design: Standard
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Technology: As you need
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Logo Design
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Development Time: 10 days
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
                          <span className="check" ><BiCheck /></span>  Free Domain+Hosting (200MB)
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Domain Name
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Email Address
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Total pages: 15
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Design: Advance
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Technology: As you need
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Logo Design
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Development Time: 15 days
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

export default WebDevelopment;
