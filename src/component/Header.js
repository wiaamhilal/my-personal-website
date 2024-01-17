import React from "react";
import {Link} from "react-router-dom";
import logo from "../imgs/wiaam logo.jpg";
import whats from "../imgs/whatsapp.png";
import linkedin from "../imgs/linkedin-2166.png";
import github from "../imgs/github-logo.png";
import email from "../imgs/email.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header sticky-top">
      <Link to="/" className="logo">
        <img alt="logo" className="logo-img" src={logo} />
      </Link>
      <div>
        <div className="social">
          <a href="http://wa.me/+971525268280" className="whats">
            <img alt="whats" className="whats-img" src={whats} />
          </a>
          <a
            href="https://www.linkedin.com/in/wiaam-hilal-9b3776281/"
            className="linken"
          >
            <img alt="linken" className="linkedin-img" src={linkedin} />
          </a>
          <a href="https://github.com/wiaamhilal" className="github">
            <img alt="github" className="github-img" src={github} />
          </a>
          <Link to="/email" className="email">
            <img alt="email" className="email-img" src={email} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
