import React from 'react'
import { Link } from 'react-router-dom';
import './styles/about.css'
import './styles/mediaqueries.css'

function About() {

    const handleLinkClick = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="about" id="about">

            <div className="about-content">
                <h2 className="heading">My Journey with<span> coding</span></h2>
                <h3>Frontend Developer</h3>
                <p>Hi, my name is Marek! I'm a aspiring frontend developer who found a great passion for coding and started learning on my own.
                    <br /> Every day, I strive to enhance my abilities as I aspire to establish a fulfilling career in a domain where I can effectively showcase my expertise, leverage my experiences, and manifest my aspirations into reality.
                    <br /> I have a strong foundation in HTML, CSS, JavaScript, and React, but my main foundation is a strong motivation to continually improve myself every day.
                    <br />
                    <br />
                    I always try to provide a quality and pleasant user experience, both in coding and in daily life.
                </p>
                <Link class="btn" href='portfolio' as={Link} to='/portfolio' onClick={(event) => handleLinkClick(event, 'portfolio')}>
                    Curious about my projects?
                </Link>
            </div>
            <div className="about-img">
                <img src={require('../assets/images/profile.png')} alt="" />
            </div>
        </section >
    )
}

export default About