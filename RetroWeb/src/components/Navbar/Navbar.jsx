import "../Navbar/Navbar.css";
import { useEffect, useState } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Close menu on ESC press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
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
        <a href="https://github.com/mahdiisabry1" target="_blank">
          github
        </a>
      </h5>
      <div className="middleHeader desktopOnly">
        <svg
          fill="var(--text-clr)"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12.004 0c-.024 0-.052 0-.081 0-1.661 0-3.242.345-4.674.968l.076-.029c-1.482.637-2.748 1.503-3.815 2.568-1.064 1.067-1.93 2.333-2.538 3.737l-.03.078c-.593 1.356-.939 2.937-.939 4.598v.085-.004.081c0 1.661.345 3.242.968 4.674l-.029-.076c.636 1.482 1.501 2.747 2.565 3.815 1.067 1.064 2.333 1.931 3.737 2.538l.078.03c1.356.593 2.937.939 4.598.939h.089-.005.081c1.661 0 3.242-.345 4.674-.968l-.076.029c1.482-.637 2.748-1.503 3.815-2.568 1.064-1.067 1.931-2.333 2.538-3.737l.03-.078c.593-1.356.938-2.936.938-4.596 0-.029 0-.058 0-.087v.004c0-.024 0-.052 0-.081 0-1.661-.345-3.242-.968-4.674l.029.076c-.637-1.482-1.503-2.748-2.568-3.815-1.067-1.064-2.333-1.93-3.737-2.538l-.078-.03c-1.356-.593-2.936-.938-4.596-.938-.029 0-.059 0-.088 0h.004zm2.691 4.123c.203-.366.543-.634.949-.738l.011-.002c.126-.036.27-.057.419-.057.302 0 .583.086.822.234l-.007-.004c.366.203.634.543.738.949l.002.011c.037.124.058.265.058.412 0 .296-.086.571-.235.803l.004-.006c-.203.366-.543.634-.949.738l-.01.002c-.129.039-.278.061-.432.061-.287 0-.555-.078-.785-.213l.007.004c-.366-.203-.634-.543-.738-.949l-.002-.011c-.038-.131-.06-.282-.06-.439 0-.292.077-.566.213-.803l-.004.008zm-2.691.913h.017c.329 0 .653.022.97.066l-.037-.004c.347.047.652.112.949.196l-.047-.012c.053.346.179.655.363.921l-.005-.007c.196.285.448.517.742.685l.011.006c.274.156.598.258.943.284h.007c.053.005.115.007.177.007.278 0 .544-.053.788-.148l-.015.005c.584.571 1.069 1.24 1.426 1.983l.018.042c.355.728.582 1.579.629 2.477l.001.016-2.272.025c-.111-1.206-.668-2.264-1.502-3.021l-.004-.003c-.802-.772-1.895-1.248-3.098-1.248-.022 0-.044 0-.066 0h.003c-.001 0-.001 0-.002 0-.363 0-.716.045-1.053.13l.03-.006c-.367.089-.683.198-.986.334l.035-.014-1.111-2c.421-.215.91-.397 1.422-.522l.046-.009c.475-.115 1.02-.182 1.58-.182h.04-.002zm-8.151 8.569c-.007 0-.016 0-.024 0-.436 0-.83-.181-1.111-.471-.291-.282-.472-.676-.472-1.113 0-.008 0-.016 0-.025v.001c0-.008 0-.017 0-.026 0-.435.18-.828.469-1.109.281-.289.675-.469 1.11-.469h.028-.001.017c.431 0 .821.18 1.097.468l.001.001c.289.281.469.675.469 1.11v.028-.001.026c0 .435-.18.828-.469 1.109-.277.291-.668.471-1.1.471-.004 0-.008 0-.012 0h.001zm1.407.148c.246-.215.449-.473.598-.763l.007-.014c.148-.28.234-.613.234-.965 0-.003 0-.007 0-.01v.001c0-.003 0-.006 0-.01 0-.353-.087-.685-.24-.977l.006.012c-.156-.304-.359-.562-.602-.775l-.003-.003c.225-.876.595-1.643 1.087-2.315l-.013.019c.503-.689 1.104-1.27 1.79-1.737l.025-.016 1.16 1.975c-.595.435-1.08.983-1.432 1.616l-.013.025c-.349.619-.555 1.358-.555 2.146v.041-.002.04c0 .786.201 1.525.555 2.168l-.012-.023c.361.664.851 1.213 1.442 1.632l.015.01-1.161 1.976c-.711-.482-1.312-1.064-1.801-1.732l-.014-.02c-.479-.653-.849-1.42-1.063-2.25l-.01-.046zm11.628 6.69c-.23.144-.509.23-.808.23-.148 0-.29-.021-.425-.06l.011.003c-.418-.112-.761-.379-.971-.733l-.004-.007c-.131-.229-.209-.503-.209-.795 0-.156.022-.308.063-.451l-.003.011c.107-.417.375-.757.733-.956l.008-.004c.223-.132.491-.209.778-.209.154 0 .302.022.443.064l-.011-.003c.417.107.757.375.956.733l.004.008c.145.226.231.501.231.797 0 .147-.021.289-.061.423l.003-.011c-.106.416-.373.756-.73.956zm-.024-3.481c-.23-.091-.495-.143-.773-.143-.062 0-.124.003-.185.008l.008-.001c-.352.026-.676.128-.961.29l.011-.006c-.304.174-.556.406-.748.684l-.005.008c-.179.259-.306.568-.357.901l-.002.012c-.249.073-.554.138-.866.181l-.035.004c-.28.039-.604.062-.933.062-.006 0-.012 0-.018 0h.001c-.007 0-.016 0-.024 0-.565 0-1.115-.067-1.641-.195l.048.01c-.559-.134-1.048-.316-1.507-.549l.039.018 1.111-2c.267.121.584.231.912.312l.038.008c.307.078.66.123 1.023.123h.002.062c1.203 0 2.296-.476 3.1-1.249l-.001.001c.839-.762 1.397-1.821 1.505-3.01l.001-.018 2.272.025c-.047.914-.274 1.765-.647 2.532l.017-.039c-.376.787-.861 1.458-1.445 2.029l-.001.001z" />
        </svg>
      </div>
      <div className="innerHeader">
        <a href="/">Index</a>
        <a href="/contact">Contact</a>
        <button className="btn-class-name" onClick={darkmode}>
          <span className="back"></span>
          <span className="front"></span>
        </button>
        <div>
          <BiSolidFoodMenu
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className={`menu-overlay ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <nav className="menu-content">
              <ul>
                <li>
                  <a href="/" onClick={() => setIsOpen(false)}>
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    LINKEDIN
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
