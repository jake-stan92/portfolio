import React from "react";
import "./Header.css";
import githubLogo from "../assets/header-img/github.svg";
import linkedInLogo from "../assets/header-img/linkedin.svg";
import resumeLogo from "../assets/header-img/file-earmark-person-fill.svg";
import avatar from "../assets/header-img/person-circle.svg";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <img id="avatar-img" src={avatar} alt="profile picture"></img>
        <div className="socials">
          <a href="https://github.com/jake-stan92" target="_blank">
            <img src={githubLogo} alt="github logo"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/jake-stanier-017267283/"
            target="_blank"
          >
            <img src={linkedInLogo} alt="linked in logo"></img>
          </a>

          <img src={resumeLogo} alt="download resume"></img>
        </div>
        <h1>
          Jake Stanier<br></br>Junior Web Developer
        </h1>
      </div>
    </div>
  );
};

export default Header;
