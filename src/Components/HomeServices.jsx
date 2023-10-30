import React from "react";
import computer from "../assets/computer.png";
import code from "../assets/code.png";
import gallery from "../assets/gallery.png";
import choice from "../assets/choice.png";
import grow from "../assets/why-huble.avif";
import ServicesSection from "./ServicesSection";
import OurClient from "./OurClient";
import shape1 from "../assets/shape_1-1.png";
import WorkProcess from "./WorkProcess";
import web_d from "../assets/web-d.png";
import app_d from "../assets/app-d.png";
import ux_design from "../assets/ux-design.png";
import marketing from "../assets/marketing.png";

function HomeServices() {
  return (
    <div>
      <div className="container-fluid section-2-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="service-single-item">
                <div className="service-image-wrapper">
                  <img src={web_d} alt="" />
                </div>
                <div className="service-name">
                  <a href="/web-development">Web Development</a>
                  <p>
                    Customized web development solutions tailored to your
                    business needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-single-item">
                <div className="service-image-wrapper">
                  <img src={app_d} alt="" />
                </div>
                <div className="service-name">
                  <a href="/app-development">App Development</a>
                  <p>
                    Expert app development services for seamless digital
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-single-item">
                <div className="service-image-wrapper">
                  <img src={ux_design} alt="" />
                </div>
                <div className="service-name">
                  <a href="/ui-ux-design">UI/UX Design</a>
                  <p>
                    Transform your digital presence with compelling UI/UX design
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-single-item">
                <div className="service-image-wrapper">
                  <img src={marketing} alt="" />
                </div>
                <div className="service-name">
                  <a href="/digital-marketing">Digital Marketing</a>
                  <p>
                    Strategic digital marketing solutions to boost your online
                    presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <ServicesSection />
        <WorkProcess />
        <OurClient />
      </div>
    </div>
  );
}

export default HomeServices;
