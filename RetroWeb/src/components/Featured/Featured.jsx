/* eslint-disable no-unused-vars */
import React from "react";
import "../Featured/Featured.css";
import blogImage from "../../assets/images/focus.jpg";
import camping from "../../assets/images/camping.jpg";
import gitIm from "../../assets/images/430944.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="elems">
        <div className="elemRL">
          <div className="elem1Img">
            <img src={blogImage} alt="ONprocess" />
          </div>
          <h2>
            MyBlog | Read <span className="currentStatus">NEW</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            veniam quos ducimus fugit. Molestiae repudiandae ea corporis sunt.
            At, adipisci?
          </p>
        </div>
      </div>
      <div className="elems">
        <div className="elemMid">
          <a
            href="https://github.com/mahdiisabry1?tab=repositories"
            target="_blank"
            className="gitHead"
          >
            ALL PROJECTS !
          </a>
          <h3>A Featured Selections - The latest work of the last years</h3>
          <h4>Tap for the Github repo</h4>
        </div>
      </div>
      <div className="elems">
        <div className="elemRL">
          <div className="elem3Img">
            <img src={camping} alt="ONprocess" />
          </div>
          <h2 className="gitHead">
            CampSite | MERN <span className="currentStatus">ONProgress</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            adipisci soluta doloremque officiis incidunt voluptas ipsam
            necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
