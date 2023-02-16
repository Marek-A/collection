import '../css/Login.css'
import { useContext } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import Button from 'react-bootstrap/Button';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDO3Ey_rMbQZ6J2NovfzfusJeHG_3i2RmQ";
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const login = () => {
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }
        fetch(url, { method: "POST", body: JSON.stringify(user) })
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    setMessage(json.error.message);
                } else {
                    navigate("/admin");
                    authCtx.setLoggedIn(true);
                    sessionStorage.setItem("token", json.idToken);
                }
            })
    }
    return (
        <div>
            <div id="login-container">
                <label id="log-lab">E-mail</label> <br />
                <input ref={emailRef} type="text" /> <br />
                <label id="log-lab">Password</label> <br />
                <input ref={passwordRef} type="password" /> <br />
                <Button id="login-button" onClick={login}>Login</Button>
                <div id="message-warning">{message}</div>
            </div>
        </div>
    );
}
export default Login;