import React from "react";
import "./Header.css";
import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import resumeLogo from "../assets/file-earmark-person-fill.svg";
import avatar from "../assets/person-circle.svg";

const Header = () => {
  return (
    <div className="header">
      <img id="avatar-img" src={avatar}></img>
      <div className="socials">
        <img src={githubLogo}></img>
        <img src={linkedInLogo}></img>
        <img src={resumeLogo}></img>
      </div>
      <h1>
        Jake Stanier<br></br>Junior Web Developer
      </h1>
    </div>
  );
};

export default Header;
