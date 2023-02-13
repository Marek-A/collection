import "./App.css";
import "./components/css/Styler.css";
// import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";


import MyHomepage from "./pages/MyHomepage";
import MyAbout from "./pages/MyAbout";
import MyPortfolio from "./pages/MyPortfolio";
import MyContact from "./pages/MyContact";

function App() {


    const MyHomepageRef = useRef(null);
    const MyAboutRef = useRef(null);
    const MyPortfolioRef = useRef(null);
    const MyContactRef = useRef(null);

    const scrollToSectionMyHomepage = () =>
        MyHomepageRef.current.scrollIntoView({ behavior: "smooth" });
    const scrollToSectionMyAbout = () =>
        MyAboutRef.current.scrollIntoView({ behavior: "smooth" });
    const scrollToSectionMyPortfol = () =>
        MyPortfolioRef.current.scrollIntoView({ behavior: "smooth" });
    const scrollToSectionMyContact = () =>
        MyContactRef.current.scrollIntoView({ behavior: "smooth" });

    const { t, i18n } = useTranslation();

    const changeLang = (newLang) => {
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    };

    // Get the button:
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    return (
        <div className="body-container">
            <Navbar expand="lg" className="sticky-top">
                <Container id="container">
                    <Navbar.Brand as={Link} to="/">
                        {" "}
                        <img
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            id="logo"
                            src="logo.png"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Nav>
                        <Nav id="navlink" onClick={scrollToSectionMyHomepage}>
                            {t("HOME")}
                        </Nav>
                        <Nav id="navlink" onClick={scrollToSectionMyAbout}>
                            {t("ABOUT")}
                        </Nav>
                        <Nav id="navlink" onClick={scrollToSectionMyPortfol}>
                            {t("PORTFOLIO")}
                        </Nav>
                        <Nav id="navlink" onClick={scrollToSectionMyContact}>
                            {t("CONTACT")}
                        </Nav>
                    </Nav>
                    <Nav>
                        <img
                            id="lang"
                            onClick={() => changeLang("en")}
                            src="/english.png"
                            alt="ENG"
                        />
                        <img
                            id="lang"
                            onClick={() => changeLang("ee")}
                            src="/estonia.png"
                            alt="EE"
                        />
                    </Nav>
                </Container>
            </Navbar>

            <button onClick={topFunction} id="myBtn" title="Go to top">
                Take me up!
            </button>

            <div>
                <MyHomepage r1={MyHomepageRef} />
            </div>
            <div>
                <MyAbout r1={MyAboutRef} />
            </div>
            <div>
                <MyPortfolio r1={MyPortfolioRef} />
            </div>
            <div>
                <MyContact r1={MyContactRef} />
            </div>
            <p className="copyright">
                © 2023. Developed by Marek Angelštok. All right reserved.
            </p>
        </div>
    );
}

export default App;
