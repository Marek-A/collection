import "../components/css/MyHomepage.css"
import "../components/css/Styler.css"

import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";

function MyHomepage({ r1 }) {
    const { t } = useTranslation();

    return (
        <div ref={r1} className="myhomepage">
            <br />
            <br />
            <p className="my-name">
                Marek Angelštok
            </p>
            <p className="welcome-message">
                {t("TITLE-WORK")}
            </p>
            <p className="introduction">

            </p>
            <Spline scene="x" />
        </div>
    )
}

export default MyHomepage
