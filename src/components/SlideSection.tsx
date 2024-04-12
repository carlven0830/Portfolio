import { Link } from "react-scroll";
import "./SlideSection.css";

function SlideSection() {
  return (
    <table id="home" className="slider-container">
      <tbody>
        <tr>
          <td className="slider-intro">
            <table className="slider-wrapper">
              <tbody>
                <tr>
                  <td>
                    <h2>Hello</h2>
                  </td>
                </tr>
                <tr>
                  <td className="slider-space"></td>
                </tr>
                <tr>
                  <td>
                    <h1>
                      I'm <span>Tan Carlven</span>
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td className="slider-space2"></td>
                </tr>
                <tr>
                  <td className="slider-text">
                    I am a recent IT graduate dedicated to continuously
                    improving my web development skills through hard work and
                    perseverance.
                  </td>
                </tr>
                <tr>
                  <td className="slider-space3"></td>
                </tr>
                <tr>
                  <td>
                    <table className="slider-button-wrapper">
                      <tbody>
                        <tr>
                          <td>
                            <Link
                              className="slider-btn"
                              spy
                              smooth
                              offset={50}
                              duration={500}
                              to="about"
                            >
                              <span>About Me</span>
                            </Link>
                          </td>
                          <td className="slider-btn-space"></td>
                          <td>
                            <Link
                              className="slider-btn2"
                              spy
                              smooth
                              offset={50}
                              duration={500}
                              to="portfolio"
                            >
                              <span>Portfolio</span>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td className="image-container">
            <img className="slider-image" src="images/myPicture.jpg"></img>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SlideSection;
