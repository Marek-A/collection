import React, { useState, useEffect } from "react";
import "./scrolltop.css";

const ScrollTop = ({ sectionId }) => {
  const [showButton, setShowButton] = useState(false);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className="scroll-icon-top">
          <a href="/" onClick={(event) => handleLinkClick(event, sectionId)}>
            <i className="bx bxs-plane-take-off"></i>
          </a>
        </div>
      )}
    </>
  );
};

export default ScrollTop;
