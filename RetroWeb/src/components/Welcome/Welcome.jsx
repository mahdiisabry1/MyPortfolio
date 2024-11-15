import "./Welcome.css";
import hacker from "../../assets/images/hackertheme.png";
// import codingbg from "../../assets/images/sourcecode.png";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    const container = document.getElementById("binary-rain-container");

    // Function to create a fixed number of binary elements
    const createBinaryRain = () => {
      for (let i = 0; i < 12; i++) {
        // 10 binary elements
        const binaryElement = document.createElement("div");
        binaryElement.classList.add("binary");
        binaryElement.innerText = Math.random() > 0.5 ? "0" : "1"; 

        binaryElement.style.left = `${Math.floor(Math.random() * 100)}vw`;
        binaryElement.style.animationDuration = `${Math.random() * 5 + 7}s`; 

        container.appendChild(binaryElement);
      }
    };

    // Call the function to create binary rain once
    createBinaryRain();
  }, []);

  return (
    <>
      <div className="main-banner">
        <div className="cybersecurity">
          <div className="backgroundImg">
            {/* <img src={codingbg} alt="" /> */}
            <div id="binary-rain-container"></div>
          </div>
          <div className="banner">
            <div className="wordstyle">
              <img src={hacker} alt="" />
              <h1>
                <span className="firstscale">К</span>
                <span className="secondscale">Р</span>
                <span className="normalscale">А</span>
                <span className="normalscale">С</span>
                <span className="normalscale">Н</span>
                <span className="normalscale">А</span>
                <span className="normalscale">Я</span>
                <span className="normalscale">Ш</span>
                <span className="normalscale">Л</span>
                <span className="normalscale">Я</span>
                <span className="secondscale">П</span>
                <span className="firstscale">А</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
