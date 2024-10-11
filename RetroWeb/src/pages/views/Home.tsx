import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PreLoader from "../../components/PreLoader/PreLoader";
import "../styles/Home.css";
import Featured from "../../components/Featured/Featured";
import Status from "../../components/Status/Status";
import Tag from "../../components/Tag/Tag";


const Home = () => {
  return (
    <>
      {/* <PreLoader /> */}
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
