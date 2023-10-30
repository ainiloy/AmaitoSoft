import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Form, Row, Col, Button } from 'react-bootstrap';


import "./Contact.css";
import OtherPageNav from "../Components/OtherPageNav";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <OtherPageNav />
      <div className="contact-page-wrapper full-bg-color">
        <div className="contact-page-header">
          <div className="contact-header-bg">
            <div className="container">
              <header className="text-center">
                <h1>Get In Touch</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="container-fluid contact-main-section-wrapper">
          <div className="container">
            <div className="contact-main-section">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="contact-info-wrapper">
                    <div className="contact office-cocation">
                      <h2>Office Location</h2>
                      <div className="d-flex">
                        <div>
                          <HiLocationMarker />
                        </div>
                        <p>Arambag, Feni, Chittagong, Bangladesh</p>
                      </div>
                    </div>
                    <div className="contact office-cocation">
                      <h2>Contact Us</h2>
                      <div className="d-flex">
                        <div>
                          <BsTelephoneFill />
                        </div>
                        <p>+880 1319-864529</p>
                      </div>
                      <div className="d-flex">
                        <div>
                          <MdEmail />
                        </div>
                        <p> hello@amaitosoft.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-md-6">
                  <div className="contact-form-wrapper">
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group controlId="first-name">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" required />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="last-name">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" required />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" required />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="number">
                            <Form.Label>Number:</Form.Label>
                            <Form.Control type="text" required />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group controlId="address">
                            <Form.Label>Address:</Form.Label>
                            <Form.Control
                              type="text"
                              style={{ width: "100%" }}
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group controlId="message">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control
                              as="textarea"
                              style={{ width: "100%" }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button
                            variant="primary"
                            type="submit"
                            className="mx-auto d-block"
                          >
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Contact;