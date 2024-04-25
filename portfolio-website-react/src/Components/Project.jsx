import React from "react";
import "./Project.css";
import gitLogo from "../assets/header-img/github.svg";
import linkIcon from "../assets/Project-card-img/link-45deg.svg";

const Project = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <img
        className="mobile-img"
        src={props.mobileImg}
        alt="project screenshot"
      ></img>
      <img
        className="desktop-img hide"
        src={props.desktopImg}
        alt="project screenshot"
      ></img>

      <div className="subtitle">
        <h4>Description</h4>
        <div className="link-logos">
          <a href={props.gitLink}>
            <img
              className="project-card-link"
              src={gitLogo}
              alt="github logo"
            ></img>
          </a>
          <a href={props.demoLink}>
            <img
              className="project-card-link"
              src={linkIcon}
              alt="link to demo icon"
            ></img>
          </a>
        </div>
      </div>
      <p>{props.description}</p>
    </>
  );
};

export default Project;
