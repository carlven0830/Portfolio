import "./Contact.css";

function Contact() {
  return (
    <>
      <table id="contact" className="contact-background">
        <tbody>
          <tr>
            <td>
              <table className="contact-container">
                <tbody>
                  <tr>
                    <td className="section-title2">
                      <h3>Get In Touch</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="section-title" align="center">
                      <h1>Contact Me</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table className="contact-wrapper">
                        <tbody>
                          <tr>
                            <td className="contact-info-wrapper">
                              <table className="contact-info-container">
                                <tbody>
                                  <tr>
                                    <td>
                                      <table className="contact-info-background">
                                        <tbody>
                                          <tr>
                                            <td className="contact-info-wrapper2">
                                              <table className="contact-info-border">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <img src="images/Email.png"></img>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td>
                                              <table className="contact-info">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <h2>Email Address</h2>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="contact-info-text">
                                                      <a
                                                        href="mailto:carlvemt@gmail.com"
                                                        target="_blank"
                                                      >
                                                        carlvemt@gmail.com
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
                                  <tr>
                                    <td className="contact-info-vspace"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table className="contact-info-background">
                                        <tbody>
                                          <tr>
                                            <td className="contact-info-wrapper2">
                                              <table className="contact-info-border">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <img src="images/Phone.png"></img>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td>
                                              <table className="contact-info">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <h2>Phone</h2>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="contact-info-text">
                                                      <a
                                                        href="https://wa.me/601111285830"
                                                        target="_blank"
                                                      >
                                                        6011-11285830
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
                                  <tr>
                                    <td className="contact-info-vspace"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table className="contact-info-background">
                                        <tbody>
                                          <tr>
                                            <td className="contact-info-wrapper2">
                                              <table className="contact-info-border">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <img src="images/Map.png"></img>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td>
                                              <table className="contact-info">
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <h2>Address</h2>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="contact-info-text">
                                                      68, Jalan Indah 10/7,
                                                      Taman Bukit Indah, 81200,
                                                      Johor
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
                            <td valign="top">
                              <table className="input-container">
                                <tbody>
                                  <tr>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Your Name"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="input-container-vspace"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Email"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="input-container-vspace"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="input-container-vspace"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <textarea
                                        name=""
                                        id=""
                                        cols={30}
                                        rows={7}
                                        className="form-control2"
                                        placeholder="Message"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="input-container-vspace"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        type="submit"
                                        value="Send Message"
                                        className="contact-btn"
                                      />
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

export default Contact;
