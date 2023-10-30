import React from "react";
import OtherPageNav from "../Components/OtherPageNav";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";

function PortfolioPage() {
  return (
    <div>
      <OtherPageNav />
      <div className="container-fluid portfolio-header">
        <div className="about-bg-color">
        <div className="container">
          <div className="about-header-wrapper">
            <h2>Portfolio</h2>
            <p>
              As our website looks attractive from a computer, it can be easily
              used with mobiles, tablets and tabs. We listen to the needs of our
              clients and give them the right guidance as well as make video
              tutorials on how to use it after application development.
            </p>
          </div>
        </div>
        </div>
      </div>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default PortfolioPage;
