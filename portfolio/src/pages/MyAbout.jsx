import "../components/css/MyAbout.css"
import "../components/css/Styler.css"

import { useTranslation } from "react-i18next";

function MyAbout({ r1 }) {

  const { t } = useTranslation();

  return (
    <div ref={r1} className="myabout">
      {/* <h3>{t("TITLE-ABOUT")}</h3> */}
      <section className="about-section">
        <div className="about-text">
          <h4>{t("ABOUT-LOWER-TITLE")}</h4>
          <p>{t("ABOUT-TEXT")}</p>
        </div>
      </section><br />
      <section className="skills-container">
        <p>Technologies I have experience with:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue.js</li>
          <li>Bootstrap</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Firebase</li>
          <li>Postman</li>
        </ul>
      </section>

    </div>
  )
}

export default MyAbout
