import React from "react";
import "./BackToTopButton.css";
import topIcon from "../assets/back-to-top-button/chevron-double-up.svg";

const BackToTopButton = () => {
  const scrollTo = (section) => {
    const element = document.querySelector(section);
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  };
  return (
    <div className="back-to-top-button">
      <button
        id="back-to-top-button"
        aria-label="back-to-top-button"
        onClick={() => {
          scrollTo(".header");
        }}
      >
        <img src={topIcon} alt="back-to-top"></img>
      </button>
    </div>
  );
};

export default BackToTopButton;
