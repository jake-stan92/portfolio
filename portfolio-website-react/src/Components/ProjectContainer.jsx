import React, { useState } from "react";
import Project from "../Components/Project";
import "./ProjectContainer.css";
import stravaMobile from "../assets/Project-images/StravaJS mobile.png";
import stravaDesktop from "../assets/Project-images/StravaJS desktop.png";
import timeZoneCalcImg from "../assets/Project-images/TimeZone-calc-oneSize.png";
import rightArrow from "../assets/Project-card-img/arrow-right.svg";
import leftArrow from "../assets/Project-card-img/arrow-left.svg";

export default function ProjectContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      title: "StravaJS",
      mobileImg: stravaMobile,
      desktopImg: stravaDesktop,
      gitLink: "https://github.com/jake-stan92/StravaJS2.0",
      demoLink: "https://stravajs.netlify.app/",
      description:
        "As a keen activity tracker and a lover of data, I created StravaJS to collate and display Strava activity data in a clear and concise way. The idea was initially born when a small group of friends decided to complete a 10k per week running challenge in 2023. The app has gone through 3 iterations to be where it is currently. Using the Strava API, the app collects the activities of given athletes and then filters results accordingly.",
    },
    {
      title: "TimeZone Calc",
      mobileImg: timeZoneCalcImg,
      desktopImg: timeZoneCalcImg,
      gitLink: "https://github.com/jake-stan92/timezone/",
      demoLink: "https://github.com/jake-stan92/timezone/",
      description:
        "TimeZone calc was developed to help a relative manage their meetings with global clients. Entering a specific time and timezone produces relative times in other timezones. Using Python and Tkinter (as a GUI), the app has been packaged into a .exe. The app can be downloaded and used from the GitHub repo. A video demo is also available at the bottom of the ReadME.",
    },
  ];
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="project-container">
      <h2>Projects</h2>
      <div className="carousel">
        <div className="project-card">
          <Project
            title={projects[activeIndex].title}
            mobileImg={projects[activeIndex].mobileImg}
            desktopImg={projects[activeIndex].desktopImg}
            gitLink={projects[activeIndex].gitLink}
            demoLink={projects[activeIndex].demoLink}
            description={projects[activeIndex].description}
          />
        </div>
        <div className="carousel-buttons">
          <button
            onClick={prevSlide}
            className="carousel-button"
            id="prev-button"
            aria-label="Previous Button"
          >
            <img src={leftArrow} alt="left arrow"></img>
          </button>
          <button
            onClick={nextSlide}
            className="carousel-button"
            id="next-button"
            aria-label="Next Button"
          >
            <img src={rightArrow} alt="right arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
