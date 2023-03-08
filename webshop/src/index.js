import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartSumContextProvider } from "./store/CartSumContext";
import { AuthContextProvider } from "./store/AuthContext";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import "./i18n";

import "./index.css";
import "./App.css";
import "./css/Cart.css";
import "./css/Contact.css";
import "./css/Homepage.css";
import "./css/Login.css";
import "./css/Shops.css";
import "./css/MaintainProducts.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
