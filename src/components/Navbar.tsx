import { useState } from "react";
import "../styles/main.scss";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <button
          className={`hamburger ${isNavOpen ? "open" : ""}`}
          onClick={toggleNav}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Hem</a>
            </li>
            <li>
              <a href="#">Om oss</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
