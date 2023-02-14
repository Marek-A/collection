import "./App.css";
import "./components/css/Styler.css";
import "./components/css/NavigationBar.css";

import MyHomepage from "./pages/MyHomepage";
import MyAbout from "./pages/MyAbout";
import MyPortfolio from "./pages/MyPortfolio";
import MyContact from "./pages/MyContact";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const MyHomepageRef = useRef(null);
  const MyAboutRef = useRef(null);
  const MyPortfolioRef = useRef(null);
  const MyContactRef = useRef(null);
  const { t, i18n } = useTranslation();
  const isMobileOrTablet = useMediaQuery({ maxWidth: 991 });
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(expanded ? false : "expanded");

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

  let scrollbutton = document.getElementById("scroll-to-top-button");
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
      {isMobileOrTablet && (
        <Navbar
          className="hamburger-navigationbar"
          expand="lg"
          expanded={expanded}
        >
          <Container>
            <Navbar.Brand id="logo" as={Link} to="/">
              <img src="logo.png" alt="" width="45" height="45" />
            </Navbar.Brand>
            <Navbar.Toggle
              id="toggle-icon"
              onClick={handleClick}
              aria-controls="basic-navbar-nav"
            />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="hamburger-navigationbar-buttons"
                onClick={topFunction}
              >
                {t("HOME")}
              </Nav>
              <br />
              <Nav
                className="hamburger-navigationbar-buttons"
                onClick={scrollToSectionMyAbout}
              >
                {t("ABOUT")}
              </Nav>
              <br />
              <Nav
                className="hamburger-navigationbar-buttons"
                onClick={scrollToSectionMyPortfol}
              >
                {t("PORTFOLIO")}
              </Nav>
              <br />
              <Nav
                className="hamburger-navigationbar-buttons"
                onClick={scrollToSectionMyContact}
              >
                {t("CONTACT")}
              </Nav>
              <Nav>
                <img
                  className="navigationbar-language-button"
                  onClick={() => changeLang("en")}
                  src="/english.png"
                  alt="ENG"
                />
              </Nav>
              <Nav>
                <img
                  className="navigationbar-language-button"
                  onClick={() => changeLang("ee")}
                  src="/estonia.png"
                  alt="EE"
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      {!isMobileOrTablet && (
        <Navbar className="navigationbar" expand="lg">
          <Container className="navigationbar-content-container">
            <Navbar.Brand
              onClick={topFunction}
              width="100"
              height="100"
              className="d-inline-block align-top"
              id="logo"
              src="logo.png"
              alt=""
            >
              {" "}
              <img width="30" height="30" src="logo.png" alt="" />
            </Navbar.Brand>
            <Nav>
              <Nav className="navigationbar-buttons" onClick={topFunction}>
                {t("HOME")}
              </Nav>
              <Nav
                className="navigationbar-buttons"
                onClick={scrollToSectionMyAbout}
              >
                {t("ABOUT")}
              </Nav>
              <Nav
                className="navigationbar-buttons"
                onClick={scrollToSectionMyPortfol}
              >
                {t("PORTFOLIO")}
              </Nav>
              <Nav
                className="navigationbar-buttons"
                onClick={scrollToSectionMyContact}
              >
                {t("CONTACT")}
              </Nav>
              <Nav>
                <img
                  className="navigationbar-language-button"
                  onClick={() => changeLang("en")}
                  src="/english.png"
                  alt="ENG"
                />
                <img
                  className="navigationbar-language-button"
                  onClick={() => changeLang("ee")}
                  src="/estonia.png"
                  alt="EE"
                />
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      )}

      <button
        onClick={topFunction}
        id="scroll-to-top-button"
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
