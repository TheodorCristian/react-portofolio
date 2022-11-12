import React from "react";
import "./Homepage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProjectTeaser from "../../Components/ProjectTeaser/ProjectTeaser";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <div className="homepage__section__one">
        <Navbar />
        <div className="introduction__container">
          <h1>THEODOR PETRE</h1>
          <p>
            <span>CREATIVE</span> LEGO BUILDER, <br />
            <span>DEDICATED</span> F1 FAN,
            <br />
            <span> PASSIONED FULL-STACK DEVELOPER</span>
          </p>
        </div>
      </div>
      <div className="homepage__section__two">
        <div className="section__two__intreoduction">
          <h3 className="left">Projects</h3>
        </div>
        <div className="project__section__container">
          <ProjectTeaser />
          <ProjectTeaser />
          <ProjectTeaser />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
