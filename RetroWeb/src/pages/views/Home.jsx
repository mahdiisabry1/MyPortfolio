import Description from "../../components/Description/Description";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Status from "../../components/Status/Status";
import Tag from "../../components/Tag/Tag";
import "../styles/Home.css";
import Welcome from "../../components/Welcome/Welcome";
import Footer from "../../components/Footer/Footer";
import Res from "../../components/Responsive/Res";
import Loader from "../../components/Loader/Loader";

// import Loader from "../../components/Loader/Loader";

const Home = () => {
  return (
    <>
      <div className="rotate-your-device">
        <Res />
      </div>
      <Loader />
      <div className="display">
        <Navbar />
        <div className="displayMedia">
          <Tag />
          <Welcome />
          <Status />
        </div>
        <Header />
        <Description />
        <Footer />
      </div>
    </>
  );
};

export default Home;
