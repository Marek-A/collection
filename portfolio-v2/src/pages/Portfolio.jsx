import React from 'react'
import './styles/portfolio.css'
import './styles/mediaqueries.css'

export default function Portfolio() {
  return (
    <section className='portfolio' id="portfolio">
      <h2 className='heading'>Latest <span>Projects</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={require('../assets/images/portfoliov2.png')} alt="" />
          <div className="portfolio-layer">
            <h4>Developer Portfolio</h4>
            <p>Thisis the page you are currently using, during coding this page I got inspiration from various webpages to get the minimalistic look.about
              This webpage is built with React.
            </p>
            <a href="https://github.com/Marek-A/collection/tree/main/portfolio-v2"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/milygear.png')} alt="" />
          <div className="portfolio-layer">
            <h4>Mily Gear webstore</h4>
            <p>This React webstore for Military gear was built during a comprehensive developer course.
            </p>
            <a href="https://github.com/Marek-A/collection/tree/main/webshop"><i class='bx bx-code-alt'></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/nortal.jpg')} alt="" />
          <div className="portfolio-layer">
            <h4>Nortal's Winter University assessment</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi dignissimos nemo pariatur cupiditate deleniti hic veniam temporibus,
              placeat ad accusamus recusandae necessitatibus consequatur corrupti
              ea odit iure voluptas magnam harum.
            </p>
            <a href="x"><i class='bx bx-code-alt'></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/dummy.jpg')} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi dignissimos nemo pariatur cupiditate deleniti hic veniam temporibus,
              placeat ad accusamus recusandae necessitatibus consequatur corrupti
              ea odit iure voluptas magnam harum.
            </p>
            <a href="x"><i class='bx bx-code-alt'></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/dummy.jpg')} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi dignissimos nemo pariatur cupiditate deleniti hic veniam temporibus,
              placeat ad accusamus recusandae necessitatibus consequatur corrupti
              ea odit iure voluptas magnam harum.
            </p>
            <a href="x"><i class='bx bx-code-alt'></i></a>
          </div>
        </div>


        <div className="portfolio-box">
          <img src={require('../assets/images/dummy.jpg')} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi dignissimos nemo pariatur cupiditate deleniti hic veniam temporibus,
              placeat ad accusamus recusandae necessitatibus consequatur corrupti
              ea odit iure voluptas magnam harum.
            </p>
            <a href="x"><i class='bx bx-code-alt'></i></a>
          </div>
        </div>

      </div>
    </section >
  )
}
