import { Link } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import "./BtmBanner.css";

function BtmBanner() {
  return (
    <>
      <table className="banner-background">
        <tbody>
          <tr>
            <td>
              <table className="banner-container">
                <tbody>
                  <tr>
                    <td>
                      <table className="banner-links">
                        <tbody>
                          <tr>
                            <td className="banner-link-items">
                              <Link
                                spy
                                smooth
                                offset={50}
                                duration={500}
                                to="home"
                              >
                                Home
                              </Link>
                            </td>
                            <td className="banner-link-items">
                              <Link
                                spy
                                smooth
                                offset={50}
                                duration={500}
                                to="about"
                              >
                                About
                              </Link>
                            </td>
                            <td className="banner-link-items">
                              <Link
                                spy
                                smooth
                                offset={50}
                                duration={500}
                                to="education"
                              >
                                Education
                              </Link>
                            </td>
                            <td className="banner-link-items">
                              <Link
                                spy
                                smooth
                                offset={50}
                                duration={500}
                                to="skill"
                              >
                                Skill
                              </Link>
                            </td>
                            <td className="banner-link-items">
                              <Link
                                spy
                                smooth
                                offset={50}
                                duration={500}
                                to="portfolio"
                              >
                                Portfolio
                              </Link>
                            </td>
                            <td className="banner-link-items">
                              <Link
                                spy
                                smooth
                                offset={50}
                                duration={500}
                                to="contact"
                              >
                                Contact
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="banner-vspace"></td>
                  </tr>
                  <tr>
                    <td>
                      <table className="social-link">
                        <tbody>
                          <tr>
                            <td className="social-link-items">
                              <a
                                href="https://www.facebook.com/carlven.tan.1/"
                                target="_blank"
                              >
                                <table className="items-border facebook">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <FaFacebookF />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </a>
                            </td>
                            <td className="social-link-items">
                              <a
                                href="https://www.instagram.com/stories/carlven_tan/"
                                target="_blank"
                              >
                                <table className="items-border instagram">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <GrInstagram />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </a>
                            </td>
                            <td className="social-link-items">
                              <a
                                href="https://www.linkedin.com/in/tan-carlven-026692177/"
                                target="_blank"
                              >
                                <table className="items-border linkedin">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <GrLinkedin />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BtmBanner;
