import React from "react";
import { portfolio } from "../JsonData/Client";
import { app_portfolio1 } from "../JsonData/Client";
import { app_portfolio2 } from "../JsonData/Client";
import { app_portfolio3 } from "../JsonData/Client";
import link from "../assets/link.png";

function Portfolio() {
  return (
    <div className="container-fluid portfolio-section-wrapper">
      <div className="container">
        <div className="services-section-wrapper">
          <h1>Portfolio</h1>
          <div className="hr-icon"></div>
          <p>Web Design and Development Portfolio</p>
        </div>
        <div className="portfolio-item-wrapper">
          <div className="row">
            {portfolio.map((item) => {
              return (
                <div className="col-md-4 col-sm-6" key={item.id}>
                  <div className="portfolio-single-item-wrapper">
                    <div className="portfolio-img-wrapper">
                      <img src={item.img} alt="" className="img-fluid" />

                      <div className="portfolio-link">
                        <a href={item.link} target="blank">
                          <img src={link} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-item-name">
                      <a href={item.link} target="blank">
                        {item.title}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-section-wrapper">
          <h1>Portfolio</h1>
          <div className="hr-icon"></div>
          <p>App Development Portfolio</p>
        </div>
        <div className="portfolio-item-wrapper app-portfolio">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div style={{marginTop:'2rem'}} >
              <div className="app-porofolio-single-item">
                {app_portfolio1.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="portfolio-single-item-wrapper">
                        <div className="portfolio-img-wrapper">
                          <img
                            src={item.img}
                            alt=""
                            className="img-fluid app-portfolio-img"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="portfolio-item-name">
                <a href="" target="blank">
                  FOODHUB
                </a>
              </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div style={{marginTop:'2rem'}} >
              <div className="app-porofolio-single-item">
                {app_portfolio2.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="portfolio-single-item-wrapper">
                        <div className="portfolio-img-wrapper">
                          <img
                            src={item.img}
                            alt=""
                            className="img-fluid app-portfolio-img"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="portfolio-item-name">
                <a href="" target="blank">
                  EDUMATE
                </a>
              </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div style={{marginTop:"2rem"}} >
                <div className="app-porofolio-single-item">
                  {app_portfolio3.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="portfolio-single-item-wrapper">
                          <div className="portfolio-img-wrapper">
                            <img
                              src={item.img}
                              alt=""
                              className="img-fluid app-portfolio-img"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="portfolio-item-name">
                  <a href="" target="blank">
                    WALLETMIX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
