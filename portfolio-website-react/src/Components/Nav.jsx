import React from "react";
import "./Nav.css";
import penImg from "../assets/Nav-img/pen.svg";
import flaskImg from "../assets/Nav-img/flask-chemistry-svgrepo-com.svg";
import mailImg from "../assets/Nav-img/envelope.svg";

const Nav = () => {
  const scrollTo = (section) => {
    const element = document.querySelector(section);
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  };
  return (
    <div className="nav-links">
      {/* <div className="nav-link">
        <img className="nav-link-img" src={penImg} alt="about image"></img>
        <p className="nav-link-name">About</p>
      </div> */}
      <div
        className="nav-link"
        id="projects-button"
        onClick={() => {
          scrollTo(".project-container");
        }}
      >
        <img className="nav-link-img" src={flaskImg} alt="projects image"></img>
        <p className="nav-link-name">Projects</p>
      </div>
      <div
        className="nav-link"
        onClick={() => {
          scrollTo(".contact-form-container");
        }}
      >
        <img className="nav-link-img" src={mailImg} alt="contact image"></img>
        <p className="nav-link-name">Contact</p>
      </div>
    </div>
  );
};

export default Nav;
