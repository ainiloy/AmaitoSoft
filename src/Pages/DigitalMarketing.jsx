import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Modal from "../SmallComponent/Modal";
import OtherPageNav from "../Components/OtherPageNav";
import Footer from "../Components/Footer";
import digital from "../assets/marketing.svg";
import Portfolio from "../Components/Portfolio";

function DigitalMarketing() {
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
                  <h2>Best Digital Marketing Company In Bangladesh</h2>
                  <p>
                  At Amaito Soft, we are passionate about creating digital marketing strategies that deliver real impact. Our team of digital marketers combines creativity, analytical insights, and industry expertise to develop customized campaigns that enhance brand awareness, drive conversions, and build lasting customer relationships.
                  </p>
                  <p>In the fast-paced digital landscape, our data-driven digital marketing solutions empower businesses to reach their target audience effectively. With our expertise in SEO, PPC, social media marketing, and conversion optimization, we craft compelling campaigns that drive traffic, generate leads, and fuel business growth.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="service-page-header-img">
                  <img src={digital} alt="" className="img-fluid" />
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
                      <Card.Title>Monthly Package</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                        <li>
                          <span className="check" ><BiCheck /></span> Search Engine Optimization
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Social Media Marketing
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span> Conversion Rate Optimization
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span> Web Analytics
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Influencer Marketing
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span> Email Marketing
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span>Pay-Per-Click Advertising
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Google Ads
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Facebook Ads
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
                      <Card.Title>Yearly Package</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                      <li>
                          <span className="check" ><BiCheck /></span> Search Engine Optimization
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Social Media Marketing
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Conversion Rate Optimization
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span> Web Analytics
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Influencer Marketing
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Email Marketing
                        </li>
                        <li>
                          <span className="cross" ><BiCheck /></span>Pay-Per-Click Advertising
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Google Ads
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Facebook Ads
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
                      <Card.Title>Lifetime Package</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <ul>
                      <li>
                          <span className="check" ><BiCheck /></span> Search Engine Optimization
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Social Media Marketing
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Conversion Rate Optimization
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Web Analytics
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Influencer Marketing
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span> Email Marketing
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Pay-Per-Click Advertising
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Google Ads
                        </li>
                        <li>
                          <span className="check" ><BiCheck /></span>Facebook Ads
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

export default DigitalMarketing;
