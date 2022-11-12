import React from "react";
import "./ProjectTeaser.scss";
import FindMore from "../../Assets/find-more.png";
import Github from "../../Assets/github-round.png";
import { Link } from "react-router-dom";
import utils from "../../Utils/utils.js";
import ProjectTeaserImage from "../../Assets/compare.png";

const ProjectTeaser = () => {
  return (
    <div className="project__teaser__container">
      <div className="project__teaser__image">
        <img src={ProjectTeaserImage} alt="Teaser" />
      </div>
      <div className="project__teaser__description">
        <p className="project__teaser__description__title">Project Name</p>
        <p className="project__teaser__description__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <div className="project__teaser__buttons">
          <div className="project__teaser__button">
            {/*<Link to={`/project/${utils.nameToId(project_name)}`}>*/}
            <Link to={`/project/id`}>
              <img src={FindMore} alt="Find more" />
            </Link>
          </div>
          <div className="project__teaser__button">
            <a href="https://github.com/TheodorCristian/recipes-app">
              <img src={Github} alt="Find more" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTeaser;
