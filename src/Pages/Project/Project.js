import React, { useState, useEffect } from "react";
import "./Project.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { db } from "../../Utils/firebase.config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "video-react/dist/video-react.css";
import { Carousel } from "react-responsive-carousel";
import { Player, BigPlayButton } from "video-react";

const Project = () => {
  const [project, setProject] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [images, setImages] = useState([]);
  let { id } = useParams();

  const getProject = async () => {
    const docRef = doc(db, "project", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProject(docSnap.data());
      setImages(docSnap.data().project_images);
      docSnap.data().project_technologies.forEach((item) => {
        getTechnologies(item);
      });
      console.log(technologies);
    } else {
      throw "No such document!";
    }
  };

  const getTechnologies = async (technology) => {
    const docRef = doc(db, "technologies", technology.toLowerCase());
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTechnologies((current) => [...current, docSnap.data()]);
    } else {
      throw "No such document!";
    }
  };

  useEffect(() => {
    getProject();
  }, []);
  return (
    <div className="project__page__container">
      <Navbar />
      <div className="project__page__introduction">
        <h3 className="right">{project.project_name}</h3>
      </div>
      <div className="project__page__content">
        <div className="row">
          <div className="project__page__description">
            <p>{project.project_description}</p>
          </div>
          <div className="project__page__demo">
            <img
              src={project.project_demo}
              alt={`${project.project_name} demo`}
            />
          </div>
        </div>
        <div className="row tehnology__row">
          <div className="project__page__technologies">
            {technologies.map((technology) => {
              return (
                <div className="technology__container">
                  <img
                    className="technology__image"
                    src={technology.technology_image}
                  />
                  <p className="technology__name">
                    {technology.technology_name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="project__page__images">
            <Carousel>
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={image} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
