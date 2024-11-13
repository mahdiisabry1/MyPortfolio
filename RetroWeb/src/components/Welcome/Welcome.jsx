import "./Welcome.css";
// import comicbg from "../../assets/images/comicbg.png";
import hacker from"../../assets/images/hackertheme.png"

const Welcome = () => {
  return (
    <>
      <div className="main-banner">
        <div className="banner">
          <div className="headline">
            <img src={hacker} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
