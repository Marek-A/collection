import "../components/css/MyHomepage.css"
import "../components/css/Styler.css"

// import Spline from '@splinetool/react-spline';
import { useTranslation } from "react-i18next";

function MyHomepage({ r1 }) {
    const { t } = useTranslation();

    return (

        <div ref={r1} className="myhomepage">
            <p className="my-name">Marek Angelštok</p>
            <p className="welcome-message">{t("TITLE-WORK")}</p>
            {/* <Spline id="spline" scene="https://prod.spline.design/mrk6ozCQ9eSoJO7G/scene.splinecode" /> */}
        </div>
    )
}

export default MyHomepage
