import React, { useState } from "react";
import Toggle from "../SmallComponent/Toggle";
import serviceIMG from "../assets/services-giffy.gif";

function ServicesSection() {
  return (
    <div className="container-fluid section-one-wrapper home-page-service-section">
      <div className="section-one-bg-design">
        <div className="bg-design circul s-1-1"></div>
        <div className="bg-design strait s-1-2"></div>
      </div>
      <div className="container">
        <div className="services-section-wrapper">
          <h1>Our Services</h1>
          <div className="hr-icon"></div>
          <p>The Service We Offer For You</p>
        </div>
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="service-section-img">
              <img src={serviceIMG} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-one-main-part">
              <Toggle
                department="WEB DEVELOPMENT"
                serviceDetails="Our web development service combines cutting-edge technology and innovative design to create custom websites tailored to your specific business needs. From responsive layouts to intuitive user interfaces, we deliver seamless online experiences that captivate your audience and drive your digital success."
              />
              <Toggle
                department="UI/UX DESIGN"
                serviceDetails="Our UI/UX service focuses on creating exceptional user experiences through intuitive interfaces and seamless interactions. We combine aesthetics and functionality to design user-centered interfaces that enhance engagement, increase conversions, and leave a lasting impression on your audience. Elevate your software company's digital presence with our expert UI/UX solutions."
              />
              <Toggle
                department="APP DEVELOPMENT"
                serviceDetails="
                With a passion for innovation, our skilled app development team brings your ideas to life. From concept to deployment, we create robust, user-friendly mobile apps that maximize functionality, optimize performance, and enhance user satisfaction, helping your business thrive in the mobile-driven world."
              />
              <Toggle
                department="DIGITAL MARKETING"
                serviceDetails="At Amaito Soft, we are passionate about creating digital marketing strategies that deliver real impact. Our team of digital marketers combines creativity, analytical insights, and industry expertise to develop customized campaigns that enhance brand awareness, drive conversions, and build lasting customer relationships."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
