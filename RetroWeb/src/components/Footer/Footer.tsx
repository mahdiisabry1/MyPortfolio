import React from "react";
import "./Footer.css";

// If there are no props, you can define the component like this
const Footer: React.FC = () => {
  return (
    <footer className="footer container">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
