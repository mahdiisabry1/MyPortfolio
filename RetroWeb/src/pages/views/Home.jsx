import Description from "../../components/Description/Description";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Status from "../../components/Status/Status";
import Tag from "../../components/Tag/Tag";
import "../styles/Home.css";
import Welcome from "../../components/Welcome/Welcome";
// import Footer from "../../components/Footer/Footer";
import Res from "../../components/Responsive/Res";
import Slogan from "../../components/Slogan/Slogan";

// import Loader from "../../components/Loader/Loader";

const Home = () => {
  return (
    <>
      <div className="rotate-your-device">
        <Res />
      </div>
      <div className="display">
        <Navbar />
        <div className="displayMedia">
          <Tag />
          <Welcome />
          <Status />
        </div>
        <Header />
        <Description />
        <Slogan />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
