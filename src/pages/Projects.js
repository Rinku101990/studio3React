import { React, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  // Dialog Project Box One
  const [isDialoagProjectBoxOne, setDialogProjectBoxOne] = useState(false);
  const toggleClassProjectBoxOne = () => {
    setDialogProjectBoxOne(!isDialoagProjectBoxOne);
  };
  // Dialog Project Box Two
  const [isDialoagProjectBoxTwo, setDialogProjectBoxTwo] = useState(false);
  const toggleClassProjectBoxTwo = () => {
    setDialogProjectBoxTwo(!isDialoagProjectBoxTwo);
  };
  // Dialog Project Box Three
  const [isDialoagProjectBoxThree, setDialogProjectBoxThree] = useState(false);
  const toggleClassProjectBoxThree = () => {
    setDialogProjectBoxThree(!isDialoagProjectBoxThree);
  };
  // Dialog Project Box Four
  const [isDialoagProjectBoxFour, setDialogProjectBoxFour] = useState(false);
  const toggleClassProjectBoxFour = () => {
    setDialogProjectBoxFour(!isDialoagProjectBoxFour);
  };
  // Dialog Project Box Five
  const [isDialoagProjectBoxFive, setDialogProjectBoxFive] = useState(false);
  const toggleClassProjectBoxFive = () => {
    setDialogProjectBoxFive(!isDialoagProjectBoxFive);
  };
  // Dialog Project Box Six
  const [isDialoagProjectBoxSix, setDialogProjectBoxSix] = useState(false);
  const toggleClassProjectBoxSix = () => {
    setDialogProjectBoxSix(!isDialoagProjectBoxSix);
  };
  // Dialog Project Box Seven
  const [isDialoagProjectBoxSeven, setDialogProjectBoxSeven] = useState(false);
  const toggleClassProjectBoxSeven = () => {
    setDialogProjectBoxSeven(!isDialoagProjectBoxSeven);
  };
  // Dialog Project Box Eight
  const [isDialoagProjectBoxEight, setDialogProjectBoxEight] = useState(false);
  const toggleClassProjectBoxEight = () => {
    setDialogProjectBoxEight(!isDialoagProjectBoxEight);
  };
  // Dialog Project Box Nine
  const [isDialoagProjectBoxNine, setDialogProjectBoxNine] = useState(false);
  const toggleClassProjectBoxNine = () => {
    setDialogProjectBoxNine(!isDialoagProjectBoxNine);
  };
  return (
    <div id="content" className="site-content">
      {/* Page Header */}
      <div className="clb-page-headline without-cap text-left subheader_included">
        <div className="bg-image" />
        <div className="clb-page-headline-holder">
          <div className="page-container">
            <div className="vc_row">
              <div className="vc_col-lg-12 animated-holder">
                <div className="post-meta"></div>
                <h1
                  className="clb-title"
                  style={{ fontWeight: "800", fontFamily: "system-ui" }}
                >
                  Projects
                </h1>
                <div
                  className="clb-post-meta"
                  style={{ fontFamily: "system-ui", marginTop: "0px" }}
                >
                  Creative way to <b>showcase your works</b> at their absolute
                  best.
                  <br />
                  <Link
                    target="_blank"
                    to="https://1.envato.market/5Q25j"
                    className="btn btn-small"
                    style={{
                      color: "#fff",
                      padding: "8px 16px 8px 15px",
                      border: "#fff",
                      fontWeight: "800",
                      fontFamily: "system-ui",
                    }}
                  >
                    Get Started
                    <i className="icon -right">
                      <svg
                        className="default"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"></path>
                      </svg>
                      <svg
                        className="minimal"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                        ></path>
                      </svg>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brodcum area */}
      <div className="breadcrumbs">
        <div className="page-container">
          <div className="vc_row">
            {/* Breadcrumbs */}
            <div className="breadcrumbs-holder">
              <div className="vc_col-md-12">
                <ol
                  className="breadcrumbs-slug"
                  itemScope
                  itemType="http://schema.org/BreadcrumbList"
                >
                  <li
                    itemProp="itemListElement"
                    itemScope
                    itemType="http://schema.org/ListItem"
                  >
                    <Link itemProp="item" to="https://studio3.ae/">
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
                    &nbsp;
                    <meta itemProp="position" content={1} />
                  </li>
                  <li
                    itemProp="itemListElement"
                    itemScope
                    itemType="http://schema.org/ListItem"
                  >
                    <span
                      itemProp="name"
                      className="active"
                      style={{ fontWeight: "800" }}
                    >
                      Portfolio
                    </span>
                    <meta itemProp="position" content={2} />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Area */}
      <div className="page-container top-offset bottom-offset">
        <div id="primary" className="content-area">
          <div className="page-content ">
            <main id="main" className="site-main">
              {/* Custom Content */}
              <div className="page_content portfolio_page_content" />
              {/* Grid Layout */}
              <div className="grid_2" data-ohio-portfolio-grid="true">
                <div
                  className="portfolio-sorting text-left"
                  data-filter="portfolio"
                  data-filter-paged="true"
                >
                  <ul className="unstyled">
                    <li>Filter by</li>
                    <li>
                      <Link
                        className="active"
                        to="#all"
                        data-isotope-filter="*"
                        style={{ color: "#f0c708" }}
                      >
                        <span className="name">All</span>
                        <span className="num">09</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#2d-animation" data-category-count={1}>
                        <span className="name">2D Animation</span>
                        <span className="num">00</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#360-campaign" data-category-count={8}>
                        <span className="name">360 Campaign</span>
                        <span className="num">05</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#activation" data-category-count={3}>
                        <span className="name">Activation</span>
                        <span className="num">01</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#brand-identity" data-category-count={1}>
                        <span className="name">Brand Identity</span>
                        <span className="num">00</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#brochure" data-category-count={1}>
                        <span className="name">Brochure</span>
                        <span className="num">00</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#brochure-design" data-category-count={4}>
                        <span className="name">Brochure Design</span>
                        <span className="num">03</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#digital-marketing" data-category-count={2}>
                        <span className="name">Digital Marketing</span>
                        <span className="num">02</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#identity" data-category-count={2}>
                        <span className="name">Identity</span>
                        <span className="num">01</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#illustation" data-category-count={1}>
                        <span className="name">Illustation</span>
                        <span className="num">00</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#illustration" data-category-count={2}>
                        <span className="name">Illustration</span>
                        <span className="num">00</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#online" data-category-count={6}>
                        <span className="name">Online</span>
                        <span className="num">05</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#photography" data-category-count={1}>
                        <span className="name">Photography</span>
                        <span className="num">01</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#production" data-category-count={1}>
                        <span className="name">Production</span>
                        <span className="num">00</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#social-media" data-category-count={12}>
                        <span className="name">Social media</span>
                        <span className="num">07</span>
                      </Link>
                    </li>
                    <li>
                      /
                      <Link to="#video-production" data-category-count={1}>
                        <span className="name">Video Production</span>
                        <span className="num">00</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Project Display Area */}
                <div
                  className="portfolio-grid vc_row"
                  data-lazy-container="projects"
                  data-isotope-grid="true"
                  data-projects-per-page={9}
                  data-tilt-effect="true"
                  style={{ position: "relative", height: "993.03px" }}
                >
                  {/* Project Box 1 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{ position: "absolute", left: "0%", top: "0px" }}
                  >
                    <div className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/1.jpg"
                          style={{
                            backgroundImage: 'url("/projects/1.jpg")',
                          }}
                        ></div>
                      </div>
                      <Link
                        to="#project/sun-sand-sports-up-to-70-off-campaign/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          Sun &amp; Sand Sports – Up to 70% Off campaign
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">360 Campaign</span>
                          <span className="category ">Online</span>
                          <span className="category ">Social media</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxOne}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 2 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{
                      position: "absolute",
                      left: "33.3028%",
                      top: "0px",
                    }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa219716"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/2.jpg"
                          style={{
                            backgroundImage: 'url("/projects/2.jpg")',
                          }}
                        ></div>
                      </div>
                      <Link
                        to="#project/president-cheese-festive-campaign/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          President Cheese – Festive Campaign
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">360 Campaign</span>
                          <span className="category ">Online</span>
                          <span className="category ">Social media</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxTwo}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 3 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-cd15df83c4baf65118eabbe9501a0c9d ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{
                      position: "absolute",
                      left: "66.6055%",
                      top: "0px",
                    }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa21b477"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/3.jpg"
                          style={{
                            backgroundImage: 'url("/projects/3.jpg")',
                          }}
                        ></div>
                      </div>
                      <Link
                        to="#project/mint-leaf-dubai/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          Mint Leaf – Dubai
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">Brochure Design</span>
                          <span className="category ">Social media</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxThree}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 4 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{ position: "absolute", left: "0%", top: "331px" }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa21d9da"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/4.jpg"
                          style={{
                            backgroundImage: 'url("/projects/4.jpg")',
                          }}
                        ></div>
                      </div>
                      <Link
                        to="#project/american-hospital-dubai-pediatric-campaign/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          American Hospital Dubai – Pediatric campaign
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">360 Campaign</span>
                          <span className="category ">Online</span>
                          <span className="category ">Social media</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxFour}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 5 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-cd15df83c4baf65118eabbe9501a0c9d"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{
                      position: "absolute",
                      left: "33.3028%",
                      top: "331px",
                    }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa22009b"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/5.jpg"
                          style={{
                            backgroundImage: 'url("/projects/5.jpg")',
                          }}
                        ></div>
                      </div>
                      <Link
                        to="#project/al-habtoor-polo-resort-brochure-design/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          Al Habtoor Polo Resort Brochure Design
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">Brochure Design</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxFive}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 6 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-cd15df83c4baf65118eabbe9501a0c9d ohio-filter-project-cd13c310d7d9b45f0f6ec039ffb81e3f ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{
                      position: "absolute",
                      left: "66.6055%",
                      top: "331px",
                    }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa2221c0"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/6.jpg"
                          style={{
                            backgroundImage: 'url("/projects/6.jpg")',
                          }}
                        ></div>
                        <div
                          className="ohio-video-module-sc video-module with-animation open-popup"
                          data-video-module="https://www.youtube.com/embed/6i6L3P2yM-A"
                        >
                          <div className="btn-play btn-round ">
                            <i className="ion ion-ios-play" />
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#project/the-watchbox-social-media/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          The WatchBox – Social Media Creatives
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">Brochure Design</span>
                          <span className="category ">Digital Marketing</span>
                          <span className="category ">Social media</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxSix}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 7 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-f0c5bbc5c9eb3d6564abb4bd6ad9e024 ohio-filter-project-cd13c310d7d9b45f0f6ec039ffb81e3f ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{ position: "absolute", left: "0%", top: "662px" }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa223ec4"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/7.jpg"
                          style={{
                            backgroundImage: 'url("/projects/7.jpg")',
                          }}
                        ></div>
                      </div>
                      <Link
                        to="#project/american_hospital_dubai_movember_campaign_1/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          American Hospital Dubai Movember Campaign
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">360 Campaign</span>
                          <span className="category ">Activation</span>
                          <span className="category ">Digital Marketing</span>
                          <span className="category ">Online</span>
                          <span className="category ">Social media</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxSeven}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 8 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-9700b583da84012babb046b2c0cd4c5c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{
                      position: "absolute",
                      left: "33.3028%",
                      top: "662px",
                    }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa22662e"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/8.jpg"
                          style={{
                            backgroundImage: 'url("/projects/8.jpg")',
                          }}
                        ></div>
                        <div
                          className="ohio-video-module-sc video-module with-animation open-popup"
                          data-video-module="https://www.youtube.com/embed/t67_zAg5vvI"
                        >
                          <div className="btn-play btn-round ">
                            <i className="ion ion-ios-play" />
                          </div>
                        </div>
                      </div>
                      <Link
                        to="#project/american-hospital-dubai-clinic-launch/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          American Hospital Dubai – Clinic Launch
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">360 Campaign</span>
                          <span className="category ">Online</span>
                          <span className="category ">Photography</span>
                          <span className="category ">Social media</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxEight}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* Project Box 9 */}
                  <div
                    className="portfolio-item-wrap masonry-block vc_col-lg-4 vc_col-md-6 vc_col-xs-12 ohio-project-item grid-item section ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246"
                    data-lazy-item
                    data-lazy-scope="projects"
                    style={{
                      position: "absolute",
                      left: "66.6055%",
                      top: "662px",
                    }}
                  >
                    <div
                      className="portfolio-item portfolio-item-grid portfolio-grid-type-2 parallax-holder metro-style boxed hover-parallax-img"
                      data-portfolio-popup="ohio-lightbox-643e5aa2287af"
                    >
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <div
                          className="portfolio-metro-image parallax"
                          data-ohio-bg-image="/projects/9.jpg"
                          style={{
                            backgroundImage: 'url("/projects/9.jpg")',
                          }}
                        ></div>
                      </div>
                      <Link
                        to="#project/itr-lubricants/"
                        data-cursor-class="cursor-link"
                        className="portfolio-item-details text-left"
                      >
                        <h3
                          className="portfolio-item-headline title "
                          id="studio3ServiceTitleH6"
                        >
                          ITR LUBRICANTS BRAND IDENTITY
                        </h3>
                        <div
                          className="category-holder"
                          id="studio3ServiceTitleH6"
                        >
                          <span className="category ">Identity</span>
                        </div>
                        <div className="show-project">
                          <div className="show-project-link">Show project </div>
                        </div>
                      </Link>
                      <div
                        className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                        tabIndex={1}
                        onClick={toggleClassProjectBoxNine}
                      >
                        <i
                          className="icon"
                          style={{ width: "46px", height: "46px" }}
                        >
                          <svg
                            className="default"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z" />
                          </svg>
                          <svg
                            className="minimal"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.427734 1.20793C0.427734 0.77758 0.776603 0.428711 1.20696 0.428711H5.10306C5.53341 0.428711 5.88228 0.77758 5.88228 1.20793C5.88228 1.63828 5.53341 1.98715 5.10306 1.98715H1.98618V5.10404C1.98618 5.53439 1.63731 5.88326 1.20696 5.88326C0.776603 5.88326 0.427734 5.53439 0.427734 5.10404V1.20793ZM12.116 1.20793C12.116 0.77758 12.4649 0.428711 12.8953 0.428711H16.7914C17.2217 0.428711 17.5706 0.77758 17.5706 1.20793V5.10404C17.5706 5.53439 17.2217 5.88326 16.7914 5.88326C16.361 5.88326 16.0121 5.53439 16.0121 5.10404V1.98715H12.8953C12.4649 1.98715 12.116 1.63828 12.116 1.20793ZM1.20696 12.117C1.63731 12.117 1.98618 12.4659 1.98618 12.8962V16.0131H5.10306C5.53341 16.0131 5.88228 16.362 5.88228 16.7923C5.88228 17.2227 5.53341 17.5716 5.10306 17.5716H1.20696C0.776603 17.5716 0.427734 17.2227 0.427734 16.7923V12.8962C0.427734 12.4659 0.776603 12.117 1.20696 12.117ZM16.7914 12.117C17.2217 12.117 17.5706 12.4659 17.5706 12.8962V16.7923C17.5706 17.2227 17.2217 17.5716 16.7914 17.5716H12.8953C12.4649 17.5716 12.116 17.2227 12.116 16.7923C12.116 16.362 12.4649 16.0131 12.8953 16.0131H16.0121V12.8962C16.0121 12.4659 16.361 12.117 16.7914 12.117Z"
                            />
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <nav className="pagination text-left">
                  <ul>
                    <li>
                      <Link to="#projects/" className="btn btn-link active">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link to="#projects/page/2/" className="btn btn-link">
                        2
                      </Link>
                    </li>
                    <li>
                      <Link to="#projects/page/2/" className="btn btn-link">
                        Next
                        <i className="ion-right ion ion-md-arrow-forward" />
                      </Link>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* Project One Dialog Box */}
      <div
        className={
          isDialoagProjectBoxOne
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        data-lazy-to-footer="true"
        data-lightbox-loaded="true"
      >
        <div className="clb-portfolio-lightbox-media">
          <div
            className="slider clb-slider"
            data-clb-portfolio-lightbox-slider
            data-slider-navigation={1}
            data-slider-pagination={1}
            data-slider-loop={1}
            data-slider-mousescroll={1}
            data-slider-autoplay={1}
            data-slider-autoplay-time={5000}
            data-slider-autoplay-pause=""
          >
            <div className="clb-slider-outer-stage">
              <div
                className="clb-slider-stage"
                style={{
                  transform: "translate(-4293.33px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/1.jpg")',
                  }}
                />
              </div>
              <div />
            </div>
            <div className="clb-slider-nav-btn">
              <div className="prev-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon arrow-icon-back"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="next-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="clb-slider-pagination">
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 01</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 02</span>
              </div>
              <div className="clb-slider-page active">
                <span className="clb-slider-pagination-index"> 03</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 04</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 05</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clb-portfolio-lightbox-details">
          <div className="close close-bar">
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
          <div className="project-page">
            <div
              className="project-page-content animated-holder"
              style={{ paddingTop: "12.8vh" }}
            >
              <div className="category-date">
                <div className="category-holder">
                  <span className="category" style={{ fontWeight: "600" }}>
                    <a href="https://studio3.ae/portfolio-category/360-campaign/">
                      360 Campaign
                    </a>
                  </span>
                  <span className="category" style={{ fontWeight: "600" }}>
                    <a href="https://studio3.ae/portfolio-category/online/">
                      Online
                    </a>
                  </span>
                  <span className="category" style={{ fontWeight: "600" }}>
                    <a href="https://studio3.ae/portfolio-category/social-media/">
                      Social media
                    </a>
                  </span>
                </div>
                <span className="date" style={{ fontWeight: "600" }}>
                  March 18, 2022
                </span>
              </div>
              <h3 className="project-page-headline">
                Sun &amp; Sand Sports – Up to 70% Off campaign
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Outdoor, Digital, Social Media, BTL, Radio</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Concept, Campaign Development</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>Sun &amp; Sand Sports</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/360-campaign/">
                      360 campaign
                    </a>
                    ,
                    <a href="https://studio3.ae/portfolio-tag/online/">
                      Online
                    </a>
                    ,
                    <a href="https://studio3.ae/portfolio-tag/outdoor/">
                      Outdoor
                    </a>
                    ,
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>
                  </p>
                </li>
              </ul>
              <Link
                to="#project/sun-sand-sports-up-to-70-off-campaign/"
                className="btn btn-link"
              >
                View Project
                <i className="ion-right ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </div>
        <div className="gallery-close" data-popup-close="true">
          <span className="ion-ios-close-empty" />
        </div>
      </div>
      {/* Project Two Dialog Box */}
      <div
        className={
          isDialoagProjectBoxTwo
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        data-lazy-to-footer="true"
        data-lightbox-loaded="true"
      >
        <div className="clb-portfolio-lightbox-media">
          <div
            className="slider clb-slider"
            data-clb-portfolio-lightbox-slider
            data-slider-navigation={1}
            data-slider-pagination={1}
            data-slider-loop={1}
            data-slider-mousescroll={1}
            data-slider-autoplay={1}
            data-slider-autoplay-time={5000}
            data-slider-autoplay-pause
          >
            <div className="clb-slider-outer-stage">
              <div
                className="clb-slider-stage"
                style={{
                  transform: "translate(-2453.33px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/2.jpg")',
                  }}
                />
              </div>
              <div />
            </div>
            <div className="clb-slider-nav-btn">
              <div className="prev-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon arrow-icon-back"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="next-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="clb-slider-pagination">
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 01</span>
              </div>
              <div className="clb-slider-page active">
                <span className="clb-slider-pagination-index"> 02</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 03</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clb-portfolio-lightbox-details">
          <div className="close close-bar">
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
          <div className="project-page">
            <div className="project-page-content animated-holder">
              <div className="category-date">
                <div className="category-holder">
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/360-campaign/">
                      360 Campaign
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/online/">
                      Online
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/social-media/">
                      Social media
                    </a>
                  </span>
                </div>
                <span className="date">December 1, 2022</span>
              </div>
              <h3 className="project-page-headline">
                President Cheese – Festive Campaign
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Online, Digital, Social Media, BTL</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Concept, Campaign Development</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>President Cheese</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/360-campaign/">
                      360 campaign
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/online/">
                      Online
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/president-cheese-festive-campaign/"
                className="btn btn-link"
              >
                View Project{" "}
                <i className="ion-right ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-close" data-popup-close="true">
          <span className="ion-ios-close-empty" />
        </div>
      </div>
      {/* Project Three Dialog Box */}
      <div
        className={
          isDialoagProjectBoxThree
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd1a021"
        data-lazy-to-footer="true"
      >
        <div className="clb-portfolio-lightbox-media">
          <div
            className="slider clb-slider"
            data-clb-portfolio-lightbox-slider
            data-slider-navigation={1}
            data-slider-pagination={1}
            data-slider-loop={1}
            data-slider-mousescroll={1}
            data-slider-autoplay={1}
            data-slider-autoplay-time={5000}
            data-slider-autoplay-pause
          >
            <div className="clb-slider-outer-stage">
              <div
                className="clb-slider-stage"
                style={{
                  transform: "translate(-3066.66px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/3.jpg")',
                  }}
                />
              </div>
              <div />
            </div>
            <div className="clb-slider-nav-btn">
              <div className="prev-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon arrow-icon-back"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="next-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="clb-slider-pagination">
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 01</span>
              </div>
              <div className="clb-slider-page active">
                <span className="clb-slider-pagination-index"> 02</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 03</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 04</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clb-portfolio-lightbox-details">
          <div className="close close-bar">
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
          <div className="project-page">
            <div className="project-page-content animated-holder">
              <div className="category-date">
                <div className="category-holder">
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/brochure-design/">
                      Brochure Design
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/social-media/">
                      Social media
                    </a>
                  </span>
                </div>
                <span className="date">June 3, 2019</span>
              </div>
              <h3 className="project-page-headline">Mint Leaf – Dubai</h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>BTL </p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Concept, Design and Artwork</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>Mint Leaf - Dubai</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/artwork/">
                      Artwork
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/brochure-design/">
                      Brochure Design
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/menu-design/">
                      Menu Design
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/typography/">
                      Typography
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/mint-leaf-dubai/"
                className="btn btn-link"
              >
                View Project{" "}
                <i className="ion-right ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-close" data-popup-close="true">
          <span className="ion-ios-close-empty" />
        </div>
      </div>
      {/* Project Four Dialog Box */}
      <div
        className={
          isDialoagProjectBoxFour
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd1ec2c"
        data-lazy-to-footer="true"
      >
        <div className="clb-portfolio-lightbox-media">
          <div
            className="slider clb-slider"
            data-clb-portfolio-lightbox-slider
            data-slider-navigation={1}
            data-slider-pagination={1}
            data-slider-loop={1}
            data-slider-mousescroll={1}
            data-slider-autoplay={1}
            data-slider-autoplay-time={5000}
            data-slider-autoplay-pause
          >
            <div className="clb-slider-outer-stage">
              <div
                className="clb-slider-stage"
                style={{
                  transform: "translate(-5520px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/4.jpg")',
                  }}
                />
              </div>
              <div />
            </div>
            <div className="clb-slider-nav-btn">
              <div className="prev-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon arrow-icon-back"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="next-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="clb-slider-pagination">
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 01</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 02</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 03</span>
              </div>
              <div className="clb-slider-page active">
                <span className="clb-slider-pagination-index"> 04</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 05</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 06</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clb-portfolio-lightbox-details">
          <div className="close close-bar">
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
          <div className="project-page">
            <div className="project-page-content animated-holder">
              <div className="category-date">
                <div className="category-holder">
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/360-campaign/">
                      360 Campaign
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/online/">
                      Online
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/social-media/">
                      Social media
                    </a>
                  </span>
                </div>
                <span className="date">June 3, 2019</span>
              </div>
              <h3 className="project-page-headline">
                American Hospital Dubai – Pediatric campaign
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Outdoor, Digital, Social Media, BTL</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Concept, Campaign Development</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>American Hospital Dubai</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/american-hospital/">
                      American Hospital
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/american-hospital-dubai-pediatric-campaign/"
                className="btn btn-link"
              >
                View Project{" "}
                <i className="ion-right ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-close" data-popup-close="true">
          <span className="ion-ios-close-empty" />
        </div>
      </div>
      {/* Project Fiv Dialog Box */}
      <div
        className={
          isDialoagProjectBoxFive
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd22950"
        data-lazy-to-footer="true"
      >
        <div className="clb-portfolio-lightbox-media">
          <div
            className="slider clb-slider"
            data-clb-portfolio-lightbox-slider
            data-slider-navigation={1}
            data-slider-pagination={1}
            data-slider-loop={1}
            data-slider-mousescroll={1}
            data-slider-autoplay={1}
            data-slider-autoplay-time={5000}
            data-slider-autoplay-pause
          >
            <div className="clb-slider-outer-stage">
              <div
                className="clb-slider-stage"
                style={{
                  transform: "translate(-4293.33px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/5.jpg")',
                  }}
                />
              </div>
              <div />
            </div>
            <div className="clb-slider-nav-btn">
              <div className="prev-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon arrow-icon-back"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="next-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="clb-slider-pagination">
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 01</span>
              </div>
              <div className="clb-slider-page active">
                <span className="clb-slider-pagination-index"> 02</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 03</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 04</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 05</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 06</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clb-portfolio-lightbox-details">
          <div className="close close-bar">
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
          <div className="project-page">
            <div className="project-page-content animated-holder">
              <div className="category-date">
                <div className="category-holder">
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/brochure-design/">
                      Brochure Design
                    </a>
                  </span>
                </div>
                <span className="date">June 3, 2019</span>
              </div>
              <h3 className="project-page-headline">
                Al Habtoor Polo Resort Brochure Design
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Print</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Concept, Design and Artwork</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>Al Habtoor Polo Resort</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/activation/">
                      Activation
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/brochure-design/">
                      Brochure Design
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/digital-activation/">
                      Digital Activation
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/digital-marketing/">
                      Digital Marketing
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/al-habtoor-polo-resort-brochure-design/"
                className="btn btn-link"
              >
                View Project{" "}
                <i className="ion-right ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-close" data-popup-close="true">
          <span className="ion-ios-close-empty" />
        </div>
      </div>
      {/* Project Six Dialog Box */}
      <div
        className={
          isDialoagProjectBoxSix
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd25a4e"
        data-lazy-to-footer="true"
      >
        <div class="clb-portfolio-lightbox-media">
          <div
            class="slider clb-slider"
            data-clb-portfolio-lightbox-slider=""
            data-slider-navigation="1"
            data-slider-pagination="1"
            data-slider-loop="1"
            data-slider-mousescroll="1"
            data-slider-autoplay="1"
            data-slider-autoplay-time="5000"
            data-slider-autoplay-pause=""
          >
            <div class="clb-slider-outer-stage">
              <div
                class="clb-slider-stage"
                style={{
                  transform: "translate(-3066.66px, 0px)",
                  transition: "none 0s ease 0s",
                }}
              >
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/6.jpg")',
                  }}
                ></div>
              </div>
              <div></div>
            </div>

            <div class="clb-slider-nav-btn">
              <div class="prev-btn btn-round" tabindex="0">
                <i class="ion">
                  <svg
                    class="arrow-icon arrow-icon-back"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </i>
              </div>
              <div class="next-btn btn-round" tabindex="0">
                <i class="ion">
                  <svg
                    class="arrow-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
            <div class="clb-slider-pagination">
              <div class="clb-slider-page active">
                <span class="clb-slider-pagination-index"> 01</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 02</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 03</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 04</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 05</span>
              </div>
            </div>
          </div>
        </div>
        <div class="clb-portfolio-lightbox-details">
          <div class="close close-bar">
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
          <div class="project-page">
            <div class="project-page-content animated-holder">
              <div class="category-date">
                <div class="category-holder">
                  <span class="category">
                    <a href="https://studio3.ae/portfolio-category/brochure-design/">
                      Brochure Design
                    </a>
                  </span>
                  <span class="category">
                    <a href="https://studio3.ae/portfolio-category/digital-marketing/">
                      Digital Marketing
                    </a>
                  </span>
                  <span class="category">
                    <a href="https://studio3.ae/portfolio-category/social-media/">
                      Social media
                    </a>
                  </span>
                </div>
                <span class="date">June 3, 2019</span>
              </div>
              <h3 class="project-page-headline">
                The WatchBox – Social Media Creatives
              </h3>
              <div class="project-description"></div>
              <ul class="project-meta">
                <li>
                  <h6 class="project-meta-title">Strategy</h6>
                  <p>Social Media, Online, Email Marketing</p>
                </li>
                <li>
                  <h6 class="project-meta-title">Design</h6>
                  <p>Creative Concept, Art direction, Animation</p>
                </li>
                <li>
                  <h6 class="project-meta-title">Client</h6>
                  <p>The WatchBox</p>
                </li>
                <li>
                  <h6 class="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/2d-animation/">
                      2D Animation
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/email-marketing/">
                      Email Marketing
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/html-emailer/">
                      HTML Emailer
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/the-watchbox-social-media/"
                class="btn btn-link"
              >
                View Project{" "}
                <i class="ion-right ion">
                  <svg
                    class="arrow-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div class="gallery-close" data-popup-close="true">
          <span class="ion-ios-close-empty"></span>
        </div>
      </div>
      {/* Project Seven Dialog Box */}
      <div
        className={
          isDialoagProjectBoxSeven
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd292e1"
        data-lazy-to-footer="true"
      >
        <div className="clb-portfolio-lightbox-media">
          <div
            className="slider clb-slider"
            data-clb-portfolio-lightbox-slider
            data-slider-navigation={1}
            data-slider-pagination={1}
            data-slider-loop={1}
            data-slider-mousescroll={1}
            data-slider-autoplay={1}
            data-slider-autoplay-time={5000}
            data-slider-autoplay-pause
          >
            <div className="clb-slider-outer-stage">
              <div
                className="clb-slider-stage"
                style={{
                  transform: "translate(-1840px, 0px)",
                  transition: "none 0s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/7.jpg")',
                  }}
                />
              </div>
              <div />
            </div>
            <div className="clb-slider-nav-btn">
              <div className="prev-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon arrow-icon-back"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="next-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="clb-slider-pagination">
              <div className="clb-slider-page active">
                <span className="clb-slider-pagination-index"> 01</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 02</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 03</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clb-portfolio-lightbox-details">
          <div className="close close-bar">
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
          <div className="project-page">
            <div className="project-page-content animated-holder">
              <div className="category-date">
                <div className="category-holder">
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/360-campaign/">
                      360 Campaign
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/activation/">
                      Activation
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/digital-marketing/">
                      Digital Marketing
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/online/">
                      Online
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/social-media/">
                      Social media
                    </a>
                  </span>
                </div>
                <span className="date">June 3, 2019</span>
              </div>
              <h3 className="project-page-headline">
                American Hospital Dubai Movember Campaign
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Digital, Social Media, BTL</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Concept, Campaign, Onsite and Digital Activation</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>American Hospital Dubai</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/activation/">
                      Activation
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/digital-activation/">
                      Digital Activation
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/digital-marketing/">
                      Digital Marketing
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/american_hospital_dubai_movember_campaign_1/"
                className="btn btn-link"
              >
                View Project{" "}
                <i className="ion-right ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-close" data-popup-close="true">
          <span className="ion-ios-close-empty" />
        </div>
      </div>
      {/* Project Eight Dialog Box */}
      <div
        className={
          isDialoagProjectBoxEight
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd2ce3d"
        data-lazy-to-footer="true"
      >
        <div class="clb-portfolio-lightbox-media">
          <div
            class="slider clb-slider"
            data-clb-portfolio-lightbox-slider=""
            data-slider-navigation="1"
            data-slider-pagination="1"
            data-slider-loop="1"
            data-slider-mousescroll="1"
            data-slider-autoplay="1"
            data-slider-autoplay-time="5000"
            data-slider-autoplay-pause=""
          >
            <div class="clb-slider-outer-stage">
              <div
                class="clb-slider-stage"
                style={{
                  transform: "translate(-4293.33px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/8.jpg")',
                  }}
                ></div>
              </div>
              <div></div>
            </div>

            <div class="clb-slider-nav-btn">
              <div class="prev-btn btn-round" tabindex="0">
                <i class="ion">
                  <svg
                    class="arrow-icon arrow-icon-back"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </i>
              </div>
              <div class="next-btn btn-round" tabindex="0">
                <i class="ion">
                  <svg
                    class="arrow-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
            <div class="clb-slider-pagination">
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 01</span>
              </div>
              <div class="clb-slider-page active">
                <span class="clb-slider-pagination-index"> 02</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 03</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 04</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 05</span>
              </div>
              <div class="clb-slider-page">
                <span class="clb-slider-pagination-index"> 06</span>
              </div>
            </div>
          </div>
        </div>
        <div class="clb-portfolio-lightbox-details">
          <div class="close close-bar">
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
          <div class="project-page">
            <div class="project-page-content animated-holder">
              <div class="category-date">
                <div class="category-holder">
                  <span class="category">
                    <a href="https://studio3.ae/portfolio-category/360-campaign/">
                      360 Campaign
                    </a>
                  </span>
                  <span class="category">
                    <a href="https://studio3.ae/portfolio-category/online/">
                      Online
                    </a>
                  </span>
                  <span class="category">
                    <a href="https://studio3.ae/portfolio-category/photography/">
                      Photography
                    </a>
                  </span>
                  <span class="category">
                    <a href="https://studio3.ae/portfolio-category/social-media/">
                      Social media
                    </a>
                  </span>
                </div>
                <span class="date">June 3, 2019</span>
              </div>
              <h3 class="project-page-headline">
                American Hospital Dubai – Clinic Launch
              </h3>
              <div class="project-description"></div>
              <ul class="project-meta">
                <li>
                  <h6 class="project-meta-title">Strategy</h6>
                  <p>Outdoor, Digital, Social Media, BTL</p>
                </li>
                <li>
                  <h6 class="project-meta-title">Design</h6>
                  <p>Concept, Campaign Development, Photoshoot</p>
                </li>
                <li>
                  <h6 class="project-meta-title">Client</h6>
                  <p>American Hospital Dubai</p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/american-hospital-dubai-clinic-launch/"
                class="btn btn-link"
              >
                View Project{" "}
                <i class="ion-right ion">
                  <svg
                    class="arrow-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div class="gallery-close" data-popup-close="true">
          <span class="ion-ios-close-empty"></span>
        </div>
      </div>
      {/* Project Nine Dialog Box */}
      <div
        className={
          isDialoagProjectBoxNine
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd30f19"
        data-lazy-to-footer="true"
      >
        <div className="clb-portfolio-lightbox-media">
          <div
            className="slider clb-slider"
            data-clb-portfolio-lightbox-slider
            data-slider-navigation={1}
            data-slider-pagination={1}
            data-slider-loop={1}
            data-slider-mousescroll={1}
            data-slider-autoplay={1}
            data-slider-autoplay-time={5000}
            data-slider-autoplay-pause
          >
            <div className="clb-slider-outer-stage">
              <div
                className="clb-slider-stage"
                style={{
                  transform: "translate(-2453.33px, 0px)",
                  transition: "none 0s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="/projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("/projects/9.jpg")',
                  }}
                />
              </div>
              <div />
            </div>
            <div className="clb-slider-nav-btn">
              <div className="prev-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon arrow-icon-back"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className="next-btn btn-round" tabIndex={0}>
                <i className="ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="clb-slider-pagination">
              <div className="clb-slider-page active">
                <span className="clb-slider-pagination-index"> 01</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 02</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 03</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 04</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clb-portfolio-lightbox-details">
          <div className="close close-bar">
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
          <div className="project-page">
            <div className="project-page-content animated-holder">
              <div className="category-date">
                <div className="category-holder">
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/identity/">
                      Identity
                    </a>
                  </span>
                </div>
                <span className="date">June 3, 2019</span>
              </div>
              <h3 className="project-page-headline">
                ITR LUBRICANTS BRAND IDENTITY
              </h3>
              <div className="project-description">
                We’ve created a unique visual system and strategy across the
                wide existing spectrum of visible mobile applications and found
                yourself in a wide, straggling with wainscots...{" "}
              </div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Print and Online</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Brand Guideline, Packaging, Website Development</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>ITR Middle East</p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/itr-lubricants/"
                className="btn btn-link"
              >
                View Project{" "}
                <i className="ion-right ion">
                  <svg
                    className="arrow-icon"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8H15M15 8L8.5 1.5M15 8L8.5 14.5"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery-close" data-popup-close="true">
          <span className="ion-ios-close-empty" />
        </div>
      </div>
      {/* Project Ten Dialog Box */}
    </div>
  );
};

export default Projects;
