import { useEffect } from "react";
import "./Loader.css";
import { reveal } from "../../assets/animation/Preloader";

const Loader = () => {
  

  useEffect(() => {
    reveal();
  }, []);

  return (
    <>
      <div className="appContainer">
        <div className="loading">
          <div className="follow"></div>
        </div>
        <div className="contentQuote">
          <p className="title-lines">MOHOMAD MAHDI</p>
          <p className="title-lines">Presents</p>
        </div>
      </div>
    </>
  );
};

export default Loader;
