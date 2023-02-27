import "./App.css";
import "./components/navbar/navbar.css";
import "./pages/styles/home.css";
import "./pages/styles/about.css";
import "./pages/styles/portfolio.css";
import "./pages/styles/contact.css";
import "./pages/styles/mediaqueries.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ScrollTop from "./components/buttons/ScrollTop";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <ScrollTop sectionId="home" />
    </div>
  );
}

export default App;
