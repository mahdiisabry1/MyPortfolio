/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./Description.css";
import leftImg from "../../assets/images/v55.png";
import rightImg from "../../assets/images/v34.png";
import techImg from "../../assets/images/techstack.png";
import reacticon from "../../assets/images/reacticon.png";
import nexticon from "../../assets/images/next.png";
import wordpressicon from "../../assets/images/wordpress.png";
import Angularicon from "../../assets/images/Angular.png";
import Elementoricon from "../../assets/images/Elementor.png";
import webflowicon from "../../assets/images/webflow.png";
import pythonicon from "../../assets/images/pythonp.png";
import javaicon from "../../assets/images/java.png";
import javascripticon from "../../assets/images/JavaScript-logo.png";
import mysqlicon from "../../assets/images/mysql.png";
import Kubernetes from "../../assets/images/kubernets.png";

const Description = () => {
  return (
    <div className="profile-container container">
      <div className="profile-desc">
        <div className="leftRightImg">
          <img src={leftImg} alt="" />
        </div>
        <div className="middle-desc">
          <div className="filterChange">
            <button>click</button>
          </div>
          <div className="desc-posts">
            <div className="post firstPost">
              <div className="imgcover">
                <img src={techImg} alt="" />
              </div>
              <div className="text-overlay">
                <h3 className="profile-sm">
                  Delving into the complexities of the web, with a focus on
                  understanding the internet’s surface, deep, and dark layers,
                  as well as its underlying networking structures.
                </h3>
                <h3 className="academic-prof">
                  <span className="computerScience">Computer Science </span>
                  Student Exploring Cybersecurity, Robotics, AI and Machine
                  Learning.
                </h3>
                <h3 className="profile-tags">
                  Hobbies : Islam | Politics | History.
                </h3>
              </div>
            </div>
            <div className="post secondPost">
              <div>
                <h3>Informatics institute of technology</h3>
                <h3>University of westminster</h3>
                <h3>Expected 2026</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="leftRightImg rightImg">
          <img src={rightImg} alt="" />
        </div>
      </div>
      <div className="skills-container">
        <div className="techstack-side">
          <div className="frontend frontandback">
            <h3>FRONTEND / Designing</h3>
            <div className="fronendImgStack TechImgStack">
              <img
                src={reacticon}
                alt="React"
                className="reactRotation filterproperty"
              />
              <img src={nexticon} alt="Next" className="nextIcon " />
              <img
                src={Angularicon}
                alt="Javascript"
                className="filterproperty"
              />
              <img src={wordpressicon} alt="React" className="filterproperty" />
              <img src={Elementoricon} alt="Vue" className="filterproperty" />
              <img src={webflowicon} alt="Angular" className="filterproperty" />
            </div>
          </div>
          <div className="backend frontandback">
            <h3>BACKEND / sd</h3>
            <div className="backendImgStack TechImgStack">
              <img
                src={javaicon}
                alt="Java"
                className="javaRotation filterproperty"
              />
              <img
                src={pythonicon}
                alt="python"
                className="pythonIcon filterproperty"
              />
              <img
                src={javascripticon}
                alt="Javascript"
                className="filterproperty"
              />
              <img src={wordpressicon} alt="React" className="filterproperty" />
              <img src={Elementoricon} alt="Vue" className="filterproperty" />
              <img src={webflowicon} alt="Angular" className="filterproperty" />
            </div>
          </div>
        </div>
        <div className="services-container">
          this for the sevicese container
        </div>
        <div className="techstack-side">
          <div className="frontend frontandback">
            <h3>database</h3>
            <div className="fronendImgStack TechImgStack">
              <img
                src={mysqlicon}
                alt="mysql"
                className="mysqlRotation filterproperty"
              />
              <img src={nexticon} alt="Next" className="nextIcon" />
              <img
                src={Angularicon}
                alt="Javascript"
                className="filterproperty"
              />
              <img src={wordpressicon} alt="React" className="filterproperty" />
              <img src={Elementoricon} alt="Vue" className="filterproperty" />
              <img src={webflowicon} alt="Angular" className="filterproperty" />
            </div>
          </div>
          <div className="backend frontandback">
            <h3>other tools</h3>
            <div className="backendImgStack TechImgStack">
              <img
                src={reacticon}
                alt="React"
                className="reactRotation filterproperty"
              />
              <img src={nexticon} alt="Next" className="nextIcon " />
              <img
                src={Angularicon}
                alt="Javascript"
                className="filterproperty"
              />
              <img
                src={Kubernetes}
                alt="React"
                className=" reactRotation filterproperty"
              />
              <img src={Elementoricon} alt="Vue" className="filterproperty" />
              <img src={webflowicon} alt="Angular" className="filterproperty" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
