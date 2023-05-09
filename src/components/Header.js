import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div id="page" className="site">
        {/* Scroll to top */}
        <ul
          className="elements-bar left -unlist"
          style={{ marginLeft: "10.5vh" }}
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
              >
                Scroll to top
              </div>
            </Link>
          </li>
        </ul>
        <ul className="elements-bar right -unlist">
          <li>
            <div className="social-bar dynamic-typo">
              <ul className="social-bar-holder titles-typo -small-t -unlist vc_hidden-md">
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
          className="header header-7 header-dynamic-typo mobile-hamburger-position-left hamburger-position-left both-types"
          data-fixed-initial-offset="150"
        >
          <div className="header-wrap">
            <div className="header-wrap-inner vertical-inner">
              {/* Top Part */}
              <div className="top-part">
                <div className="top-part-inner">
                  <nav
                    id="site-navigation"
                    className="nav with-counters with-mobile-menu"
                    data-mobile-menu-second-click-link=""
                  >
                    <div className="mobile-overlay menu-mobile-overlay">
                      <div className="overlay"></div>
                      <div className="close-bar">
                        <button
                          className="icon-button -overlay-button"
                          aria-label="close"
                        >
                          <i className="icon">
                            <svg
                              className="default"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                            </svg>
                            <svg
                              className="minimal"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
                              ></path>
                            </svg>
                          </i>
                        </button>
                        <button
                          className="icon-button -overlay-button search-global fixed dynamic-typo btn-round-light vc_hidden-sm vc_hidden-xs"
                          data-nav-search="true"
                        >
                          <i className="icon">
                            <svg
                              className="default"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.0515 11.3208H12.8645L18 16.4666L16.4666 18L11.3208 12.8645V12.0515L11.0429 11.7633C9.86964 12.7719 8.34648 13.3791 6.68954 13.3791C2.99485 13.3791 0 10.3842 0 6.68954C0 2.99485 2.99485 0 6.68954 0C10.3842 0 13.3791 2.99485 13.3791 6.68954C13.3791 8.34648 12.7719 9.86964 11.7633 11.0429L12.0515 11.3208ZM2.05832 6.68954C2.05832 9.25214 4.12693 11.3208 6.68954 11.3208C9.25214 11.3208 11.3208 9.25214 11.3208 6.68954C11.3208 4.12693 9.25214 2.05832 6.68954 2.05832C4.12693 2.05832 2.05832 4.12693 2.05832 6.68954Z"
                              ></path>
                            </svg>
                            <svg
                              className="minimal"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.875 1.75C4.93997 1.75 1.75 4.93997 1.75 8.875C1.75 12.81 4.93997 16 8.875 16C12.81 16 16 12.81 16 8.875C16 4.93997 12.81 1.75 8.875 1.75ZM0.25 8.875C0.25 4.11154 4.11154 0.25 8.875 0.25C13.6385 0.25 17.5 4.11154 17.5 8.875C17.5 13.6385 13.6385 17.5 8.875 17.5C4.11154 17.5 0.25 13.6385 0.25 8.875Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.9125 13.9133C14.2054 13.6204 14.6803 13.6204 14.9732 13.9133L19.5295 18.4696C19.8224 18.7625 19.8224 19.2373 19.5295 19.5302C19.2366 19.8231 18.7617 19.8231 18.4688 19.5302L13.9125 14.9739C13.6196 14.681 13.6196 14.2062 13.9125 13.9133Z"
                              ></path>
                            </svg>
                          </i>
                        </button>
                      </div>
                      <div className="holder">
                        <div id="mega-menu-wrap" className="nav-container">
                          <ul id="menu-primary" className="menu">
                            <li
                              id="nav-menu-item-225131-642ac089036ec"
                              className="mega-menu-item nav-item menu-item-depth-0 "
                            >
                              <Link
                                to="http://ohio.clbthemes.com/"
                                className="menu-link -undash main-menu-link item-title"
                              >
                                <span>Home</span>
                              </Link>
                            </li>
                          </ul>
                          <ul id="mobile-menu" className="mobile-menu menu">
                            <li
                              id="nav-menu-item-225131-642ac0890a025"
                              className="mega-menu-item nav-item menu-item-depth-0 "
                            >
                              <Link
                                to="http://ohio.clbthemes.com/"
                                className="menu-link -undash main-menu-link item-title"
                              >
                                <span>Home</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="copyright">
                          <p>
                            © 2016-2023 <Link to="">Colabrio</Link>. All rights
                            reserved |
                            <Link to="">
                              <b>Purchase</b>
                            </Link>
                          </p>
                          <p>
                            <Link to="">Security</Link> |
                            <Link to="">Privacy &amp; Cookie Policy</Link> |
                            <Link to="">Terms of Service</Link>
                          </p>
                        </div>
                      </div>
                      <div className="social-bar dynamic-typo">
                        <ul className="social-bar-holder titles-typo -small-t -unlist vc_hidden-md">
                          <li>Follow Us</li>
                          <li>—</li>
                          <li>
                            <Link to="" className="-undash facebook">
                              Fb.
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="-undash behance">
                              Be.
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="-undash youtube">
                              Yt.
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  {/* Branding Section */}
                  <div className="branding">
                    <Link className="site-title font-titles" to="/" rel="home">
                      <div className="fixed-logo">
                        <img
                          src="logoStudio3.png"
                          className
                          srcSet="logoStudio3.png 2x"
                          alt="STUDIO3"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Middle Part */}
              <div className="middle-part">
                <div className="middle-part-inner">
                  <button
                    className="icon-button hamburger"
                    aria-controls="site-navigation"
                    style={{ color: "#fff" }}
                    onClick={toggleClass}
                  >
                    <i className="icon"></i>
                  </button>
                </div>
              </div>
              {/* Bottom Part */}
              <div className="bottom-part">
                <ul className="menu-optional -unlist">
                  <li className="vc_hidden-xs vc_hidden-sm"></li>
                  <li>
                    <Link to="" className="button -small btn-optional">
                      Let’s talk
                    </Link>
                  </li>
                </ul>
                <div className="close-menu"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Content */}
        <div
          className={
            isActive
              ? "clb-popup clb-hamburger-nav visible"
              : "clb-popup clb-hamburger-nav"
          }
        >
          <div className="close-bar -left-flex">
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
          <div
            className="clb-hamburger-nav-holder"
            role="navigation"
            style={{ padding: "4rem", color: "#fff" }}
          >
            <ul id="secondary-menu" className="menu">
              <li className="mega-menu-item nav-item menu-item-depth-0 current-menu-item showed">
                <Link
                  to="/"
                  className="menu-link main-menu-link item-title sub-nav"
                  style={{ fontWeight: "500" }}
                  aria-label="close"
                >
                  <span className>Home</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/about-us/"
                  className="menu-link main-menu-link item-title sub-nav"
                  style={{ fontWeight: "500" }}
                  aria-label="close"
                >
                  <span className>About Us</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/projects/"
                  className="menu-link main-menu-link item-title sub-nav"
                  style={{ fontWeight: "500" }}
                  aria-label="close"
                >
                  <span className>Projects</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/services/"
                  className="menu-link main-menu-link item-title sub-nav hover visible"
                  style={{ fontWeight: "500" }}
                  aria-label="close"
                >
                  <span className>Services</span>
                </Link>
              </li>
              <li className="mega-menu-item nav-item menu-item-depth-0 showed">
                <Link
                  to="/contact-us/"
                  className="menu-link main-menu-link item-title sub-nav"
                  style={{ fontWeight: "500" }}
                  aria-label="close"
                >
                  <span className>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="hamburger-nav-details"
            style={{ paddingLeft: "4rem" }}
          >
            <div
              className="details-column social-networks"
              style={{ margin: "-4rem 0" }}
            >
              <Link
                to="https://www.facebook.com/studio3.ae/"
                className="network -unlink facebook"
                id="studio3SocialIconCircle"
              >
                <BsFacebook className="fs-5" />
              </Link>
              <Link
                to="https://www.facebook.com/studio3dubai/"
                className="network -unlink behance"
                id="studio3SocialIconCircle"
              >
                <BsInstagram className="fs-4" />
              </Link>
              <Link
                to="https://www.facebook.com/studio3-advertising-agency/"
                className="network -unlink youtube"
                id="studio3SocialIconCircle"
              >
                <BsLinkedin className="fs-4" />
              </Link>
            </div>
          </div>
        </div>
        {/* End Site Content */}
        {/* Search Widgets */}
        <button
          className="icon-button -overlay-button search-global fixed dynamic-typo btn-round-light vc_hidden-sm vc_hidden-xs"
          data-nav-search="true"
          style={{ marginLeft: "10.5vh" }}
        >
          <i className="icon">
            <svg
              className="default"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0515 11.3208H12.8645L18 16.4666L16.4666 18L11.3208 12.8645V12.0515L11.0429 11.7633C9.86964 12.7719 8.34648 13.3791 6.68954 13.3791C2.99485 13.3791 0 10.3842 0 6.68954C0 2.99485 2.99485 0 6.68954 0C10.3842 0 13.3791 2.99485 13.3791 6.68954C13.3791 8.34648 12.7719 9.86964 11.7633 11.0429L12.0515 11.3208ZM2.05832 6.68954C2.05832 9.25214 4.12693 11.3208 6.68954 11.3208C9.25214 11.3208 11.3208 9.25214 11.3208 6.68954C11.3208 4.12693 9.25214 2.05832 6.68954 2.05832C4.12693 2.05832 2.05832 4.12693 2.05832 6.68954Z"
              />
            </svg>
            <svg
              className="minimal"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.875 1.75C4.93997 1.75 1.75 4.93997 1.75 8.875C1.75 12.81 4.93997 16 8.875 16C12.81 16 16 12.81 16 8.875C16 4.93997 12.81 1.75 8.875 1.75ZM0.25 8.875C0.25 4.11154 4.11154 0.25 8.875 0.25C13.6385 0.25 17.5 4.11154 17.5 8.875C17.5 13.6385 13.6385 17.5 8.875 17.5C4.11154 17.5 0.25 13.6385 0.25 8.875Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9125 13.9133C14.2054 13.6204 14.6803 13.6204 14.9732 13.9133L19.5295 18.4696C19.8224 18.7625 19.8224 19.2373 19.5295 19.5302C19.2366 19.8231 18.7617 19.8231 18.4688 19.5302L13.9125 14.9739C13.6196 14.681 13.6196 14.2062 13.9125 13.9133Z"
              />
            </svg>
          </i>
        </button>
        {/* Whatsapp Widgets */}
      </div>
    </>
  );
};

export default Header;
