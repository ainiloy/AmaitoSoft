import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import shape4 from "../assets/shape4.png";
import shape5 from "../assets/shape5.png";
import web_d_img from "../assets/computer.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import rotate_img from "../assets/rotate.svg";
import CustomRenderer from "./CodeSyntext";
import react_logo from "../assets/react_logo.png";

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="header-wrapper container-fluid"  >
      <div className="" >
      <div className="header-bg-1">
        <div className="shape-1"></div>
        <div className="shape-2">
          <img src={rotate_img} alt="" className="rotate-img" />
        </div>
        <div className="header-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-lg-2 col-sm-3 col-xs-12">
                <div>
                  <a href="/">
                    <img src={logo} alt="Amaito Soft" className="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9 col-md-9 offset-xl-1">
                <div className="menu-button">
                  <div className="res-menu-div" onClick={handleClick}>
                    <span>MENU</span>
                    <div>
                      <div className="nav-icon"></div>
                      <div className="nav-icon"></div>
                      <div className="nav-icon"></div>
                    </div>
                  </div>
                </div>
                <div className="nav-info-bg">
                  <div className="nav-info-wrapper d-flex">
                    <div className="single-nav-info d-flex">
                      <span>
                        <MdLocationOn />
                      </span>
                      <p>Arambag, Feni, Chittagong, Bangladesh</p>
                    </div>
                    <div className="single-nav-info d-flex">
                      <span>
                        <FaPhoneAlt />
                      </span>
                      <p>+880 1319-864529</p>
                    </div>
                  </div>
                </div>

                <div className={isClicked ? "res-nev" : "nav-wrapper"}>
                  <div className="nav-link-wrapper d-flex">
                    <div className="nav-link">
                      <a href="/" className="active">
                        Home
                      </a>
                    </div>
                    <div className="nav-link">
                      <a href="/about">About Us</a>
                    </div>
                    <div className="nav-link">
                      <a href="#" className="dropdown-service">
                        <span>Services</span>
                        <ul className="nav-drowdown-wrapper">
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
                    <div className="nav-link">
                      <a href="/portfolio">Portfolio</a>
                    </div>
                    <div className="nav-link">
                      <a href="/contact">Contact</a>
                    </div>
                    <div className="nav-link">
                      <a href="/learn">Learn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-main-part">
            <div className="container">
              <div className="header-under-wrapper text-center">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="header-left-part-wrapper">
                      <h1>Amaito Soft</h1>
                      <p>
                        Empowering businesses with cutting-edge software
                        solutions for enhanced productivity, efficiency, and
                        growth in the digital era.
                      </p>
                      <p>
                        Unleashing the power of technology to drive digital
                        transformation and deliver exceptional user experiences
                        through our custom software solutions.
                      </p>

                      <div class="wrapper">
                        <div class="link_wrapper">
                          <a href="/about">Know More!</a>
                          <div class="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 268.832 268.832"
                            >
                              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="header-right-part">
                      <div className="header-right-shape-1"></div>
                      <div className="d-flex amaito-jsx">
                        {" "}
                        <img src={react_logo} alt="" />
                        <span>Amaito.jsx</span>
                      </div>
                      <CustomRenderer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-services-wrapper">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 text-center"
              style={{ backgroundColor: "#70AA4D" }}
            >
              <div className="single-header-services text-center">
                <h5>
                  <a href="/app-development" style={{ color: "#fff" }}>
                    App development
                  </a>
                </h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 text-center"
              style={{ backgroundColor: "#1990B8", color:'#fff' }}
            >
              <div className="single-header-services text-center">
                <h5>
                  <a href="/web-development" style={{ color: "#fff" }}>
                    Web development
                  </a>
                </h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 text-center"
              style={{ backgroundColor: "#C8282D" }}
            >
              <div className="single-header-services">
                <h5>
                  <a href="/ui-ux-design" style={{ color: "#fff" }}>
                    UI/UX DESIGN
                  </a>
                </h5>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 text-center"
              style={{ backgroundColor: "#FFB84D" }}
            >
              <div className="single-header-services">
                <h5>
                  <a href="/degital-marketing" style={{ color: "#0E1323" }}>
                    Digital Marketing
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navigation;
