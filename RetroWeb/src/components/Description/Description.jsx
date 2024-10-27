/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./Description.css";
import leftImg from "../../assets/images/v55.png";
import rightImg from "../../assets/images/v34.png";
import techImg from "../../assets/images/techstack.png";

const Description = () => {
  return (
    <div className="profile-container container">
      <div className="profile-desc">
        <div className="leftRightImg">
          <img src={leftImg} alt="" />
        </div>
        <div className="middle-desc">
          <div className="ImageEye">hello</div>
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
                  Student Discovering Cybersecurity, Robotics, AI and Machine
                  Learning.
                </h3>
                <h3 className="profile-tags">
                  Exploring Islam | Politics | History.
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Description;
