import React from 'react'
import Carousel from '../SmallComponent/Carousel'

function OurClient() {
  return (
    <div className='container-fluid our-client' >
        <div className="container">
        <div className="services-section-wrapper">
          <h1>Our Portfolio</h1>
          <div className="hr-icon"></div>
          <p>Our esteemed project</p>
          <Carousel/>
          <div className="all-project-button-wrapper">
            <div className="all-project-button">
              <a href="/portfolio" className='button view-project' >View All Project</a>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default OurClient