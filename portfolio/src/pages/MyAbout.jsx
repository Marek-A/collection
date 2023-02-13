import "../components/css/MyAbout.css"
import "../components/css/Styler.css"

import { useTranslation } from "react-i18next";

function MyAbout({ r1 }) {

  const { t } = useTranslation();

  return (
    <div ref={r1} className="myabout">
      <br />
      <br />
      {/* <h3>{t("TITLE-ABOUT")}</h3> */}
      <div className="about-section">
        <div className="about-text">
          <h4>{t("ABOUT-LOWER-TITLE")}</h4>
          <p>
            {t("ABOUT-TEXT")}</p>
        </div>
      </div>

    </div>
  )
}

export default MyAbout
