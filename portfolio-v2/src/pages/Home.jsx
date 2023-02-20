import React, { useEffect } from "react";
import "./styles/home.css";
import "./styles/mediaqueries.css";

import ScrollReveal from "scrollreveal";
import Typed from 'typed.js';
import Spline from '@splinetool/react-spline';

export default function Home() {
    const typedRef = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Frontend Developer', 'UI designer', 'Proud owner of a golden retriever', ''],
            typeSpeed: 125,
            backSpeed: 150,
            backDelay: 1500,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        ScrollReveal({
            reset: true,
            distance: "80px",
            duration: 2000,
            delay: 200,
        });

        ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
        ScrollReveal().reveal(
            ".home-img, .portfolio-box, .contact form",
            { origin: "bottom" }
        );
        ScrollReveal().reveal(".home-content h1, .about-img", {
            origin: "left",
        });
        ScrollReveal().reveal(".home-content p, .about-content", {
            origin: "right",
        });
    }, []);

    function handleClick() {
        navigator.clipboard.writeText('marek@angelstok.ee').then(function () {
            alert('Email address copied to clipboard!');
        }, function () {
            console.error('Failed to copy email address to clipboard!');
        });
    }

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello there, it's me..</h3>
                <h1>Marek Angelštok</h1>
                <h3>
                    I'm a <span className="multiple-text" ref={typedRef}></span>
                </h3>

                <p>
                    I'm a aspiring frontend developer with great passion for coding.{" "}
                    <br />
                    I always try to provide a quality work and pleasant user
                    experience, both in coding and in daily life.
                </p>
                <div className="social-media">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/marek-angelstok/"
                    >
                        <i class="bx bxl-linkedin-square"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Marek-A"
                    >
                        <i class="bx bxl-github"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/m.angelstok"
                    >
                        <i class="bx bxl-facebook-circle"></i>
                    </a>
                    <button id='mail' onClick={handleClick}>
                        <i className="bx bxs-message-rounded-dots"></i>
                    </button>

                </div>
                <a
                    href="https://github.com/Marek-A/storage/raw/main/download/MAREK%20ANGEL%C5%A0TOK%20CV.pdf"
                    class="btn"
                >
                    Download CV
                </a>
            </div>
            <div className="home-img">
                <Spline scene="https://prod.spline.design/05fSpuF9Fvx-3azd/scene.splinecode" />
            </div>
        </section>
    );
}

