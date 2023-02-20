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
            <h4>"Developer Portfolio v.2"</h4>
            <h2>Personal project</h2>
            <p>In this project, I used React to build a minimalistic styled webpage that focuses on simplicity, content, and ease of use. The different elements of the page are organized around components which helps keep the code more organized and manageable.
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/collection/tree/main/portfolio-v2"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/milygear.png')} alt="" />
          <div className="portfolio-layer">
            <h4>"Mily Gear" webstore</h4>
            <h2>Course project</h2>
            <p>This React webstore for Military gear was built during a comprehensive developer course, page is not responsive and design wasn't a priority.
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/collection/tree/main/webshop"><i class='bx bxl-github' ></i></a>
            <a target="_blank" rel="noreferrer" href="https://milygear.web.app/"><i class='bx bxs-home-alt-2'></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/portfolio1.png')} alt="" />
          <div className="portfolio-layer">
            <h4>"Portfolio v.1"</h4>
            <p>My first version of the portfolio I built using React, page is not responsive and has lot's of broken features.
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/collection/tree/main/portfolio"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/nortal.jpg')} alt="" />
          <div className="portfolio-layer">
            <h4>"Nortal's Winter University"</h4>
            <h2>Assessment</h2>
            <p>I implemented the new employee input form with the required validations for ID, name, email, and avatar, using an external library for validation. I also added appropriate user error messages below the input fields.
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/assessments/tree/main/nortal-university"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/nagel.png')} alt="" />
          <div className="portfolio-layer">
            <h4>"Kuehne + Nagel" - shipments data</h4>
            <h2>Assessment</h2>
            <p>This Kuehne + Nagel assessment involved creating a CRUD page for shipments
            </p>
            <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A/assessments/tree/main/kuehne-nagel"><i class='bx bxl-github' ></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/blank.png')} alt="" />
          <div className="portfolio-layer">
            <h4>"Favfarium" project</h4>
            <h2>Project in development</h2>
            <p>Favfarium is a webapp built with React that combines the features of your favorite search engine with an option to favorite, add notes and access pages instantly when opening Chrome. You can save and easily retrieve your favorite pages, make annotations and use it as your homepage in Chrome.
            </p>
            {/* <a target="_blank" rel="noreferrer" href="x"><i class='bx bxl-github' ></i></a> */}
          </div>
        </div>

        <div className="portfolio-box">
          <img src={require('../assets/images/blank.png')} alt="" />
          <div className="portfolio-layer">
            <h4>"Workout Planner"</h4>
            <h2>Project in development</h2>
            <p>Workout Planner is a React-based web application designed to help you stay on track with your fitness goals. You can create custom workout plans tailored to your needs, keep an up-to-date calendar tracking all your workouts, set reminders to motivate yourself, and more, all in one convenient place. Whether you’re looking to drop a few pounds or train for a marathon, Workout Planner is the perfect companion.
            </p>
            {/* <a target="_blank" rel="noreferrer" href="x"><i class='bx bxl-github' ></i></a> */}
          </div>
        </div>

      </div>
    </section >
  )
}
