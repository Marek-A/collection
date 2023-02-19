import "../components/css/MyAbout.css"
import "../components/css/Styler.css"
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

function MyAbout({ r1 }) {

  const { t } = useTranslation();

  return (
    <div ref={r1} className="myabout">
      {/* <img id="profile-photo" src="../assets/img/profile-picture.jpg" alt="x" width="400" height="300" /> */}
      <section className="about-section">
        <div className="about-text">
          <h4 id="about-title">{t("ABOUT-LOWER-TITLE")}</h4>
          <p>{t("ABOUT-TEXT")}</p>
          <br />
          <div id="cv-resume-btn-container">
            <Button id="cv-resume-button" variant="success" href="https://github.com/Marek-A/storage/raw/f4b6a0327423d315ef90b05adfba87420d4da794/download/MAREK%20ANGEL%C5%A0TOK%20CV.pdf" download="resume.pdf">résumé</Button>
            <Button id="cv-resume-button" variant="success">cv</Button>
          </div>
        </div>
      </section >
      <br />
      <section className="skills-container">
        <p id="tech-exp-title">{t("ABOUT-EXPERT")}</p>
        <ul id="skill-icon-container">
          <li><div className="item" title="HTML"></div></li>
          <li><div className="item" title="CSS"></div></li>
          <li><div className="item" title="JavaScript"></div></li>
          <li><div className="item" title="React"></div></li>
          <li><div className="item" title="Vue.js"></div></li>
          <li><div className="item" title="Bootstrap"></div></li>
          <li><div className="item" title="Next.js"></div></li>
          <li><div className="item" title="Node.js"></div></li>
          <li><div className="item" title="Firebase"></div></li>
          <li><div className="item" title="Postman"></div></li>
        </ul>

        <p id="tech-exp-title">{t("ABOUT-DESIGN")}</p>
        <ul id="skill-icon-container">
          <li><div className="designitem" title="Figma"></div></li>
          <li><div className="designitem" title="Adobe Xd"></div></li>
          <li><div className="designitem" title="Photoshop"></div></li>
          <li><div className="designitem" title="Spline 3D"></div></li>
          <li><div className="designitem" title="Lightroom"></div></li>
        </ul>
      </section>
    </div >
  )
}

export default MyAbout
