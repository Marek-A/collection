import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css'
import Button from 'react-bootstrap/Button';

export const ContactUs = () => {
  const [disabled, setDisabled] = useState(false);
  const [notification, setNotification] = useState('');
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setDisabled(true);

    const nameInput = form.current.from_name;
    if (!nameInput.value) {
      console.log("Name field is required");
      setDisabled(false);
      return;
    }

    const emailInput = form.current.from_email;
    if (!emailInput.validity.valid) {
      console.log("Invalid email address");
      setDisabled(false);
      return;
    }

    try {
      const result = await emailjs.sendForm('service_tjfhv29', 'template_2qxs732', form.current, 'Ij-3OW7BSTg1gofrm');
      console.log(result.text);
      setNotification('Message sent');
      setTimeout(() => setNotification(''), 5000);
    } catch (error) {
      console.log(error.text);
      setNotification('Error sending message, please try again later');
      setTimeout(() => setNotification(''), 5000);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <div className="text-container">
          <p>If you have any inquiries or wish to share your thoughts with us, please don't hesitate to reach out and send us a message</p>
          <p>- Sincerely your MilyGear Team</p>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Your name</label><br />
            <input id="input" type="text" name="from_name" required /><br />
            <label htmlFor="email">Your email address</label><br />
            <input id="input" type="email" name="from_email" required /><br />
            <label htmlFor="message">Message</label><br />
            <textarea id="input-message" name="message" /><br />
            <Button id="sendbutton" disabled={disabled} onClick={sendEmail}>Send your message</Button> <br />
          </form>
        </div>
      </div>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};
