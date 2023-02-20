import React from 'react'
import './styles/contact.css'
import './styles/mediaqueries.css'

import emailjs from '@emailjs/browser';

import { useRef, useState } from 'react';


function Contact() {
  const [showForm, setShowForm] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const nameInput = form.current.from_name;
    if (!nameInput.value) {
      console.log("Name field is required");
      return;
    }
    const emailInput = form.current.from_email;
    if (!emailInput.validity.valid) {
      console.log("Invalid email address");
      return;
    }
    emailjs.sendForm('service_tjfhv29', 'template_gt9wm87', form.current, 'Ij-3OW7BSTg1gofrm')
      .then((result) => {
        console.log(result.text);
        setShowForm(false);
        setTimeout(() => setShowForm(true), 220000);
      }, (error) => {
        console.log(error.text);
      });
  };

  function handleClick() {
    navigator.clipboard.writeText('marek@angelstok.ee').then(function () {
      alert('Email address copied to clipboard!');
    }, function () {
      console.error('Failed to copy email address to clipboard!');
    });
  }

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>me</span> via social links or message me from below!</h2>
      <div className='contact-social-container'>
        <div className="contact-social-media">
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
          <button id='contact-mail' onClick={handleClick}>
            <i class="bx bxs-message-rounded-dots"></i>
          </button>
        </div>
      </div>
      <section className="form-container">
        {showForm && (
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-box">
              <input type="text" name="from_name" required placeholder='Your full name' />
              <input type="email" name="from_email" required placeholder='Your email address' />
            </div>
            <div className="input-box">
              <textarea type="text" name="message" rows="10" placeholder='Your message' />
            </div>
            <button class="btn" onClick={() => { sendEmail(); }}>Send!</button>
          </form>
        )}
      </section>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright © 2023 Developed by Marek Angelštok | Personal portfolio | All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact