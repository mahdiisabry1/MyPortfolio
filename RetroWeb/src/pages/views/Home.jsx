import { useEffect, useState } from "react";
import Description from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PreLoader from "../../components/PreLoader/PreLoader";
import Status from "../../components/Status/Status";
import Tag from "../../components/Tag/Tag";
import "../styles/Home.css";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add mousemove listener
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <PreLoader />
      <Navbar />
      <div className="displayMedia">
        <Tag />
        <Status />
      </div>
      <Header />
      <Description />
      <Footer />
    </>
  );
};

export default Home;
