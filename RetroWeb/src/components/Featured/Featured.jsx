/* eslint-disable no-unused-vars */
import "../Featured/Featured.css";
import cv from "../../assets/docs/SECV.pdf"

// eslint-disable-next-line react/prop-types
const Featured = ({ isFiltered }) => {
  
  return (
    <>
      <div className="featured container">
        <div className="flex retro-container">
          <div className="retro-card">
            <h2 className="retro-heading">Certifications</h2>
            <ul className="retro-list">
              <li>Java Developer Masterclass</li>
              <li>Microsoft Certifications</li>
              <li>HackerRank</li>
            </ul>
          </div>

          <div className="retro-section">
            <h2 className="retro-heading">Tech Stack</h2>
            <div className="skill-labels">
              <div className="skill-labels">
                <span className="skill-label" data-tech="mongodb">
                  MongoDB
                </span>
                <span className="skill-label" data-tech="express">
                  ExpressJS
                </span>
                <span className="skill-label" data-tech="react">
                  ReactJS
                </span>
                <span className="skill-label" data-tech="node">
                  NodeJS
                </span>
                <span className="skill-label" data-tech="next">
                  NextJS
                </span>
                <span className="skill-label" data-tech="csharp">
                  C#
                </span>
                <span className="skill-label" data-tech="net">
                  .NET
                </span>
                <span className="skill-label" data-tech="angular">
                  Angular
                </span>
                <span className="skill-label" data-tech="java">
                  Java
                </span>
                <span className="skill-label" data-tech="spring">
                  SpringBoot
                </span>
                <span className="skill-label" data-tech="python">
                  Python
                </span>
                <span className="skill-label" data-tech="r">
                  R
                </span>
                <span className="skill-label" data-tech="ml">
                  Machine Learning
                </span>
                <span className="skill-label" data-tech="ai">
                  AI
                </span>
                <span className="skill-label" data-tech="robotics">
                  Robotics
                </span>
                <span className="skill-label" data-tech="matlab">
                  Matlab
                </span>
              </div>
            </div>
          </div>

          <div className="retro-section">
            <h2 className="retro-heading">Resume</h2>
            <a
              href={cv}
              type="application/pdf"
              target="blank"
              className="retro-button"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
