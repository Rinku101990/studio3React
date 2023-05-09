import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTwo = () => {
  const [isSetActive, setSetActive] = useState(false);
  const toggleSetActiveClass = () => {
    setSetActive(!isSetActive);
  };
  return (
    <>
      <div id="page" className="site">
        {/* Scroll to top */}
        <ul
          className="elements-bar left -unlist"
          //   style={{ marginLeft: "10.5vh" }}
        >
          <li>
            <Link
              to=""
              className="scroll-top dynamic-typo -undash -small-t vc_hidden-md visible dark-typo"
            >
              <div className="scroll-top-bar">
                <div className="scroll-track"></div>
              </div>
              <div
                className="scroll-top-holder titles-typo title"
                id="studio3ServiceTitleH6"
                style={{ color: "#000000" }}
              >
                Scroll to top
              </div>
            </Link>
          </li>
        </ul>
        <ul className="elements-bar right -unlist">
          <li>
            <div className="social-bar dynamic-typo">
              <ul
                className="social-bar-holder titles-typo -small-t -unlist vc_hidden-md"
                style={{ color: "#000000" }}
                id="studio3ServiceTitleH6"
              >
                <li>Follow Us</li>
                <li>—</li>
                <li>
                  <Link
                    to="https://www.facebook.com/studio3.ae/"
                    target="__blank"
                    className="-undash facebook"
                  >
                    Fb.
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/studio3dubai/"
                    target="__blank"
                    className="-undash behance"
                  >
                    Inst.
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/studio3-advertising-agency"
                    target="__blank"
                    className="-undash youtube"
                  >
                    Lk.
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* <div className="circle-cursor circle-cursor-outer"></div>
        <div className="circle-cursor circle-cursor-inner">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.06055 0H20.0605V18H17.0605V5.12155L2.12132 20.0608L0 17.9395L14.9395 3H2.06055V0Z" />
          </svg>
        </div> */}
        <Link className="skip-link screen-reader-text" to="#main">
          Skip to content
        </Link>
        <header
          id="masthead"
          className="site-header header-3 header-dynamic-typo no-transition"
          data-header-fixed="true"
          data-fixed-initial-offset={150}
        >
          <div className="header-wrap">
            <div className="header-wrap-inner">
              <div className="left-part">
                <div className="desktop-hamburger">
                  {/* Fullscreen */}
                  <div
                    className="clb-hamburger btn-round btn-round-light dark-mode-reset"
                    tabIndex={1}
                    onClick={toggleSetActiveClass}
                  >
                    <i className="ion">
                      <Link
                        to="#"
                        className="clb-hamburger-holder"
                        aria-controls="site-navigation"
                      >
                        <span className="_shape" />
                        <span className="_shape" />
                      </Link>
                    </i>
                  </div>
                </div>
                <div className="mobile-hamburger">
                  {/* Fullscreen */}
                  <div
                    className="clb-hamburger btn-round btn-round-light dark-mode-reset"
                    tabIndex={1}
                    onClick={toggleSetActiveClass}
                  >
                    <i className="ion">
                      <Link
                        to="#"
                        className="clb-hamburger-holder"
                        aria-controls="site-navigation"
                      >
                        <span className="_shape" />
                        <span className="_shape" />
                      </Link>
                    </i>
                  </div>
                </div>
                <div className="site-branding">
                  <Link className="site-title font-titles" to="/">
                    <div
                      className="logo with-mobile"
                      style={{ display: "flex" }}
                    >
                      <img
                        src="https://studio3.ae/wp-content/uploads/2021/01/logo.png"
                        className
                        srcSet="https://studio3.ae/wp-content/uploads/2021/01/logo.png 2x"
                        alt="STUDIO3"
                      />
                    </div>
                    <div className="fixed-logo" style={{}}>
                      <img
                        src="https://studio3.ae/wp-content/uploads/2021/01/logo.png"
                        srcSet="https://studio3.ae/wp-content/uploads/2021/01/logo.png 2x"
                        alt="STUDIO3"
                      />
                    </div>
                    <div className="mobile-logo" style={{ display: "none" }}>
                      <img
                        src="https://studio3.ae/wp-content/uploads/2021/01/logo.png"
                        className
                        alt="STUDIO3"
                      />
                    </div>
                    <div className="fixed-mobile-logo">
                      <img
                        src="https://studio3.ae/wp-content/uploads/2021/01/logo.png"
                        className
                        alt="STUDIO3"
                      />
                    </div>
                    <div className="for-onepage" style={{}}>
                      <span className="dark hidden">
                        <img
                          src="https://studio3.ae/wp-content/uploads/2021/01/logo.png"
                          srcSet="https://studio3.ae/wp-content/uploads/2021/01/logo.png 2x"
                          alt="STUDIO3"
                        />
                      </span>
                      <span className="light hidden">
                        <img
                          src="https://studio3.ae/wp-content/uploads/2021/12/logo-1.png"
                          srcSet="https://studio3.ae/wp-content/uploads/2021/12/logo-1.png 2x"
                          alt="STUDIO3"
                        />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="right-part right">
                <nav
                  id="site-navigation"
                  className="main-nav hidden with-counters unhidden visible"
                  data-mobile-menu-second-click-link
                >
                  {/* Mobile overlay */}
                  <div className="mbl-overlay menu-mbl-overlay visible">
                    <div className="mbl-overlay-bg" />
                    {/* Close bar */}
                    <div className="close-bar text-left">
                      <div
                        className="btn-round btn-round-light clb-close"
                        tabIndex={0}
                      >
                        <i className="ion ion-md-close" />
                      </div>
                      {/* Search */}
                      <Link
                        className="search-global btn-round btn-round-light fixed btn-round-light vc_hidden-md vc_hidden-sm vc_hidden-xs"
                        tabIndex={1}
                        data-nav-search="true"
                      >
                        <i className="icon ion ion-md-search brand-color-hover-i" />
                      </Link>
                    </div>
                    <div className="mbl-overlay-container">
                      {/* Navigation */}
                      <div
                        id="mega-menu-wrap"
                        className="main-nav-container"
                        role="navigation"
                      >
                        <ul id="primary-menu" className="menu">
                          <li
                            id="nav-menu-item-217670-645219fd37887"
                            className="mega-menu-item nav-item menu-item-depth-0"
                          >
                            <Link
                              to="https://studio3.ae/"
                              className="menu-link main-menu-link item-title sub-nav"
                              id="accessible-megamenu-1683287329833-2"
                            >
                              <span>Home</span>
                            </Link>
                          </li>
                          <li
                            id="nav-menu-item-218311-645219fd378d9"
                            className="mega-menu-item nav-item menu-item-depth-0"
                          >
                            <Link
                              to="https://studio3.ae/about-us/"
                              className="menu-link main-menu-link item-title sub-nav"
                              id="accessible-megamenu-1683287329834-4"
                            >
                              <span>About Us</span>
                            </Link>
                          </li>
                          <li
                            id="nav-menu-item-217674-645219fd37921"
                            className="mega-menu-item nav-item menu-item-depth-0 current-menu-item"
                          >
                            <Link
                              to="https://studio3.ae/projects/"
                              className="menu-link main-menu-link item-title sub-nav"
                              id="accessible-megamenu-1683287329834-6"
                            >
                              <span>Projects</span>
                            </Link>
                          </li>
                          <li
                            id="nav-menu-item-217675-645219fd37960"
                            className="mega-menu-item nav-item menu-item-depth-0"
                          >
                            <Link
                              to="https://studio3.ae/services/"
                              className="menu-link main-menu-link item-title sub-nav"
                              id="accessible-megamenu-1683287329834-8"
                            >
                              <span>Services</span>
                            </Link>
                          </li>
                          <li
                            id="nav-menu-item-217673-645219fd37999"
                            className="mega-menu-item nav-item menu-item-depth-0"
                          >
                            <Link
                              to="https://studio3.ae/contact-us/"
                              className="menu-link main-menu-link item-title sub-nav"
                              id="accessible-megamenu-1683287329834-10"
                            >
                              <span>Contact Us</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Copyright */}
                      <div className="copyright">
                        © 2021, Studio3 FZE / MPS Advertising Agency LLC <br />
                        <Link to="https://studio3.ae/privacy-policy/">
                          Privacy Policy
                        </Link>
                          All right reserved.
                      </div>
                      {/* Social links */}
                    </div>
                    {/* Mobile social icons */}
                    <div className="clb-social vc_hidden-md vc_hidden-sm vc_hidden-xs">
                      <ul className="clb-social-holder font-titles ">
                        <li className="clb-social-holder-follow">Follow Us</li>
                        <li className="clb-social-holder-dash">–</li>
                        <li>
                          <Link
                            target="_blank"
                            to=" https://www.facebook.com/studio3.ae/"
                            className="facebook"
                          >
                            Fb.
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            to=" https://www.instagram.com/studio3dubai/"
                            className="instagram"
                          >
                            Inst.
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            to=" https://www.linkedin.com/company/studio3-advertising-agency"
                            className="linkedin"
                          >
                            Lk.
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/* <ul className="menu-optional">
                  <li className="btn-optional-holder">
                    <Link
                      to="/contact-us-ver4/"
                      className="btn btn-small btn-optional"
                    >
                      Let’s Talk
                    </Link>
                  </li>
                </ul> */}
                <div className="close-menu" style={{ right: "-100%" }} />
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Content */}
        <div
          className={
            isSetActive
              ? "clb-popup clb-hamburger-nav visible"
              : "clb-popup clb-hamburger-nav"
          }
        >
          <div className="close-bar text-left">
            <button className="icon-button -light" aria-label="close">
              <i className="icon">
                <svg
                  className="default"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
                </svg>
                <svg
                  className="minimal"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
                  />
                </svg>
              </i>
            </button>
          </div>
          <div className="clb-hamburger-nav-holder" role="navigation">
            <ul id="secondary-menu" className="menu">
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/"
                  className="menu-link main-menu-link item-title sub-nav"
                  aria-label="close"
                >
                  <span className>Home</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/about-us/"
                  className="menu-link main-menu-link item-title sub-nav"
                  aria-label="close"
                >
                  <span className>About Us</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 current-menu-item showed">
                <Link
                  to="/projects/"
                  className="menu-link main-menu-link item-title sub-nav"
                  aria-label="close"
                >
                  <span className>Projects</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/services/"
                  className="menu-link main-menu-link item-title sub-nav"
                  aria-label="close"
                >
                  <span className>Services</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/contact-us/"
                  className="menu-link main-menu-link item-title sub-nav"
                  aria-label="close"
                >
                  <span className>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="clb-hamburger-nav-details">
            <div className="hamburger-nav-info">
              <div className="hamburger-nav-info-item">
                <div className="socialbar small outline inverse">
                  <Link
                    to="https://www.facebook.com/studio3.ae/"
                    className="facebook"
                    id="studio3SocialIconCircle"
                  >
                    <BsFacebook className="fs-5" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/studio3dubai/"
                    className="instagram"
                    id="studio3SocialIconCircle"
                  >
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/studio3-advertising-agency"
                    className="linkedin"
                    id="studio3SocialIconCircle"
                  >
                    <BsLinkedin className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Site Content */}

        {/* Whatsapp Widgets */}
      </div>
    </>
  );
};

export default HeaderTwo;
