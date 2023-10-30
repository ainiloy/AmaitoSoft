import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Modal from "../SmallComponent/Modal";
import OtherPageNav from "../Components/OtherPageNav";
import Footer from "../Components/Footer";
import ui from "../assets/ui.svg";
import Portfolio from "../Components/Portfolio";

function UiDesign() {
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
                  <h2>Best UI UX Design Services Company in Bangladesh</h2>
                  <p>
                  If you want to give your website visitors the ultimate browsing experience, you must have an aesthetically pleasing and user-friendly UI UX design.

Researchers show that a staggering 70% of online businesses can’t make it only because they’re not user-friendly.
                  </p>
                  <p>Now, the question is, who’s the Best Ui Ux Design Services Company In Bangladesh? And who would be able to maintain international standards in their design?</p>
                  <p>If that’s something you’re looking for, we at, ZoomIT would be the one you can certainly go for.

With our skilled design crew and vastly experienced management, we can offer you truly world-class UI/UX designs.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="service-page-header-img">
                  <img src={ui} alt="" className="img-fluid" />
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
                          <span className="check" ><BiCheck /></span> Design: As you need
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Software: Phothoshop / Figma
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Website Design
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> App Design
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Themforest Design
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
                        <span className="check" ><BiCheck /></span> Design: As you need
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Software: Phothoshop / Figma
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Website Design
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> App Design
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Themforest Design
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
                        <span className="check" ><BiCheck /></span> Design: As you need
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Software: Phothoshop / Figma
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Website Design
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> App Design
                        </li>
                        <li>
                        <span className="check" ><BiCheck /></span> Themforest Design
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

export default UiDesign;
