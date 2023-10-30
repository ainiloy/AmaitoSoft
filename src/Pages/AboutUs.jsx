import React from "react";
import OtherPageNav from "../Components/OtherPageNav";
import about_img from "../assets/about-img.png";
import OurClient from "../Components/OurClient";
import Footer from "../Components/Footer";

function AboutUs() {
  return (
    <div>
      <OtherPageNav />
      <div className="container-fluid about-us-header-wrapper">
        <div className="about-bg-color">
        <div className="container">
          <div className="about-header-wrapper">
            <h2>About Us</h2>
            <p>
              Amaito Soft is a reputable software company with years of rich
              experience developing web design development and software for
              their customers on demand.
            </p>
          </div>
        </div>
        </div>
      </div>
      <div className="container-fluid about-page-about-section">
        <div className="container">
          <div className="about-details">
            <div className="row">
              <div className="col-md-6">
                <img src={about_img} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h3>
                  Amaito Soft is an IT based web design development and software
                  development service organization.
                </h3>
                <p>
                  Amaito Soft offers three main types of services. The first is web
                  design and development which includes beautiful and elegant
                  web layout design, converting the design to WordPress theme as
                  per the client's needs or converting to PHP, website
                  maintenance, ecommerce solution, CMS solution, adding Facebook
                  messenger, web hosting and eMost hosting.
                </p>

                <p>
                  The second is software development that is developed to suit
                  the needs of clients. We make almost all types of web based
                  software.
                </p>
                <p>
                  The third one is SEO. Web-based marketing is what you want
                  your website or product to convey to more people. There are
                  two types of marketing, paid SEO and organic SEO to rank in
                  the first page of Google.
                </p>
              </div>
            </div>
            <div className="about-page-services-wrapper">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="about-page-single-service">
                    <h5>Our Mission</h5>
                    <p>
                      We aim at 100% client satisfaction. And the client is
                      satisfied only when the web/software of his dreams
                      successfully passes in the competitive market.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="about-page-single-service">
                    <h5>Our Vision</h5>
                    <p>
                      Being a global leading company in web design development
                      and software development, our range of services reach from
                      country to abroad.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="about-page-single-service">
                    <h5>Our Target</h5>
                    <p>
                      "Need quality, not quantity" As quality brings our
                      customer satisfaction, it also helps to stay ahead in the
                      global market. That is why we strive to offer quality work
                      to the customer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-page-our-client">
      <OurClient/>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
