import React from "react";
import "./Project.css";
import gitLogo from "../assets/header-img/github.svg";
import linkIcon from "../assets/Project-card-img/link-45deg.svg";

const Project = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <img src={props.img}></img>
      <div className="subtitle">
        <h4>Description</h4>
        <div className="link-logos">
          <img src={gitLogo}></img>
          <img src={linkIcon}></img>
        </div>
      </div>
      <p>{props.description}</p>
    </>
  );
};

export default Project;
