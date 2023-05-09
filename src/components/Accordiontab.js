import { React, useState } from "react";
import { Link } from "react-router-dom";

const Accordiontab = () => {
  /*-- Left Accordion Box One --*/
  const [isActiveClassBoxOne, setActiveClassBoxOne] = useState(false);
  const toggleAccordionClassBoxOne = () => {
    setActiveClassBoxOne(!isActiveClassBoxOne);
    if (isActiveClassBoxOne) {
      document.getElementById("serviceAccordionBoxOne").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBoxOne").style.height =
        "194.583px";
    }
  };
  /*-- Left Accordion Box Two --*/
  const [isActiveClassBoxTwo, setActiveClassBoxTwo] = useState(false);
  const toggleAccordionClassBoxTwo = () => {
    setActiveClassBoxTwo(!isActiveClassBoxTwo);
    if (isActiveClassBoxTwo) {
      document.getElementById("serviceAccordionBoxTwo").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBoxTwo").style.height =
        "110.583px";
    }
  };
  /*-- Left Accordion Box Three --*/
  const [isActiveClassBoxThree, setActiveClassBoxThree] = useState(false);
  const toggleAccordionClassBoxThree = () => {
    setActiveClassBoxThree(!isActiveClassBoxThree);
    if (isActiveClassBoxThree) {
      document.getElementById("serviceAccordionBoxThree").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBoxThree").style.height =
        "140.583px";
    }
  };
  /*-- Left Accordion Box Four --*/
  const [isActiveClassBoxFour, setActiveClassBoxFour] = useState(false);
  const toggleAccordionClassBoxFour = () => {
    setActiveClassBoxFour(!isActiveClassBoxFour);
    if (isActiveClassBoxFour) {
      document.getElementById("serviceAccordionBoxFour").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBoxFour").style.height =
        "100.583px";
    }
  };
  /*-- Left Accordion Box Five --*/
  const [isActiveClassBoxFive, setActiveClassBoxFive] = useState(false);
  const toggleAccordionClassBoxFive = () => {
    setActiveClassBoxFive(!isActiveClassBoxFive);
    if (isActiveClassBoxFive) {
      document.getElementById("serviceAccordionBoxFive").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBoxFive").style.height =
        "144.583px";
    }
  };
  /*-- Left Accordion Box Six --*/
  const [isActiveClassBoxSix, setActiveClassBoxSix] = useState(false);
  const toggleAccordionClassBoxSix = () => {
    setActiveClassBoxSix(!isActiveClassBoxSix);
    if (isActiveClassBoxSix) {
      document.getElementById("serviceAccordionBoxSix").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBoxSix").style.height =
        "100.583px";
    }
  };

  /*--- Right Accordion Box 1 ---*/
  const [isActiveClassBox11, setActiveClassBox11] = useState(false);
  const toggleAccordionClassBox11 = () => {
    setActiveClassBox11(!isActiveClassBox11);
    if (isActiveClassBox11) {
      document.getElementById("serviceAccordionBox11").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBox11").style.height =
        "70.583px";
    }
  };
  /*-- Left Accordion Box 12 --*/
  const [isActiveClassBox12, setActiveClassBox12] = useState(false);
  const toggleAccordionClassBox12 = () => {
    setActiveClassBox12(!isActiveClassBox12);
    if (isActiveClassBox12) {
      document.getElementById("serviceAccordionBox12").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBox12").style.height =
        "110.583px";
    }
  };
  /*-- Left Accordion Box 13 --*/
  const [isActiveClassBox13, setActiveClassBox13] = useState(false);
  const toggleAccordionClassBox13 = () => {
    setActiveClassBox13(!isActiveClassBox13);
    if (isActiveClassBox13) {
      document.getElementById("serviceAccordionBox13").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBox13").style.height =
        "140.583px";
    }
  };
  /*-- Left Accordion Box 14 --*/
  const [isActiveClassBox14, setActiveClassBox14] = useState(false);
  const toggleAccordionClassBox14 = () => {
    setActiveClassBox14(!isActiveClassBox14);
    if (isActiveClassBox14) {
      document.getElementById("serviceAccordionBox14").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBox14").style.height =
        "100.583px";
    }
  };
  /*-- Left Accordion Box 15 --*/
  const [isActiveClassBox15, setActiveClassBox15] = useState(false);
  const toggleAccordionClassBox15 = () => {
    setActiveClassBox15(!isActiveClassBox15);
    if (isActiveClassBox15) {
      document.getElementById("serviceAccordionBox15").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBox15").style.height =
        "97.583px";
    }
  };
  /*-- Left Accordion Box 16 --*/
  const [isActiveClassBox16, setActiveClassBox16] = useState(false);
  const toggleAccordionClassBox16 = () => {
    setActiveClassBox16(!isActiveClassBox16);
    if (isActiveClassBox16) {
      document.getElementById("serviceAccordionBox16").style.height = "0";
    } else {
      document.getElementById("serviceAccordionBox16").style.height =
        "50.583px";
    }
  };

  return (
    <>
      <div className="wpb_column vc_column_container vc_col-sm-4">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_empty_space" style={{ height: "4vh" }}>
              <span className="vc_empty_space_inner" />
            </div>
            <div
              className="ohio-accordion-sс ohio-widget accordion "
              data-ohio-accordion="true"
            >
              <div
                className={
                  isActiveClassBoxOne
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBoxOne}
                itemKey={1}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Advertising</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBoxOne">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/advertising/">
                          Print Advertising
                        </Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/advertising/">
                          Online Advertising
                        </Link>
                      </li>
                      <li className="col-md-5">
                        <Link to="../services/advertising/">
                          Outdoor Advertising
                        </Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/advertising/">broadcast</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={
                  isActiveClassBoxTwo
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBoxTwo}
                itemKey={2}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Direct Marketing</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBoxTwo">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/direct-marketing/">
                          Email Marketing
                        </Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/direct-marketing/">Print DM</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={
                  isActiveClassBoxThree
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBoxThree}
                itemKey={3}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Brochure Design</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div
                  className="accordion-collapse"
                  id="serviceAccordionBoxThree"
                >
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/brochure-design/">Corporate</Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/brochure-design/">Marketing</Link>
                      </li>
                      <li className="col-md-5">
                        <Link to="../services/brochure-design/">
                          Publishing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={
                  isActiveClassBoxFour
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBoxFour}
                itemKey={4}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Branding</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div
                  className="accordion-collapse"
                  id="serviceAccordionBoxFour"
                >
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/branding/">Logo Design</Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/branding/">Brand Guidelines</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={
                  isActiveClassBoxFive
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBoxFive}
                itemKey={5}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Social Media</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div
                  className="accordion-collapse"
                  id="serviceAccordionBoxFive"
                >
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/social-media/">Strategy</Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/social-media/">Design</Link>
                      </li>
                      <li className="col-md-5">
                        <Link to="../services/social-media/">Management</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={
                  isActiveClassBoxSix
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBoxSix}
                itemKey={6}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Web Development</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBoxSix">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/web-development/">
                          Web Designing
                        </Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/web-development/">
                          Web Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="vc_empty_space  clb__section_spacer"
              style={{ height: "10vh" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-4">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_empty_space" style={{ height: "4vh" }}>
              <span className="vc_empty_space_inner" />
            </div>

            <div
              className="ohio-accordion-sс ohio-widget accordion"
              data-ohio-accordion="true"
            >
              {/* Right Accordion 1 */}
              <div
                className={
                  isActiveClassBox11
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBox11}
                itemKey={11}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Illustration</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBox11">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/illustration/">Illustration</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Right Accordion 2*/}
              <div
                className={
                  isActiveClassBox12
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBox12}
                itemKey={12}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Typography</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBox12">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/typography/">2D Typography</Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/typography/">3D Typography</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Right Accordion 3*/}
              <div
                className={
                  isActiveClassBox13
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBox13}
                itemKey={13}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Print & Retail</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBox13">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/print-retail/">Printing</Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/print-retail/">
                          Vinyl Sticker Print
                        </Link>
                      </li>
                      <li className="col-md-5">
                        <Link to="../services/print-retail/">
                          Window Display
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Right Accordion 4 */}
              <div
                className={
                  isActiveClassBox14
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBox14}
                itemKey={14}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Video Productions</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBox14">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/video-production/">
                          Storyboard
                        </Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/video-production/">
                          2D & 3D Animation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Right Accordion 5 */}
              <div
                className={
                  isActiveClassBox15
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBox15}
                itemKey={15}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Events & Exhibitions</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBox15">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/events-exhibition/">Events</Link>
                      </li>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/events-exhibition/">
                          Exhibitions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Right Accordion 6 */}
              <div
                className={
                  isActiveClassBox16
                    ? "accordion-item active"
                    : "accordion-item"
                }
                onClick={toggleAccordionClassBox16}
                itemKey={16}
              >
                <div className="accordion-button">
                  <h6 className="accordion-header">Corporate Gifts</h6>
                  <button className="icon-button -extra-small">
                    <i className="icon" />
                  </button>
                </div>
                <div className="accordion-collapse" id="serviceAccordionBox16">
                  <div className="accordion-body">
                    <ul>
                      <li className="col-md-5 col-md-offset-2">
                        <Link to="../services/corporate-gifts/">
                          Customized Premium Gifts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="vc_empty_space  clb__section_spacer"
              style={{ height: "12vh" }}
            >
              <span className="vc_empty_space_inner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordiontab;
