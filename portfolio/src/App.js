import "./App.css";
import "./components/css/Styler.css";
import MyHomepage from "./pages/MyHomepage";
import MyAbout from "./pages/MyAbout";
import MyPortfolio from "./pages/MyPortfolio";
import MyContact from "./pages/MyContact";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const MyHomepageRef = useRef(null);
  const MyAboutRef = useRef(null);
  const MyPortfolioRef = useRef(null);
  const MyContactRef = useRef(null);
  const { t, i18n } = useTranslation();

  const scrollToSectionMyAbout = () =>
    MyAboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToSectionMyPortfol = () =>
    MyPortfolioRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToSectionMyContact = () =>
    MyContactRef.current.scrollIntoView({ behavior: "smooth" });

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  let scrollbutton = document.getElementById("scroll-up-button");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollbutton.style.display = "block";
    } else {
      scrollbutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
            <Nav id="navlink" onClick={topFunction}>
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
      <button
        onClick={topFunction}
        id="scroll-up-button"
        title="Go to top"
      ></button>
      <MyHomepage r1={MyHomepageRef} />
      <MyAbout r1={MyAboutRef} />
      <MyPortfolio r1={MyPortfolioRef} />
      <MyContact r1={MyContactRef} />
    </div>
  );
}

export default App;
