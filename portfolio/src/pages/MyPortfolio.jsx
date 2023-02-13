import "../components/css/MyPortfolio.css"
import "../components/css/Styler.css"
import website1 from "../assets/img/dummy.png"
import website2 from "../assets/img/dummy3.jpg"
import website3 from "../assets/img/dummy2.jpg"
import website4 from "../assets/img/dummy4.jpg"

import { useTranslation } from "react-i18next";

function MyPortfolio({ r1 }) {

    const { t } = useTranslation();

    const handleClick = () => {
        window.location.assign("https://milygear.web.app/");
    };

    return (
        <div ref={r1} className="myportfolio">
            <br />
            <br />
            <h3>{t("TITLE-PORTFOLIO")}</h3>
            <div className="portfolio-grid">
                <div className="portfolio-item">
                    <img onClick={handleClick} src={website1} alt="Website 1 Thumbnail" />
                </div>
                <div className="portfolio-item">
                    <img src={website2} alt="Website 2 Thumbnail" />
                </div>
                <div className="portfolio-item">
                    <img src={website3} alt="Website 3 Thumbnail" />
                </div>
                <div className="portfolio-item">
                    <img src={website4} alt="Website 4 Thumbnail" />
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio