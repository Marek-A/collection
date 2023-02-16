import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useTranslation } from "react-i18next";
import { useContext } from "react";
import CartSumContext from "../store/CartSumContext";

import { useNavigate } from "react-router-dom";

import AuthContext from "../store/AuthContext";

function NavigationBar() {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const changeLang = (newLang) => {
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    };
    //-------------------------------------------------------
    const cartSumCtx = useContext(CartSumContext);
    //-------------------------------------------------------


    // const login = () => {
    //     setLogged: setIsLoggedIn
    //     authCtx.setLoggedIn(true);
    // }

    const logout = () => {
        authCtx.setLoggedIn(false);
        sessionStorage.removeItem("token");
        navigate("/");
    }


    return (

        <Navbar className="navbar-z">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className="swiss" src="/swiss.png" alt="" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="navbar-x" as={Link} to="/cart">
                        {t("cart")}
                    </Nav.Link>
                    <Nav.Link className="navbar-x" as={Link} to="/shops">
                        {t("shops")}
                    </Nav.Link>
                    <Nav.Link className="navbar-x" as={Link} to="/contact">
                        {t("contact")}
                    </Nav.Link>
                    {authCtx.loggedIn === true && <Nav.Link className="navbar-x" as={Link} to="/admin">
                        {t("admin")}
                    </Nav.Link>}
                    {authCtx.loggedIn === false && <Nav.Link className="navbar-x" as={Link} to="/login">
                        Log In
                    </Nav.Link>}
                    {authCtx.loggedIn === false && <Nav.Link className="navbar-x" as={Link} to="/signup">
                        Sign UP
                    </Nav.Link>}
                    {authCtx.loggedIn === true && <Nav.Link className="navbar-x" onClick={logout}>
                        Log Out
                    </Nav.Link>}
                </Nav>
                <div style={{ color: "white" }}>Cart price: {cartSumCtx.cartSum} $</div>
                <img
                    className="lang"
                    onClick={() => changeLang("en")}
                    src="/english.png"
                    alt="ENG"
                />
                <img
                    className="lang"
                    onClick={() => changeLang("ee")}
                    src="/estonia.png"
                    alt="EE"
                />
                <img
                    className="lang"
                    onClick={() => changeLang("tr")}
                    src="/turkey.png"
                    alt="TR"
                />
            </Container>
        </Navbar>
    )
}

export default NavigationBar