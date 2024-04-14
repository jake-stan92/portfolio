import React, { useState } from "react";
import Project from "../Components/Project";
import "./ProjectContainer.css";
import img1 from "../assets/Nav-img/pen.svg";
import img2 from "../assets/Nav-img/envelope.svg";
import rightArrow from "../assets/Project-card-img/arrow-right.svg";
import leftArrow from "../assets/Project-card-img/arrow-left.svg";

export default function ProjectContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      title: "StravaJS",
      img: img1,
      gitLink: "",
      demoLink: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      title: "TimeZone Calc",
      img: img2,
      gitLink: "",
      demoLink: "",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
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
            img={projects[activeIndex].img}
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
