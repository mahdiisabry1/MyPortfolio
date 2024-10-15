import Description from "../../components/Description/Description";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PreLoader from "../../components/PreLoader/PreLoader";
import Status from "../../components/Status/Status";
import Tag from "../../components/Tag/Tag";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <PreLoader />
      <div className="displayMedia">
        <Navbar />
        <Tag />
        <Featured />
        <Status />
      </div>
      <Header />
      <Description />
      <Footer />
    </>
  );
};

export default Home;
