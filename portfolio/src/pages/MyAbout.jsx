import "../components/css/MyAbout.css"
import "../components/css/Styler.css"
import Button from "react-bootstrap/Button";

import { useTranslation } from "react-i18next";

function MyAbout({ r1 }) {

  const { t } = useTranslation();

  return (
    <div ref={r1} className="myabout">

      <section className="about-section">
        <div className="about-text">
          <img url="../../public/profile.png" alt="" />
          <h4 id="about-title">{t("ABOUT-LOWER-TITLE")}</h4>
          <p>{t("ABOUT-TEXT")}</p>
          <div id="cv-resume-btn-container">
            <Button href="/src/assets/downloadable/resume.pdf" download="resume.pdf" id="cv-resume-button" variant="dark">résumé</Button>
            <Button href="../assets/downloadable/cv.pdf" download target="download" id="cv-resume-button" variant="dark">cv</Button>

          </div>
        </div>
      </section >

      <br />

      <section className="skills-container">
        <p id="tech-exp-title">expertise</p>
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

    </div >
  )
}

export default MyAbout
