import { useState } from "react";
import "./Description.css";
import leftImg from "../../assets/images/v55.png";
import rightImg from "../../assets/images/v34.png";
import palestine from "../../assets/icons/freePalestine.jpg";
import vintageschool from "../../assets/images/vintageschool.jpg";
import DallE from "../../assets/icons/DallE.webp";
import uowicon from "../../assets/icons/UOW.png";
import Featured from "../Featured/Featured";
import Palestine from "./Palestine";

const Description = () => {
  const [isFiltered, setIsFiltered] = useState(true);

  const handleCheckboxChange = () => {
    setIsFiltered(!isFiltered);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle visibility state
  };

  const handleHideClick = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <div className="profile-container container">
      <div className="profile-desc">
        <div className={`information ${isVisible ? "show" : ""}`}>
          <div
            onClick={handleHideClick}
            style={{
              position: "absolute",
              fontSize: "40px",
              paddingLeft: "20px",
            }}
          >
            <span className="hideMap">X</span>
          </div>
          <div className="palestine-map">
            <Palestine />
          </div>
          <div className="palestine-about">Statistics</div>
        </div>
        <div className={`leftRightImg ${isFiltered ? "filterproperty" : ""}`}>
          <img src={leftImg} alt="" />
        </div>
        <div className="middle-desc">
          <div className="lightup-btn">
            <input
              id="checkbox"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label className="button" htmlFor="checkbox">
              <span className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                  className="btn-svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M17.35 12.7901C17.1686 12.7907 16.9935 12.7229 16.86 12.6001C15.5322 11.411 13.8124 10.7534 12.03 10.7534C10.2476 10.7534 8.52779 11.411 7.19999 12.6001C7.12649 12.6658 7.04075 12.7164 6.94767 12.749C6.85459 12.7816 6.756 12.7955 6.65755 12.7899C6.55909 12.7843 6.4627 12.7594 6.37389 12.7165C6.28508 12.6736 6.2056 12.6137 6.13999 12.5401C6.0109 12.3892 5.94595 12.1939 5.95904 11.9958C5.97212 11.7977 6.06219 11.6126 6.20999 11.4801C7.80752 10.0423 9.88072 9.2467 12.03 9.2467C14.1793 9.2467 16.2525 10.0423 17.85 11.4801C17.9978 11.6126 18.0879 11.7977 18.1009 11.9958C18.114 12.1939 18.0491 12.3892 17.92 12.5401C17.8469 12.6181 17.7586 12.6806 17.6606 12.7236C17.5627 12.7665 17.457 12.7892 17.35 12.7901Z"
                      fill=""
                    ></path>{" "}
                    <path
                      d="M20 10C19.811 9.99907 19.6292 9.92777 19.49 9.80002C17.4685 7.87306 14.7828 6.79812 11.99 6.79812C9.19719 6.79812 6.51153 7.87306 4.48999 9.80002C4.42116 9.88186 4.33563 9.94804 4.23912 9.99411C4.14262 10.0402 4.03738 10.0651 3.93046 10.0672C3.82354 10.0692 3.71742 10.0484 3.61921 10.0061C3.521 9.96375 3.43298 9.90092 3.36105 9.82179C3.28911 9.74267 3.23493 9.64907 3.20214 9.54729C3.16934 9.4455 3.15869 9.33788 3.17091 9.23164C3.18312 9.1254 3.21791 9.023 3.27294 8.93131C3.32798 8.83962 3.40198 8.76076 3.48999 8.70002C5.78577 6.52533 8.82774 5.31329 11.99 5.31329C15.1522 5.31329 18.1942 6.52533 20.49 8.70002C20.5994 8.80134 20.6761 8.93298 20.7103 9.07811C20.7446 9.22324 20.7348 9.37527 20.6822 9.5148C20.6296 9.65433 20.5366 9.77502 20.4151 9.86145C20.2936 9.94787 20.1491 9.99612 20 10Z"
                      fill=""
                    ></path>{" "}
                    <path
                      d="M9.38 15.64C9.26356 15.64 9.14873 15.6129 9.04459 15.5608C8.94044 15.5088 8.84986 15.4332 8.78 15.34C8.7196 15.2617 8.67551 15.1721 8.65032 15.0765C8.62513 14.9809 8.61936 14.8812 8.63334 14.7834C8.64732 14.6855 8.68078 14.5914 8.73173 14.5067C8.78268 14.4219 8.8501 14.3483 8.93 14.29C9.81277 13.6145 10.8934 13.2485 12.005 13.2485C13.1166 13.2485 14.1972 13.6145 15.08 14.29C15.1588 14.3491 15.2252 14.4232 15.2754 14.5079C15.3255 14.5926 15.3585 14.6865 15.3725 14.784C15.3864 14.8815 15.381 14.9807 15.3565 15.0762C15.3321 15.1716 15.2891 15.2612 15.23 15.34C15.1091 15.497 14.9316 15.6005 14.7355 15.6285C14.5394 15.6565 14.34 15.6068 14.18 15.49C13.5548 15.014 12.7908 14.7561 12.005 14.7561C11.2192 14.7561 10.4551 15.014 9.83 15.49C9.69921 15.5855 9.54193 15.6379 9.38 15.64Z"
                      fill=""
                    ></path>{" "}
                    <path
                      d="M12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18C11.25 17.8011 11.329 17.6103 11.4697 17.4697C11.6103 17.329 11.8011 17.25 12 17.25C12.1989 17.25 12.3897 17.329 12.5303 17.4697C12.671 17.6103 12.75 17.8011 12.75 18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75Z"
                      fill=""
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </label>
          </div>
          <div
            className={`careerBanner ${isFiltered ? "filterproperty" : ""}`}
            onClick={handleClick}
          >
            <div className="imageBanner">
              <img src={palestine} alt="" />
            </div>
          </div>
          <div className="desc-posts">
            <div
              className={`post firstPost ${isFiltered ? "filterproperty" : ""}`}
            >
              <div className="comcicart">
                <img src={DallE} alt="" />
                <h2
                  className="descritpion-rotate"
                  style={{ borderBottom: "8px solid" }}
                >
                  Description
                </h2>
                <div className="text-overlay">
                  <h3 className="profile-sm">
                    Delving into the complexities of the web, with a focus on
                    understanding the internet’s surface, deep, and dark layers,
                    as well as its underlying networking structures.
                  </h3>
                  <h3 className="academic-prof">
                    Computer Science Student Exploring Cybersecurity, Robotics,
                    AI and Machine Learning.
                  </h3>
                  <h3 className="profile-tags">Hobbies : GeoPolitics</h3>
                </div>
              </div>
            </div>
            <div
              className={`post secondPost ${
                isFiltered ? "filterproperty" : ""
              }`}
            >
              <div className="comcicart">
                <img src={vintageschool} alt="" />
                <h2
                  className="descritpion-rotate"
                  style={{ borderBottom: "8px solid" }}
                >
                  Education
                </h2>
                <div className="text-overlay">
                  <h3>Informatics institute of technology</h3>
                  <h3>University of westminster</h3>
                  <h3>Expected 2026</h3>
                  <div
                    className={`uowImg ${isFiltered ? "filterproperty" : ""}`}
                  >
                    <img
                      src={uowicon}
                      alt=""
                      style={{ objectFit: "contain", position: "relative" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`leftRightImg rightImg ${
            isFiltered ? "filterproperty" : ""
          }`}
        >
          <img src={rightImg} alt="" />
        </div>
      </div>
      <Featured isFiltered={isFiltered} />
      <div className="skill-container container">
        <div className="techstackchoose">
          <div className="brutalist-card">
            <div className="brutalist-card__header">
              <div className="brutalist-card__alert">AI Project</div>
              <div className="currentStatus">
                <h5>Site on progress</h5>
              </div>
            </div>
            <div className="brutalist-card__message">
              This is a brutalist card with a very angry button. Proceed with
              caution, youve been warned.
            </div>
            <div className="brutalist-card__actions">
              <a
                className="brutalist-card__button brutalist-card__button--mark"
                href="#"
              >
                Github Repo
              </a>
              <a
                className="brutalist-card__button brutalist-card__button--read"
                href="#"
              >
                Demo
              </a>
            </div>
            <div className="brutalist-card__techstack">deeplearning</div>
          </div>
          <div className="brutalist-card">
            <div className="brutalist-card__header">
              <div className="brutalist-card__alert">YelpCamp</div>
              <div className="currentStatus">
                <h5>Site not yet deployed</h5>
              </div>
            </div>
            <div className="brutalist-card__message">
              This is a brutalist card with a very angry button. Proceed with
              caution, youve been warned.
            </div>
            <div className="brutalist-card__actions">
              <a
                className="brutalist-card__button brutalist-card__button--mark"
                href="#"
              >
                Github Repo
              </a>
              <a
                className="brutalist-card__button brutalist-card__button--read"
                href="#"
              >
                Demo
              </a>
            </div>
            <div className="brutalist-card__techstack">
              React + Springboot + MySQL
            </div>
          </div>
          <div className="brutalist-card">
            <div className="brutalist-card__header">
              <div className="brutalist-card__alert">CodeLingo</div>
              <div className="currentStatus">
                <h5>Site not yet deployed</h5>
              </div>
            </div>
            <div className="brutalist-card__message">
              This is a brutalist card with a very angry button. Proceed with
              caution, youve been warned.
            </div>
            <div className="brutalist-card__actions">
              <a
                className="brutalist-card__button brutalist-card__button--mark"
                href="#"
              >
                Github Repo
              </a>
              <a
                className="brutalist-card__button brutalist-card__button--read"
                href="#"
              >
                Demo
              </a>
            </div>
            <div className="brutalist-card__techstack">MERN + NextJs</div>
          </div>
          <div className="brutalist-card">
            <div className="brutalist-card__header">
              <div className="brutalist-card__alert">MindForge</div>
              <div className="currentStatus">
                <h5>Site is offline</h5>
              </div>
            </div>
            <div className="brutalist-card__message">
              E-learning platform where learners can create technical blogs and
              Mindmaps to show case their knowledge
            </div>
            <div className="brutalist-card__actions">
              <a
                className="brutalist-card__button brutalist-card__button--mark"
                href="https://github.com/mahdiisabry1/SDGP-Repository"
                target="_blank"
              >
                Github Repo
              </a>
              <a
                className="brutalist-card__button brutalist-card__button--read"
                href="https://mindforge-platform.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
            </div>
            <div className="brutalist-card__techstack">MERN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
