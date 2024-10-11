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
      <Navbar />
      <div className="displayMedia">
        <Tag />
        <Featured />
        <Status />
      </div>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
