import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import PreLoader from "../components/PreLoader/PreLoader";
import Status from "../components/Status/Status";
import Tag from "../components/Tag/Tag";

const Home = () => {
  return (
    <>
      <PreLoader />
      <Navbar />
      <Tag />
      <Featured />
      <Status />
      <Header />
      <Footer />
    </>
  );
};

export default Home;
