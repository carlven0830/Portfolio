import { useState } from "react";
import "./About.css";

function About() {
  const [showIntro, setShowIntro] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showCompentencies, setShowCompentencies] = useState(false);

  const toggleIntro = () => {
    setShowIntro(true);
    setShowExperience(false);
    setShowCompentencies(false);
  };

  const toggleExperience = () => {
    setShowIntro(false);
    setShowExperience(true);
    setShowCompentencies(false);
  };

  const toggleCompentencies = () => {
    setShowIntro(false);
    setShowExperience(false);
    setShowCompentencies(true);
  };
  return (
    <>
      <table id="about" className="about-background">
        <tbody>
          <tr>
            <td valign="top">
              <table className="about-container">
                <tbody>
                  <tr>
                    <td className="section-title2">
                      <h3>Get To Know</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="section-title" align="center">
                      <h1>About Me</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table className="about-wrapper">
                        <tbody>
                          <tr>
                            <td valign="top" className="about-image">
                              <img src="images/aboutMe2.jpg"></img>
                              <table className="about-image-background">
                                <tbody>
                                  <tr>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td valign="top" className="about-info">
                              <table className="body-info-wrapper">
                                <tbody>
                                  <tr>
                                    <td>
                                      <table className="body-info-option">
                                        <tbody>
                                          <tr>
                                            <td
                                              onClick={toggleIntro}
                                              className={
                                                "body-info-title" +
                                                (showIntro ? " active" : "")
                                              }
                                            >
                                              <h2>Intro</h2>
                                            </td>
                                            <td className="body-info-space"></td>
                                            <td
                                              onClick={toggleExperience}
                                              className={
                                                "body-info-title" +
                                                (showExperience
                                                  ? " active"
                                                  : "")
                                              }
                                            >
                                              <h2>Experience</h2>
                                            </td>
                                            <td className="body-info-space"></td>
                                            <td
                                              onClick={toggleCompentencies}
                                              className={
                                                "body-info-title" +
                                                (showCompentencies
                                                  ? " active"
                                                  : "")
                                              }
                                            >
                                              <h2>Compentencies</h2>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      {showIntro && (
                                        <table className="body-info-wrapper2">
                                          <tbody>
                                            <tr>
                                              <td>
                                                <table className="body-info-content">
                                                  <tbody>
                                                    <tr>
                                                      <td className="body-info-width">
                                                        <svg
                                                          height="155"
                                                          width="190"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                          <rect
                                                            className="shape"
                                                            height="170"
                                                            width="201"
                                                          />
                                                        </svg>
                                                        <table className="body-info-box">
                                                          <tbody>
                                                            <tr>
                                                              <td>
                                                                <img src="images/age.png"></img>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td className="title">
                                                                Age
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td>
                                                                24 years old
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                      <td className="body-info-width2"></td>
                                                      <td className="body-info-width">
                                                        <svg
                                                          height="155"
                                                          width="190"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                          <rect
                                                            className="shape"
                                                            height="170"
                                                            width="201"
                                                          />
                                                        </svg>
                                                        <table className="body-info-box">
                                                          <tbody>
                                                            <tr>
                                                              <td>
                                                                <img src="images/height.png"></img>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td className="title">
                                                                Height
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td>183 cm</td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                      <td className="body-info-width2"></td>
                                                      <td className="body-info-width">
                                                        <svg
                                                          height="155"
                                                          width="190"
                                                          xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                          <rect
                                                            className="shape"
                                                            height="170"
                                                            width="201"
                                                          />
                                                        </svg>
                                                        <table className="body-info-box">
                                                          <tbody>
                                                            <tr>
                                                              <td>
                                                                <img src="images/weight.png"></img>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td className="title">
                                                                Weight
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                              <td>62 kg</td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="intro-content">
                                                Hello, I am Tan Carlven. I've
                                                recently Cybersecurity graduate
                                                with strong analytical and
                                                problem-solving skills gained
                                                through coursework and
                                                internships. Quick learner with
                                                excellent communication and
                                                teamwork abilities. In my
                                                leisure time, I enjoy engaging
                                                in outdoor activities and
                                                playing video games at home.
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      )}
                                      {showExperience && (
                                        <table className="body-info-wrapper2">
                                          <tbody>
                                            <tr>
                                              <td
                                                valign="top"
                                                className="exp-year"
                                              >
                                                <table className="exp-year-wrapper">
                                                  <tbody>
                                                    <tr>
                                                      <td className="exp-year-shape">
                                                        <table className="exp-year-wrapper">
                                                          <tbody>
                                                            <tr>
                                                              <td className="exp-year-rectangle"></td>
                                                              <td className="exp-year-triangle"></td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <table className="exp-year-text">
                                                          <tbody>
                                                            <tr>
                                                              <td>2022</td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                              <td className="experience-space"></td>
                                              <td
                                                valign="top"
                                                className="circle-verticle"
                                              >
                                                <table className="circle-verticle-wrapper">
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        className="circle-padding"
                                                      >
                                                        <div className="circle-shape"></div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="vline"></div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                              <td className="experience-space"></td>
                                              <td valign="top">
                                                <table className="position-wrapper">
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        <h2>Web master</h2>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td className="company">
                                                        Webteq Solution Sdn Bhd
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td className="description">
                                                        <ul>
                                                          <li>
                                                            Developed and
                                                            maintained
                                                            responsive and
                                                            user-friendly
                                                            websites using HTML,
                                                            CSS, and JavaScript.
                                                          </li>
                                                          <li>
                                                            Collaborated with
                                                            web designers to
                                                            implement design
                                                            mockups and ensure a
                                                            seamless user
                                                            experience.
                                                          </li>
                                                          <li>
                                                            Optimized website
                                                            performance by
                                                            identifying and
                                                            resolving front-end
                                                            issues, resulting in
                                                            reducing page load
                                                            times.
                                                          </li>
                                                        </ul>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="exp-year-vspace"></td>
                                            </tr>
                                            <tr>
                                              <td
                                                valign="top"
                                                className="exp-year"
                                              >
                                                <table className="exp-year-wrapper">
                                                  <tbody>
                                                    <tr>
                                                      <td className="exp-year-shape">
                                                        <table className="exp-year-wrapper">
                                                          <tbody>
                                                            <tr>
                                                              <td className="exp-year-rectangle"></td>
                                                              <td className="exp-year-triangle"></td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                        <table className="exp-year-text">
                                                          <tbody>
                                                            <tr>
                                                              <td>2020</td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                              <td className="experience-space"></td>
                                              <td
                                                valign="top"
                                                className="circle-verticle"
                                              >
                                                <table className="circle-verticle-wrapper">
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        className="circle-padding"
                                                      >
                                                        <div className="circle-shape"></div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="vline"></div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                              <td className="experience-space"></td>
                                              <td valign="top">
                                                <table className="position-wrapper">
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        <h2>Office Intern</h2>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td className="company">
                                                        CICC Thundercloud
                                                        Research Lab
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td className="description">
                                                        <ul>
                                                          <li>
                                                            Conducted research
                                                            on autonomous
                                                            driving
                                                          </li>
                                                          <li>
                                                            Developed and
                                                            implemented traffic
                                                            simulation models
                                                            using three
                                                            different software
                                                            platforms.
                                                          </li>
                                                          <li>
                                                            Contributed to the
                                                            development of
                                                            algorithms for path
                                                            planning, obstacle
                                                            avoidance, and
                                                            decision-making in
                                                            various traffic
                                                            scenarios.
                                                          </li>
                                                        </ul>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      )}
                                      {showCompentencies && (
                                        <table className="body-info-wrapper2">
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                className="comp-wrapper"
                                              >
                                                <table className="comp-logo">
                                                  <tbody>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="comp-vline"></div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center">
                                                        <table className="comp-circle">
                                                          <tbody>
                                                            <tr>
                                                              <td align="center">
                                                                <img
                                                                  src="images/Good.png"
                                                                  width={55}
                                                                ></img>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="comp-vline"></div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                              <td
                                                valign="top"
                                                className="comp-wrapper"
                                              >
                                                <ul>
                                                  <li>
                                                    Highly Responsible,
                                                    Committed and Passionate
                                                  </li>
                                                  <li>
                                                    Teachable and Can Adapt to
                                                    Change
                                                  </li>
                                                  <li>
                                                    Willing to Learn and Accept
                                                    New Challenges
                                                  </li>
                                                  <li>Good time management</li>
                                                </ul>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>
                                                <table className="comp-logo">
                                                  <tbody>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        className="comp-title"
                                                      >
                                                        Strength
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="comp-vline2"></div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                              <td>
                                                <table className="comp-logo">
                                                  <tbody>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="comp-vline2"></div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td
                                                        align="center"
                                                        className="comp-title"
                                                      >
                                                        Weakeness
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="comp-wrapper">
                                                <ul>
                                                  <li>Public Speaking</li>
                                                </ul>
                                              </td>
                                              <td
                                                align="center"
                                                className="comp-wrapper"
                                              >
                                                <table className="comp-logo">
                                                  <tbody>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="comp-vline"></div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center">
                                                        <table className="comp-circle">
                                                          <tbody>
                                                            <tr>
                                                              <td
                                                                className="comp-circle-image"
                                                                align="center"
                                                              >
                                                                <img
                                                                  src="images/Bad.png"
                                                                  width={55}
                                                                ></img>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center">
                                                        <div className="comp-vline"></div>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      )}
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

export default About;
