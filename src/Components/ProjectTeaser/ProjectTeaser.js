import React from "react";
import "./ProjectTeaser.scss";
import FindMore from "../../Assets/find-more.png";
import Github from "../../Assets/github-round.png";
import Live from "../../Assets/live.png";
import { Link } from "react-router-dom";
import ProjectTeaserImage from "../../Assets/compare.png";

const ProjectTeaser = ({ name, description, github, live, teaser, url }) => {
  return (
    <div className="project__teaser__container">
      <div className="project__teaser__image">
        <img src={teaser} alt="Teaser" />
      </div>
      <div className="project__teaser__description">
        <p className="project__teaser__description__title">{name}</p>
        <p className="project__teaser__description__description">
          {description}
        </p>
        <div className="project__teaser__buttons">
          <div className="project__teaser__button">
            <Link to={`/react-portofolio/project/${url}`}>
              <img src={FindMore} alt="Github" />
            </Link>
          </div>
          <div className="project__teaser__button">
            <a href={github}>
              <img src={Github} alt="Github" />
            </a>
          </div>
          <div className="project__teaser__button">
            <a href={live}>
              <img src={Live} alt="Live" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTeaser;
