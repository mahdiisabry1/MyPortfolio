import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerMain container">
        <div>&copy; 2024 . All rights reserved.</div>
        <div className="socialMedia">
          <ul className="mediaIcons">
            <li>
              <a href="https://x.com/mahdiisabry" target="_blank">
                X
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mahdii.sabry/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mahdi-sabry-919546286/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
