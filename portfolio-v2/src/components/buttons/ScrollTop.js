import React from "react";
import "./scrolltop.css";
const ScrollTop = ({ sectionId }) => {
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-icon-top">
      <a href="/" onClick={(event) => handleLinkClick(event, sectionId)}>
        <i className="bx bxs-up-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollTop;
