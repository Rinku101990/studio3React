import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      id="content"
      className="site-content"
      data-mobile-menu-resolution={560}
    >
      {/* Top Heading End */}
      <div className="page-headline without-cap -left subheader_excluded  headline-with-parallax">
        <div
          className="parallax"
          data-parallax-bg="vertical"
          data-parallax-speed=".5"
        >
          <div
            className="parallax-bg bg-image"
            style={{
              height: "600px",
              transform: "translate3d(0px, -88.2075px, 0px)",
              transition: "transform 0.1s linear 0s",
            }}
          />
          <div className="parallax-content" />
        </div>
        <div className="holder">
          <div className="page-container">
            <div className="animated-holder">
              <div className="headline-meta" />
              <h1
                className="title"
                id="studio3ServiceTitleH6"
                style={{
                  textAlign: "center",
                }}
              >
                Contact Us
              </h1>
              <div
                className="post-meta-holder"
                style={{
                  textAlign: "center",
                  color: "#ffffff",
                  lineHeight: "5px",
                }}
              >
                Leave us a little info, and we’ll be in touch.
                <br />
                <Link
                  className="button -primary -small "
                  to="mailto:info@studio3.ae#"
                  style={{
                    padding: "10px",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    fontWeight: "900",
                    color: "#fff",
                    border: "#f0c708",
                  }}
                >
                  Send Us an Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="page-container">
        <div className="breadcrumb-holder" style={{ marginLeft: "60px" }}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb -unlist">
              <li
                className="breadcrumb-item"
                itemProp="itemListElement"
                itemScope
                itemType=""
              >
                <Link itemProp="item" to="/">
                  <span itemProp="name">Home</span>
                </Link>
                <svg
                  className="default"
                  width={5}
                  height={9}
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 14.5697L1.36504 16L9 8L1.36504 0L0 1.4303L6.26992 8L0 14.5697V14.5697Z" />
                </svg>
                <meta itemProp="position" content={1} />
              </li>
              <li
                className="breadcrumb-item"
                itemProp="itemListElement"
                itemScope
                itemType=""
              >
                <span itemProp="name" className="active">
                  Contact Us
                </span>
                <meta itemProp="position" content={2} />
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Third Section */}
      <div className="page-container">
        <div id="primary" className="content-area">
          <div className="page-content ">
            <main id="main" className="site-main">
              <article className="page type-page status-publish has-post-thumbnail hentry">
                <div className="entry-content studioCustomLayoutAdjustTopBottom">
                  <section className="wpb-content-wrapper">
                    {/* Get in Touch */}
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-4">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="ohio-widget heading -left"
                              id="ohio-custom-6440fa25c08d6"
                            >
                              <h4
                                className="title"
                                id="studio3ServiceTitleH6"
                                style={{ color: "#000" }}
                              >
                                Get in touch
                              </h4>
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-6">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div
                                      className="ohio-text-sc"
                                      id="ohio-custom-6440fa25c157e"
                                    >
                                      <p>
                                        Work Inquiries
                                        <br />
                                        <strong>+971 4 3885908</strong>
                                      </p>
                                    </div>
                                    <div
                                      className="ohio-text-sc"
                                      id="ohio-custom-6440fa25c1693"
                                    >
                                      <p>
                                        Office hours:
                                        <br />
                                        Monday – Friday
                                        <br />8 am to 6 pm
                                      </p>
                                    </div>
                                    <div
                                      className="vc_empty_space"
                                      style={{ height: "5vh" }}
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
                                      className="ohio-text-sc"
                                      id="ohio-custom-6440fa25c1cff"
                                    >
                                      <p>
                                        Email Us
                                        <br />
                                        <strong>info@studio3.ae</strong>
                                      </p>
                                    </div>
                                    <div
                                      className="ohio-text-sc"
                                      id="ohio-custom-6440fa25c1de4"
                                    >
                                      <p>
                                        Assistance hours:
                                        <br />
                                        Tuesday – Saturday
                                        <br />9 am to 6 pm EST
                                      </p>
                                    </div>
                                    <div
                                      className="vc_empty_space  clb__spacer"
                                      style={{ height: "7vh" }}
                                    >
                                      <span className="vc_empty_space_inner" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="wpb_column vc_column_container vc_col-sm-2">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper" />
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="ohio-widget heading -left"
                              id="ohio-custom-6440fa25c260a"
                            >
                              <h4
                                className="title"
                                id="studio3ServiceTitleH6"
                                style={{ color: "#000" }}
                              >
                                Post address
                              </h4>
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div
                                      className="ohio-text-sc"
                                      id="ohio-custom-6440fa25c2bcd"
                                    >
                                      <p>
                                        Office: 2108, Smart Heights by DAMC,
                                        <br />
                                        Barsha Heights,
                                        <br />
                                        Dubai, United Arab Emirates
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "5vh" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="ohio-widget heading -left"
                              id="ohio-custom-6440fa25c3328"
                            >
                              <h4
                                className="title"
                                id="studio3ServiceTitleH6"
                                style={{ color: "#000" }}
                              >
                                Social media
                              </h4>
                            </div>
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div
                                      className="ohio-text-sc"
                                      id="ohio-custom-6440fa25c3795"
                                    >
                                      <p>
                                        <strong>
                                          <Link to="https://www.facebook.com/studio3.ae/">
                                            Facebook
                                          </Link>
                                        </strong>
                                        <br />
                                        <strong>
                                          <Link to="https://www.instagram.com/studio3dubai/">
                                            Instagram
                                          </Link>
                                        </strong>
                                        <br />
                                        <strong>
                                          <Link to="https://ae.linkedin.com/company/studio3-creative-digital-agency">
                                            Twitter
                                          </Link>
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="vc_empty_space"
                              style={{ height: "5vh" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_custom_1626353820329  vc_custom_1626353820329">
                              <span className="vc_sep_holder vc_sep_holder_l">
                                <span
                                  style={{
                                    borderColor: "rgba(99,93,111,0.65)",
                                  }}
                                  className="vc_sep_line"
                                />
                              </span>
                              <span className="vc_sep_holder vc_sep_holder_r">
                                <span
                                  style={{
                                    borderColor: "rgba(99,93,111,0.65)",
                                  }}
                                  className="vc_sep_line"
                                />
                              </span>
                            </div>
                            <div
                              className="vc_empty_space  clb__spacer"
                              style={{ height: "7vh" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Get a Quotes */}
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div
                              className="ohio-widget contact-form -left"
                              id="ohio-custom-6440fa25c57d8"
                            >
                              <div
                                className="wpcf7 js"
                                id="wpcf7-f18-p19459-o1"
                                lang="en-US"
                                dir="ltr"
                              >
                                <form
                                  action="/"
                                  method="post"
                                  className="wpcf7-form init"
                                  aria-label="Contact form"
                                  noValidate="novalidate"
                                  data-status="init"
                                >
                                  <div className="vc_col-md-4 vc_col-sm-12">
                                    <p>
                                      <label>
                                        Name (required)
                                        <br />
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="your-name"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control"
                                            placeholder="Your name"
                                            type="text"
                                            name="your-name"
                                          />
                                        </span>
                                      </label>
                                    </p>
                                  </div>
                                  <div className="vc_col-md-4 vc_col-sm-12">
                                    <p>
                                      <label>
                                        Company (required)
                                        <br />
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="company-name"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="Your company name"
                                            type="text"
                                            name="company-name"
                                          />
                                        </span>{" "}
                                      </label>
                                    </p>
                                  </div>
                                  <div className="vc_col-md-4 vc_col-sm-12">
                                    <p>
                                      <label>
                                        Email (required)
                                        <br />
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="your-email"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text"
                                            aria-required="true"
                                            aria-invalid="false"
                                            placeholder="Your working email"
                                            type="email"
                                            name="your-email"
                                          />
                                        </span>{" "}
                                      </label>
                                    </p>
                                  </div>
                                  <div className="vc_col-md-4 vc_col-sm-12">
                                    <p>
                                      <label>
                                        <br />
                                        Phone (optional)
                                        <br />
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="your-phone"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text"
                                            placeholder="Your actual phone number"
                                            type="tel"
                                            name="your-phone"
                                          />
                                        </span>
                                      </label>
                                    </p>
                                  </div>
                                  <div className="vc_col-md-4 vc_col-sm-12">
                                    <p>
                                      <label>
                                        <br />
                                        Subject (optional)
                                        <br />
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="subject"
                                        >
                                          <input
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text"
                                            placeholder="Choose a subject"
                                            type="text"
                                            name="subject"
                                          />
                                        </span>
                                      </label>
                                    </p>
                                  </div>
                                  <div className="vc_col-md-4 vc_col-sm-12">
                                    <p>
                                      <label>
                                        <br />
                                        Choose a Budget (USD)
                                        <br />
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="menu-18"
                                        >
                                          <select
                                            className="wpcf7-form-control wpcf7-select"
                                            aria-invalid="false"
                                            name="menu-18"
                                          >
                                            <option value="Less than 5K">
                                              Less than 5K
                                            </option>
                                            <option value="5K - 10K">
                                              5K - 10K
                                            </option>
                                            <option value="Over 10K">
                                              Over 10K
                                            </option>
                                            <option value="Please advice">
                                              Please advice
                                            </option>
                                          </select>
                                        </span>
                                      </label>
                                    </p>
                                  </div>
                                  <div className="vc_col-lg-12 vc_col-sm-12">
                                    <p>
                                      <label>
                                        <br />
                                        Project details
                                        <br />
                                        <span
                                          className="wpcf7-form-control-wrap"
                                          data-name="message"
                                        >
                                          <textarea
                                            cols={40}
                                            rows={10}
                                            className="wpcf7-form-control wpcf7-textarea"
                                            placeholder="Brief project details"
                                            name="message"
                                          />
                                        </span>{" "}
                                      </label>
                                    </p>
                                  </div>

                                  <div className="vc_col-lg-12 vc_col-sm-12">
                                    <p>
                                      <br />
                                      <button
                                        className="button "
                                        data-button-loading="true"
                                        id="studio3ServiceTitleH6"
                                        style={{
                                          color: "#fff",
                                          marginTop: "10px",
                                        }}
                                      >
                                        Get a Quote
                                      </button>
                                    </p>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div
                              className="vc_empty_space  clb__spacer"
                              style={{ height: "10vh" }}
                            >
                              <span className="vc_empty_space_inner" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Google Map */}

                    <div className="vc_row-full-width vc_clearfix" />
                    {/* Career Section */}
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

export default Contact;
