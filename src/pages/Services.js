import { React, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
    <div
      id="content"
      className="site-content"
      data-mobile-menu-resolution={560}
    >
      {/* Top Heading */}
      <div
        className="page-headline without-cap -center subheader_excluded  headline-with-parallax"
        style={{ paddingTop: "0vh" }}
      >
        <div className="holder">
          <div className="page-container">
            <div className="animated-holder">
              <div className="headline-meta" />
              <h1
                className="title"
                style={{
                  color: "#000",
                  fontWeight: "900",
                  fontFamily: "system-ui",
                }}
              >
                Services
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Top Heading End */}
      <div className="page-container">
        <div id="primary" className="content-area">
          <div className="page-content ">
            <main id="main" className="site-main">
              <article className="page type-page status-publish hentry">
                <div className="entry-content studioCustomLayoutAdjustTopBottom">
                  <section className="wpb-content-wrapper">
                    {/* Services Top Section */}
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "4vh" }}
                            >
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Advertising
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBoxOne"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="advertising/">
                                          Print Advertising
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="advertising/">
                                          Online Advertising
                                        </Link>
                                      </li>
                                      <li className="col-md-5">
                                        <Link to="advertising/">
                                          Outdoor Advertising
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="advertising/">broadcast</Link>
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Direct Marketing
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBoxTwo"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="direct-marketing/">
                                          Email Marketing
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="direct-marketing/">
                                          Print DM
                                        </Link>
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Brochure Design
                                  </h6>
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
                                        <Link to="brochure-design/">
                                          Corporate
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="brochure-design/">
                                          Marketing
                                        </Link>
                                      </li>
                                      <li className="col-md-5">
                                        <Link to="brochure-design/">
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Branding
                                  </h6>
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
                                        <Link to="branding/">Logo Design</Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="branding/">
                                          Brand Guidelines
                                        </Link>
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Social Media
                                  </h6>
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
                                        <Link to="social-media/">Strategy</Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="social-media/">Design</Link>
                                      </li>
                                      <li className="col-md-5">
                                        <Link to="social-media/">
                                          Management
                                        </Link>
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Web Development
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBoxSix"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="web-development/">
                                          Web Designing
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="web-development/">
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
                      <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space"
                              style={{ height: "4vh" }}
                            >
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Illustration
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBox11"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="illustration/">
                                          Illustration
                                        </Link>
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Typography
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBox12"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="typography/">
                                          2D Typography
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="typography/">
                                          3D Typography
                                        </Link>
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Print & Retail
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBox13"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="print-retail/">Printing</Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="print-retail/">
                                          Vinyl Sticker Print
                                        </Link>
                                      </li>
                                      <li className="col-md-5">
                                        <Link to="print-retail/">
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Video Productions
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBox14"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="video-production/">
                                          Storyboard
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="video-production/">
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Events & Exhibitions
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBox15"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="events-exhibition/">
                                          Events
                                        </Link>
                                      </li>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="events-exhibition/">
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
                                  <h6
                                    className="accordion-header"
                                    id="studio3ServiceTitleH6"
                                  >
                                    Corporate Gifts
                                  </h6>
                                  <button className="icon-button -extra-small">
                                    <i className="icon" />
                                  </button>
                                </div>
                                <div
                                  className="accordion-collapse"
                                  id="serviceAccordionBox16"
                                >
                                  <div className="accordion-body">
                                    <ul>
                                      <li className="col-md-5 col-md-offset-2">
                                        <Link to="corporate-gifts/">
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
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />

                    {/* Services Bottom Section */}
                    <div
                      data-vc-full-width="true"
                      data-vc-full-width-init="true"
                      className="vc_row wpb_row vc_row-fluid clb__dark_section studio3AboutGetReadyBottom vc_row-has-fill"
                      style={{
                        position: "relative",
                        left: "-61.6667px",
                        boxSizing: "border-box",
                        width: "1263.33px",
                        maxWidth: "1263px",
                        paddingLeft: "61.6667px",
                        paddingRight: "61.3333px",
                      }}
                    >
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="vc_empty_space  clb__section_spacer"
                              style={{ height: "5vh" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-6">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div
                                      className="ohio-widget heading -left aos-init aos-animate"
                                      data-aos="fade-up"
                                    >
                                      <div
                                        className="subtitle"
                                        style={{
                                          fontSize: "17px",
                                          color: "#828084",
                                        }}
                                      >
                                        Let’s Collaborate
                                      </div>
                                      <h2
                                        className="title"
                                        style={{
                                          fontWeight: "800",
                                          fontFamily: "sans-serif",
                                        }}
                                      >
                                        Ready to
                                        <br className="vc_hidden-xs" />
                                        work with us?
                                      </h2>
                                    </div>
                                    <div
                                      className="vc_empty_space  vc_hidden-lg vc_hidden-md"
                                      style={{ height: "3vh" }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-6">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="ohio-widget-holder -right">
                                      <Link
                                        to="/contact-us/"
                                        target="_blank"
                                        className="ohio-widget button -primary clb__alignment_reset"
                                        style={{
                                          fontWeight: "900",
                                          fontFamily: "sans-serif",
                                          color: "#fff",
                                        }}
                                      >
                                        Contact Us
                                        <i className="icon -right">
                                          <svg
                                            className="default"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                                          </svg>
                                          <svg
                                            className="minimal"
                                            width={18}
                                            height={16}
                                            viewBox="0 0 18 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                                            />
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                                            />
                                          </svg>
                                        </i>
                                      </Link>
                                    </div>
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
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                  </section>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
