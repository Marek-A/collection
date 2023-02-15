import "../components/css/MyContact.css"
import "../components/css/Styler.css"
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { useTranslation } from "react-i18next";

function MyContact({ r1 }) {

  const { t } = useTranslation();

  const [showForm, setShowForm] = useState(true);
  const form = useRef();

  const notify = () => toast.success(t("SEND-SUCCESS"), {
    position: toast.POSITION.BOTTOM_CENTER
  });


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

  return (
    <div ref={r1} className="mycontact">
      <br />
      <br />
      {/* <h3>{t("TITLE-CONTACT")}</h3> */}
      <p id="contact-txt1"> {t("CONTACT-TXT1")}<br /></p>
      <p id="contact-txt2"> {t("CONTACT-TXT2")}</p>
      <p id="contact-txt3"> {t("CONTACT-TXT3")}</p>

      <section className="contact-info">
        <p>
          <img
            id="social-icon"
            src="/mail.png"
            alt="mail"
          />
          <a id="social-link" href="mailto:[contact@angelstok.ee]">contact@angelstok.ee</a>
        </p>
        <p>
          <img
            id="social-icon"
            src="/linked.png"
            alt="linkedin"
          />
          <a id="social-link" href="https://www.linkedin.com/in/marek-angelstok/">LinkedIn</a>
        </p>
        <p>
          <img
            id="social-icon"
            src="/fb.png"
            alt="facebook"
          />
          <a id="social-link" href="https://www.facebook.com/m.angelstok">Facebook</a>
        </p>
        <p>
          <img
            id="social-icon"
            src="/git.png"
            alt="github"
          />
          <a id="social-link" href="https://github.com/Marek-A">GitHub</a>
        </p>
      </section>

      <section className="form-container">
        {showForm && (
          <form ref={form} onSubmit={sendEmail}>
            <label>{t("FORM-NAME")}</label><br />
            <input className="form" type="text" name="from_name" required /><br />
            <label>{t("FORM-EMAIL")}</label><br />
            <input className="form" type="email" name="from_email" required /><br />
            <label>{t("FORM-MESSAGE")}</label><br />
            <textarea className="form" name="message" /><br />
            <button id="btn-send" onClick={() => { notify(); sendEmail(); }}>{t("FORM-SEND")}</button> <br />
            <ToastContainer progressClassName="toastProgress"
              bodyClassName="toastBody" />
          </form>
        )}
      </section>
      <br />
      <h5 className="copyright">
        © 2023. Personal portfolio. Developed by Marek Angelštok. All right reserved.
      </h5>
    </div>
  )
}

export default MyContact
