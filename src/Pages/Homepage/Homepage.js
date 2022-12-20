import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProjectTeaser from "../../Components/ProjectTeaser/ProjectTeaser";
import { db } from "../../Utils/firebase.config";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { nameToId } from "../../Utils/utils";

const Homepage = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "project"));
    querySnapshot.forEach((doc) => {
      setProjects((current) => [...current, doc.data()]);
      console.log(doc.id, " => ", doc.data());
    });

    // const docRef = doc(db, "project", "face-detector");
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   setProjects((current) => [...current, docSnap.data()]);
    // } else {
    //   throw "No such document!";
    // }
  };

  useEffect(() => {
    getProjects();
  }, []);

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
        <div className="section__two__introduction">
          <h3 className="left">Projects</h3>
        </div>
        <div className="project__section__container">
          {projects.map((item, index) => {
            return (
              <ProjectTeaser
                name={item.project_name}
                description={item.project_description}
                github={item.project_github_code}
                live={item.project_live}
                url={nameToId(item.project_name)}
                teaser={item.project_teaser_image}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
