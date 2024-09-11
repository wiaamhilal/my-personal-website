import React from "react";
import "./Home.css";
import companyImg from "../imgs/Capture_2023_09_17_04_08_57_725.png";
import arc from "../imgs/arc.png";
import blue from "../imgs/Capture_2023_09_17_04_17_14_507.png";
import onlineStore from "../imgs/onlineStore.png";
import arrow from "../imgs/arrow.png";
import linkden from "../imgs/linkden.png";
import realState from "../imgs/realState.png";
const Home = () => {
  return (
    <div className="Home">
      <div className="intro-page">
        <h1 className="lh-lg">
          Wellcome to<span className="title"> Weaam Hilal</span> website
        </h1>
        <p>
          Elevate your online presence with expert{" "}
          <span className="title">web development</span>. Let's build your
          digital success story together.
        </p>
        <img className="main-img first-img" alt="arrow" src={arrow} />
        <img className="main-img second-img" alt="arrow" src={arrow} />
      </div>
      <h2 className="">My Projects :</h2>
      <div className="greadieant"></div>
      <div className="projects">
        <div className="">
          <div className="row">
            {/* <div className="proj-hold col-12 col-sm-6 col-md-4">
              <a href="https://weaam-media.web.app">
                <span>Visit</span>
                {/* <span className=" under-b proj-under">
                  this application is under build right now...
                </span>
                <span className="out proj-under">
                  <span className="circle"> </span>
                </span> */}
            {/* <img
                  className="proj-img img-under-build"
                  alt="proj"
                  src={linkden}
                />
              </a>
            </div> */}
            <div className="proj-chail col-12 col-sm-6">
              <span className="title-soc">1- Online store :</span>
              <div className="proj-hold">
                <a href="https://wiaam-store.web.app/">
                  <span>Visit</span>
                  <img className="proj-img" alt="proj" src={realState} />
                </a>
              </div>
            </div>
            <div className="proj-chail col-12 col-sm-6 ">
              <span className="title-soc">2- Amazon Clone :</span>
              <div className="proj-hold">
                <a href="https://fir-b9b5e.web.app/">
                  <span>Visit</span>
                  <img className="proj-img" alt="proj" src={onlineStore} />
                </a>
              </div>
            </div>
            <div className="proj-chail col-12 col-sm-6 ">
              <span className="title-soc">
                3- Social media application (version 1) :
              </span>
              <div className="proj-hold">
                <a href="https://weaam-media.web.app">
                  <span>Visit</span>
                  <img
                    className="proj-img img-under-build"
                    alt="proj"
                    src={linkden}
                  />
                </a>
              </div>
            </div>
            <div className="proj-chail col-12 col-sm-6 ">
              <span className="title-soc">4- Company website :</span>
              <div className="proj-hold">
                <a href="https://wiaamhilal.github.io/tempate-4/">
                  <span>Visit</span>
                  <img className="proj-img" alt="proj" src={companyImg} />
                </a>
              </div>
            </div>
            <div className="proj-chail col-12 col-sm-6 ">
              <span className="title-soc">5- Personal website :</span>
              <div className="proj-hold">
                <a href="https://wiaamhilal.github.io/my-project/">
                  <span>Visit</span>
                  <img className="proj-img" alt="proj" src={arc} />
                </a>
              </div>
            </div>
            <div className="proj-chail col-12 col-sm-6">
              <span className="title-soc">6- Personal website :</span>
              <div className="proj-hold">
                <a href="https://wiaamhilal.github.io/second-tmep/">
                  <span>Visit</span>
                  <img className="proj-img" alt="proj" src={blue} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="footer">
        This template is made by{" "}
        <span className="title-footer">Weaam Hilal</span> @2023
      </span>
    </div>
  );
};

export default Home;
