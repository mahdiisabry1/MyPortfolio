import "../Status/Status.css";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Status = () => {
  return (
    <>
      <div className="statusBar">
        <div className="statusTag">
          <h2>
            <SiMysql /> {""}
            <SiPython /> {""}
            <FaJava /> {""}
            <SiJavascript className="javascript"/> {""}| Computer Science | Fresh Talent, Ready to
            Innovate and Code the Future | {""}
            <SiJavascript /> {""}
            <FaJava /> {""}
            <SiPython /> {""}
            <SiMysql />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Status;
