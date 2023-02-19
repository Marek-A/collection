import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/navbar/navbar.css";
import "./pages/styles/home.css";
import "./pages/styles/about.css";
import "./pages/styles/portfolio.css";
import "./pages/styles/contact.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
