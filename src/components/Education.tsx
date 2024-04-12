import "./Education.css";

function Education() {
  return (
    <>
      <table id="education" className="education-background">
        <tbody>
          <tr>
            <td>
              <table className="education-container">
                <tbody>
                  <tr>
                    <td className="section-title2">
                      <h3>My Academic</h3>
                    </td>
                  </tr>
                  <tr>
                    <td className="section-title" align="center">
                      <h1>Education</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table className="education-wrapper">
                        <tbody>
                          <tr>
                            <td className="education-info">
                              <table className="education-info-wrapper">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="vertical-split"></div>
                                    </td>
                                    <td>
                                      <table className="university-info-wrapper">
                                        <tbody>
                                          <tr>
                                            <td className="campus-name">
                                              Multimedia University (MMU),
                                              Cyberjaya Campus
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="campus-text">
                                              Bachelor of Computer Science
                                              (Hons.) in Cybersecurity
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="campus-text">
                                              CGPA: 3.83
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="education-space"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="vertical-split"></div>
                                    </td>
                                    <td>
                                      <table className="university-info-wrapper">
                                        <tbody>
                                          <tr>
                                            <td className="campus-name">
                                              Multimedia University (MMU),
                                              Melacca Campus
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="campus-text">
                                              Diploma in Information Technology
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="campus-text">
                                              CGPA: 3.68
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="education-space"></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="vertical-split"></div>
                                    </td>
                                    <td>
                                      <table className="university-info-wrapper">
                                        <tbody>
                                          <tr>
                                            <td className="campus-name">
                                              Sekolah Menengah Kebangsaan (SMK)
                                              Seri Perling
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="campus-text">
                                              Sijil Pelajaran Malaysia (SPM)
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="campus-text">
                                              1A+ 3A 1A- 1B+ 2B 1C+ 1C
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td className="education-image">
                              <img src="images/MMU.jpg"></img>
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

export default Education;
