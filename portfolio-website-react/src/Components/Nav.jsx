import React from "react";
import "./Nav.css";
import penImg from "../assets/Nav-img/pen.svg";
import flaskImg from "../assets/Nav-img/flask-chemistry-svgrepo-com.svg";
import mailImg from "../assets/Nav-img/envelope.svg";

const Nav = () => {
  return (
    <div className="nav-links">
      <div className="nav-link">
        <img className="nav-link-img" src={penImg}></img>
        <p className="nav-link-name">About</p>
      </div>
      <div className="nav-link">
        <img className="nav-link-img" src={flaskImg}></img>
        <p className="nav-link-name">Projects</p>
      </div>
      <div className="nav-link">
        <img className="nav-link-img" src={mailImg}></img>
        <p className="nav-link-name">Contact</p>
      </div>
    </div>
  );
};

export default Nav;
