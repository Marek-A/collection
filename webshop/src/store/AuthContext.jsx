import { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());
    function checkIfLoggedIn() {
        // peaks tegema api päringu tokeni jaoks firebase, hetkel toimub sessionstoragega ja saab hackida
        // fetc() siis küsib, kas on päris - peaks tegema
        if (sessionStorage.getItem("token")) {
            return true;
        } else {
            return false;
        }
    }

    return (

        <AuthContext.Provider value={{
            loggedIn: isLoggedIn,
            setLoggedIn: setIsLoggedIn
        }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export default AuthContext;
