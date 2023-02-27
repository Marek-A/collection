import React from 'react'
import './styles/portfolio.css'
import './styles/mediaqueries.css'

export default function Portfolio() {
  return (
    <section className='portfolio' id="portfolio">
      <h2 className='heading'>Latest <span>Projects</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={require('../assets/images/portfoliov2.PNG')} alt="" />
          <div className="portfolio-layer">
            <h4>Developer Portfolio</h4>
            <p>In this project, I used React to build a minimalistic styled webpage that focuses on simplicity.
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/collection/tree/main/portfolio-v2"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/milygear.png')} alt="" />
          <div className="portfolio-layer">
            <h4>MilyGear webshop</h4>
            <p>This React webstore for Military gear, has lots of functions that should be functioning, page is not responsive and design wasn't a priority.
            </p>
            <a target="_blank" rel="noreferrer" href="https://milygear.web.app/"><i class='bx bxs-home-alt-2'></i></a>
          </div>
        </div>


        <div className="portfolio-box">
          <img src={require('../assets/images/nortal.jpg')} alt="" />
          <div className="portfolio-layer">
            <h4>Nortal's Winter University Bakery Shop</h4>
            <h2>Assessment</h2>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/assessments/tree/main/nortal-university"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/nagel.png')} alt="" />
          <div className="portfolio-layer">
            <h4>Kuehne + Nagel shipments data</h4>
            <h2>Assessment</h2>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/assessments/tree/main/kuehne-nagel"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

      </div>
    </section >
  )
}
