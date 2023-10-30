import React from "react";
import location from "../assets/pin.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="container-fluid footer-wrapper">
      <div className="footer-bg-color">
        <div className="container">
        <div className="row footer-contact">
          <div className="col-xl-4 col-md-6 md-d-none">
            <div className="footer-contact-single-item">
              <div className="d-flex">
                <div className="footer-contact-icon" >
                  <img src={location} alt="" />
                </div>
                <div>
                  <p>Arambag, Feni,</p>
                  <p>Chittagong, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-6">
            <div className="footer-contact-single-item">
              <div className="d-flex">
                <div className="footer-contact-icon" >
                  <img src={mail} alt="" />
                </div>
                <div>
                  <p>hello@amaitosoft.com</p>
                  <p>official@amaitosoft.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-6">
            <div className="footer-contact-single-item">
              <div className="d-flex">
                <div className="footer-contact-icon" >
                  <img src={phone} alt="" />
                </div>
                <div>
                  <p>+880 1319-864529</p>
                  <p>+880 1521203530</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-main-section ">
            <div className="col-md-4 col-sm-6">
                <div className="footer-left-part">
                <img src={logo} alt="" className="footer-logo" />
                <p>Amaito Soft is a full-fledged software, website and app creation company located in Feni Chittagong. Amaito Soft is known as Creative Website Development Company of Bangladesh.</p>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="footer-section">
                <h5>Services</h5>
                <ul>
                    <li>
                        <a href="/app-development">APP DEVELOPMENT</a>
                    </li>
                    <li>
                        <a href="/web-development">WEB DEVELOPMENT</a>
                    </li>
                    <li>
                        <a href="/ui-ux-design">UI/UX DESIGN</a>
                    </li>
                    <li>
                        <a href="/digital-marketing">DIGITAL MARKETING</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="footer-section">
                <h5>Follow Us</h5>
                <div className="social-link-wrapper d-flex">
                    <div className="single-socila-link">
                        <a href="https://www.facebook.com/profile.php?id=100094589978325" target="blank"><img src={facebook} alt="" /></a>
                    </div>
                    <div className="single-socila-link">
                        <a href="https://www.linkedin.com/company/amaito-soft/" target="blank"><img src={linkedin} alt="" /></a>
                    </div>
                    <div className="single-socila-link">
                        <a href="" target="blank" ><img src={instagram} alt="" /></a>
                    </div>
                    
                    <div className="single-socila-link">
                        <a href="" target="blank"><img src={twitter} alt="" /></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
      <br /><br /><br /><br />
      </div>
    </div>
  );
}

export default Footer;
