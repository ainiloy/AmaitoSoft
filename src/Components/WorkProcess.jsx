import React from "react";
// import titlebg from "../assets/yellow-bg.png";
import workProcess from '../assets/workProcess.gif'
import rocket from '../assets/rocket.png'
import rocket_bg from '../assets/rocket-bg.png'
import { BiCheckDouble } from 'react-icons/bi';

function WorkProcess() {
  return (
    <div className="container-fluid make-business">
        <div className="row align-center">
            <div className="col-md-6">
                <img src={rocket} alt="" className="rocket" />
                <img src={rocket_bg} alt="" className="rocket-bg" />
            </div>
            <div className="col-md-6">
                <div className="make-business-details">
                    <h2>Grow you business more sustainable with us.</h2>
                    <p>Unlock your business's growth potential with our comprehensive solutions. From strategic planning to targeted marketing, we empower success in today's competitive landscape. </p>
                    <div className="row">
                        <div className="col-6">
                            <div className="compatative-sign-wrapper d-flex">
                                <div className="compatative-sign">
                                    <BiCheckDouble/>
                                </div>
                                <h6>Influencing Sales</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="compatative-sign-wrapper d-flex">
                                <div className="compatative-sign">
                                <BiCheckDouble/>
                                </div>
                                <h6>Generating Insights</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="compatative-sign-wrapper d-flex">
                                <div className="compatative-sign">
                                <BiCheckDouble/>
                                </div>
                                <h6>Engaging Customer</h6>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="compatative-sign-wrapper d-flex">
                                <div className="compatative-sign">
                                <BiCheckDouble/>
                                </div>
                                <h6>Boosting Operations</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WorkProcess;