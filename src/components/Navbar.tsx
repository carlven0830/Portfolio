import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <label className="myLogo">
            <img src="images/scholarship.png" />
            <span>Carlven</span>
          </label>
          <ul className="menu">
            <li className="menu-item">
              <Link
                className="menu-link"
                spy
                smooth
                offset={50}
                duration={500}
                to="home"
              >
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="menu-link"
                spy
                smooth
                offset={50}
                duration={500}
                to="about"
              >
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="menu-link"
                spy
                smooth
                offset={50}
                duration={500}
                to="education"
              >
                Education
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="menu-link"
                spy
                smooth
                offset={50}
                duration={500}
                to="skill"
              >
                Skill
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="menu-link"
                spy
                smooth
                offset={50}
                duration={500}
                to="portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="menu-item">
              <Link
                className="menu-link"
                spy
                smooth
                offset={50}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
