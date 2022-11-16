import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Github from "../../Assets/github.png";
import LinkedIn from "../../Assets/linkedin.png";
import Logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar__container">
        <div className="logo__container">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="social__container">
          <div className="social__icon">
            <a href="https://github.com/TheodorCristian">
              <img src={Github} alt="Github Logo" />
            </a>
          </div>
          <div className="social__icon">
            <a href="https://www.linkedin.com/in/theodor-petre-b49a5a198">
              <img src={LinkedIn} alt="LinkedIn Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
