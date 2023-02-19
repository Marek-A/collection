import React from 'react'
import './styles/home.css'

export default function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's me</h3>
                <h1>Marek Angelštok</h1>
                <h3>I'm a <span>Frontend Developer</span></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatem dicta quae dolorum quo. At, consequatur veritatis! Nihil maxime voluptas ipsam vitae incidunt eveniet aut tempore culpa in. Tempora, soluta.</p>
                <div className="social-media">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marek-angelstok/"><i class='bx bxl-linkedin-square' ></i></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Marek-A"><i class='bx bxl-github' ></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/m.angelstok"><i class='bx bxl-facebook-circle' ></i></a>
                    <a href="contact@angelstok.ee"><i class='bx bxs-message-rounded-dots' ></i></a>
                </div>
                <a href="x" class="btn">Download CV</a>
            </div>
            <div className="home-img">
                <img src="home.png" alt="x" />
            </div>

        </section>
    )
}
