import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Status from "../../components/Status/Status";
import Tag from "../../components/Tag/Tag";
import "../styles/Home.css";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="displayMedia">
        <Tag />
        <Welcome />
        <Status />
      </div>
      <Header />
      <Description />
      <Footer />
    </>
  );
};

export default Home;
