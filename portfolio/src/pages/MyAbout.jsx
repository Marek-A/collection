import "../components/css/MyAbout.css"
import "../components/css/Styler.css"
import Button from "react-bootstrap/Button";
// import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";

function MyAbout({ r1 }) {

  const { t } = useTranslation();

  return (
    <div ref={r1} className="myabout">

      <section className="about-section">
        <div className="about-text">
          {/* <div className="spline-container"> <Spline id="spline" scene="https://prod.spline.design/wVa8RmJlI5MgmPzP/scene.splinecode" /></div> */}
          <h4 id="about-title">{t("ABOUT-LOWER-TITLE")}</h4>
          <p>{t("ABOUT-TEXT")}</p>
          <br />
          <div id="cv-resume-btn-container">
            <Button id="cv-resume-button" variant="success" href="https://github.com/Marek-A/collection/raw/main/portfolio/src/assets/downloadable/resume.pdf" download="resume.pdf">résumé</Button>
            <Button id="cv-resume-button" variant="success">cv</Button>
          </div>
        </div>
      </section >

      <br />

      <section className="skills-container">
        <p id="tech-exp-title">{t("ABOUT-EXPERT")}</p>
        <ul id="skill-icon-container">
          <li><div class="item" title="HTML"></div></li>
          <li><div class="item" title="CSS"></div></li>
          <li><div class="item" title="JavaScript"></div></li>
          <li><div class="item" title="React"></div></li>
          <li><div class="item" title="Vue.js"></div></li>
          <li><div class="item" title="Bootstrap"></div></li>
          <li><div class="item" title="Next.js"></div></li>
          <li><div class="item" title="Node.js"></div></li>
          <li><div class="item" title="Firebase"></div></li>
          <li><div class="item" title="Postman"></div></li>

        </ul>
      </section>

      <section className="skills-container">
        <p id="tech-exp-title">{t("ABOUT-DESIGN")}</p>
        <ul id="skill-icon-container">
          <li><div class="designitem" title="Figma"></div></li>
          <li><div class="designitem" title="Adobe Xd"></div></li>
          <li><div class="designitem" title="Photoshop"></div></li>
          <li><div class="designitem" title="Lightroom"></div></li>
          <li><div class="designitem" title="Spline 3D"></div></li>

        </ul>
      </section>

    </div >
  )
}

export default MyAbout
