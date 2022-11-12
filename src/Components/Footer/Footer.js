import React from "react";
import "./Footer.scss";
import Github from "../../Assets/github-white.png";
import Linkedin from "../../Assets/linkedin-white.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="social__container">
        <div className="social__icon">
          <a href="">
            <img src={Github} />
          </a>
        </div>
        <div className="social__icon">
          <a href="">
            <img src={Linkedin} />
          </a>
        </div>
      </div>
      <div className="credits">
        <p>
          <span>Ⓒ</span> CRISTIAN THEODOR PETRE
        </p>
      </div>
    </div>
  );
};

export default Footer;
