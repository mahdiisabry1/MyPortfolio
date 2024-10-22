import "../Navbar/Navbar.css";
import { useEffect } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";

const Navbar = () => {
  // Function to toggle dark mode
  const darkmode = () => {
    const setTheme = document.body;
    setTheme.classList.toggle("darkmode");

    let theme;

    if (setTheme.classList.contains("darkmode")) {
      theme = "DARK";
    } else {
      theme = "LIGHT";
    }

    // Save the current theme to localStorage
    localStorage.setItem("PageTheme", JSON.stringify(theme));
  };

  // Set the theme on page load
  useEffect(() => {
    let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

    if (GetTheme === "DARK") {
      document.body.classList.add("darkmode");
    } else if (GetTheme === "LIGHT" || GetTheme === null) {
      document.body.classList.remove("darkmode");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("PageTheme", JSON.stringify("LIGHT")); // Default to light mode
    }
  }, []);


  return (
    <div className="navHeader">
      <div className="mobileMessage">
        <p>Use a wider screen </p>
        <p>for a better view</p>
      </div>
      <h5 className="desktopOnly">
        Colombo, SL | {""}
        <a
          href="https://www.linkedin.com/in/mahdi-sabry-919546286/"
          target="_blank"
        >
          LinkedIn
        </a>
      </h5>
      <div className="middleHeader desktopOnly">
        <h1 className="desktopOnly">WEB DEVELOPER</h1>
        {/* <h6></h6> */}
      </div>
      <div className="innerHeader">
        <button className="btn-class-name" onClick={darkmode}>
          <span className="back"></span>
          <span className="front"></span>
        </button>
        <BiSolidFoodMenu className="ri-menu-4-line" />
      </div>
    </div>
  );
};

export default Navbar;
