import { useEffect } from "react";
import "../PreLoader/PreLoader.css";
import { preLoaderAnim } from "../../animation/PreLoader.js";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Blogger,</span>
        <span>Vibe.</span>
      </div>
    </div>
  );
};

export default PreLoader;
