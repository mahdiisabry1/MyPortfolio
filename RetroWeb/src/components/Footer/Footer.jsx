import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerMain container">
        <div>&copy; 2024 . All rights reserved.</div>
        <div className="socialMedia">
          <ul className="mediaIcons">
            <li>
              <a href="" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="" target="_blank">
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
