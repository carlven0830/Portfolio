import "./Portfolio.css";
import { FaLink } from "react-icons/fa6";

function Portfolio() {
  return (
    <>
      <table id="portfolio" className="portfolio-background">
        <tbody>
          <tr>
            <td>
              <table className="portfolio-container">
                <tbody>
                  <tr>
                    <td className="section-title2">
                      <h3>Portfolio</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="section-title" align="center">
                      <h1>Latest Works</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table className="portfolio-works">
                        <tbody>
                          <tr>
                            <td className="works-border">
                              <img
                                className="works-border-image"
                                src="images/Malware.png"
                              ></img>
                              <table className="works-intro">
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2>Malware Analysis with ML</h2>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text">
                                      <img src="images/category.png"></img>
                                      Research Paper & REST API
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text">
                                      <img src="images/code.png"></img>Python,
                                      HTML & CSS
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text2">
                                      <a
                                        className="link-btn"
                                        href="https://github.com/carlven0830/Final-Year-Project-Degree-"
                                        target="_blank"
                                      >
                                        <span className="link-name">
                                          Click Here
                                        </span>
                                        <div className="btn-icon">
                                          <FaLink />
                                        </div>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td className="works-border-space"></td>
                            <td className="works-border">
                              <img
                                className="works-border-image"
                                src="images/OnlineOrder.jpg"
                              ></img>
                              <table className="works-intro">
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2>Online Order Food System</h2>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text">
                                      <img src="images/category.png"></img>
                                      Application
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text">
                                      <img src="images/code.png"></img>Java
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text2">
                                      <a
                                        className="link-btn"
                                        href="https://github.com/carlven0830/Online-Order-Food"
                                        target="_blank"
                                      >
                                        <span className="link-name">
                                          Click Here
                                        </span>
                                        <div className="btn-icon">
                                          <FaLink />
                                        </div>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td className="works-border-space"></td>
                            <td className="works-border">
                              <img
                                className="works-border-image"
                                src="images/MST.png"
                              ></img>
                              <table className="works-intro">
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2>Minimum Spanning Tree</h2>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text">
                                      <img src="images/category.png"></img>
                                      Program
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text">
                                      <img src="images/code.png"></img>C++
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text2">
                                      <a
                                        className="link-btn"
                                        href="https://github.com/carlven0830/Minimum-Spanning-Tree"
                                        target="_blank"
                                      >
                                        <span className="link-name">
                                          Click Here
                                        </span>
                                        <div className="btn-icon">
                                          <FaLink />
                                        </div>
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
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Portfolio;
