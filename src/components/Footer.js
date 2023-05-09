import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="site-footer clb__light_section">
        <div className="page-container">
          <div className="widgets vc_row studioCustomLayoutAdjustFooterArea">
            <div className="vc_col-lg-3 vc_col-md-3 vc_col-sm-6 widgets-column">
              <ul>
                <li
                  id="ohio_widget_logo-1"
                  className="widget widget_ohio_widget_logo"
                >
                  <div className="theme-logo ">
                    <Link to="/">
                      <h3
                        className="title text-left"
                        style={{
                          color: "#f0c708",
                          fontSize: "26px",
                          fontWeight: "600",
                        }}
                      >
                        Studio3 Advertising Agency Dubai
                      </h3>
                    </Link>
                  </div>
                </li>
                <li className="widget_text widget widget_custom_html">
                  <div className="textwidget custom-html-widget">
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/studio3.ae/"
                      rel="noopener"
                    >
                      Fb.
                    </Link>
                    &nbsp;/&nbsp;&nbsp;
                    <Link
                      target="_blank"
                      to="https://www.instagram.com/studio3dubai/"
                      rel="noopener"
                    >
                      Inst.
                    </Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <Link
                      target="_blank"
                      to="https://www.linkedin.com/company/studio3-advertising-agency"
                      rel="noopener"
                    >
                      Lk.
                    </Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <Link
                      target="_blank"
                      to="https://www.youtube.com/channel/UCVStLrjBD9RALsQYG1Jfe8g"
                      rel="noopener"
                    >
                      Yt.
                    </Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <Link
                      target="_blank"
                      to="https://vimeo.com/studio3dubai"
                      rel="noopener"
                    >
                      Vm.
                    </Link>
                  </div>
                </li>
                <li id="block-3" className="widget widget_block">
                  <Link
                    to="https://www.google.com/partners/agency?id=2853481244"
                    target="_blank"
                  >
                    <img
                      decoding="async"
                      src="https://www.gstatic.com/partners/badge/images/2022/PartnerBadgeClickable.svg"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="vc_col-lg-3 vc_col-md-3 vc_col-sm-6 widgets-column">
              <ul>
                <li id="block-8" className="widget widget_block">
                  <h3 className="title widget-title">Dubai</h3>
                  <br />
                  <b>Studio3/MPS Advertising</b>
                  <br className="vc_hidden-xs" />
                  <b>Agency LLC.</b>
                  <br className="vc_hidden-xs" />
                  Dubai, UAE
                </li>
              </ul>
            </div>
            <div className="vc_col-lg-3 vc_col-md-3 vc_col-sm-6 widgets-column">
              <ul>
                <li id="block-10" className="widget widget_block">
                  <h3 className="title widget-title">Work inquiries</h3>
                  <br />
                  Interested in working with us?
                  <br className="vc_hidden-xs" />
                  <b>
                    <Link href="mailto:info@studio3.ae">info@studio3.ae</Link>
                  </b>
                </li>
                <li id="block-11" className="widget widget_block">
                  <h3 className="title widget-title">Career</h3>
                  <br />
                  Looking for a job opportunity?
                  <br className="vc_hidden-xs" />
                  <b>
                    <Link href="mailto:info@studio3.ae">info@studio3.ae</Link>
                  </b>
                </li>
              </ul>
            </div>
            <div className="vc_col-lg-3 vc_col-md-3 vc_col-sm-6 widgets-column">
              <ul>
                <li
                  id="ohio_widget_subscribe-2"
                  className="widget widget_ohio_widget_subscribe"
                >
                  <h3 className="title widget-title">
                    Sign up for the newsletter
                  </h3>
                  <div className="subscribe-widget contact-form">
                    <div className="wpcf7 js">
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        />{" "}
                        <ul />
                      </div>
                      <form
                        action="/"
                        method="post"
                        className="wpcf7-form init"
                        aria-label="Contact form"
                        noValidate="novalidate"
                        data-status="init"
                      >
                        <div className="subscribe-form">
                          <p>
                            <span
                              className="wpcf7-form-control-wrap"
                              data-name="your-email"
                            >
                              <input
                                size={40}
                                className="form-control"
                                placeholder="Email address"
                                type="email"
                                name="your-email"
                              />
                            </span>
                            <br />
                            <button
                              className="button -flat -reset-color"
                              style={{
                                backgroundColor: "#f0c708",
                                color: "#fff",
                              }}
                            >
                              Submit
                            </button>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="site-footer-copyright">
          <div className="page-container">
            <div className="vc_row">
              <div className="vc_col-md-12">
                <div className="holder studioCustomLayoutAdjustTopBottom">
                  <div className="-left">
                    © {new Date().getFullYear()}, Studio3 FZE / MPS Advertising
                    Agency LLC .
                  </div>
                  <div className="right">
                    <Link href="/" target="_blank">
                      Privacy Policy
                    </Link>

                    <Link
                      href=""
                      target="_blank"
                      style={{ marginLeft: "10px" }}
                    >
                      All right reserved.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
