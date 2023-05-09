import { React, useState } from "react";

const Projects = () => {
  // Dialog Project Box One
  const [isDialoagBox, setDialogBox] = useState(false);
  const toggleClassBoxOne = () => {
    setDialogBox(!isDialoagBox);
  };
  // Dialog Project Box Two
  const [isDialoagBoxTwo, setDialogBoxTwo] = useState(false);
  const toggleClassBoxTwo = () => {
    setDialogBoxTwo(!isDialoagBoxTwo);
  };
  // Dialog Project Three
  const [isDialoagBoxThree, setDialogBoxThree] = useState(false);
  const toggleClassBoxThree = () => {
    setDialogBoxThree(!isDialoagBoxThree);
  };
  // Dialog Project Four
  const [isDialoagBoxFour, setDialogBoxFour] = useState(false);
  const toggleClassBoxFour = () => {
    setDialogBoxFour(!isDialoagBoxFour);
  };
  // Dialog Project Five
  const [isDialoagBoxFive, setDialogBoxFive] = useState(false);
  const toggleClassBoxFive = () => {
    setDialogBoxFive(!isDialoagBoxFive);
  };
  // Dialog Project Six
  const [isDialoagBoxSix, setDialogBoxSix] = useState(false);
  const toggleClassBoxSix = () => {
    setDialogBoxSix(!isDialoagBoxSix);
  };
  // Dialog Project Seven
  const [isDialoagBoxSeven, setDialogBoxSeven] = useState(false);
  const toggleClassBoxSeven = () => {
    setDialogBoxSeven(!isDialoagBoxSeven);
  };
  // Dialog Project Eight
  const [isDialoagBoxEight, setDialogBoxEight] = useState(false);
  const toggleClassBoxEight = () => {
    setDialogBoxEight(!isDialoagBoxEight);
  };
  // Dialog Project Nine
  const [isDialoagBoxNine, setDialogBoxNine] = useState(false);
  const toggleClassBoxNine = () => {
    setDialogBoxNine(!isDialoagBoxNine);
  };
  // Dialog Project Ten
  const [isDialoagBoxTen, setDialogBoxTen] = useState(false);
  const toggleClassBoxTen = () => {
    setDialogBoxTen(!isDialoagBoxTen);
  };
  // Dialog Project Eleventh
  const [isDialoagBoxEleventh, setDialogBoxEleventh] = useState(false);
  const toggleClassBoxEleventh = () => {
    setDialogBoxEleventh(!isDialoagBoxEleventh);
  };
  // Dialog Project Twelfth
  const [isDialoagBoxTwelfth, setDialogBoxTwelfth] = useState(false);
  const toggleClassBoxTwelfth = () => {
    setDialogBoxTwelfth(!isDialoagBoxTwelfth);
  };
  // Dialog Project Thirteenth
  const [isDialoagBoxThirteenth, setDialogBoxThirteenth] = useState(false);
  const toggleClassBoxThirteenth = () => {
    setDialogBoxThirteenth(!isDialoagBoxThirteenth);
  };
  // Dialog Project Fourteenth
  const [isDialoagBoxFourteenth, setDialogBoxFourteenth] = useState(false);
  const toggleClassBoxFourteenth = () => {
    setDialogBoxFourteenth(!isDialoagBoxFourteenth);
  };

  return (
    <div className="vc_row wpb_row vc_row-fluid clb__light_section">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="vc_row wpb_row vc_inner vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="vc_empty_space  clb__section_spacer"
                      style={{ height: "12vh" }}
                    >
                      <span className="vc_empty_space_inner" />
                    </div>
                    <div
                      className="ohio-heading-sc heading clb__heading text-left aos-init aos-animate"
                      id="ohio-custom-643e5aa16e200"
                      data-aos="fade-up"
                    >
                      <p className="subtitle" style={{ color: "#000" }}>
                        01 // Showcase
                      </p>
                      <h2
                        className="title subtitle-top"
                        style={{ color: "#000" }}
                      >
                        Selected
                        <br />
                        projects
                      </h2>
                    </div>
                    <div className="vc_empty_space" style={{ height: "10px" }}>
                      <span className="vc_empty_space_inner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div
                      className="vc_empty_space  clb__section_spacer vc_hidden-xs"
                      style={{ height: "12vh" }}
                    >
                      <span className="vc_empty_space_inner" />
                    </div>
                    <div
                      className="ohio-text-sc aos-init aos-animate"
                      id="ohio-custom-643e5aa16e30e"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <p>
                        We are passionate about developing custom
                        <strong>
                          &nbsp;digital marketing and advertising solutions
                        </strong>
                        to accelerate your business growth beyond the set goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ohio-recent-projects-sc grid_11 "
              data-aos-once="true"
            >
              {/* Filters */}
              <div
                className="vc_row  portfolio-grid"
                data-isotope-grid="true"
                data-lazy-container="projects"
                data-tilt-effect="true"
                style={{ position: "relative", height: "3840.12px" }}
              >
                {/* Image Box 1 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "0%", top: "0px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/sun-sand-sports-up-to-70-off-campaign/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/1.jpg"
                          alt="Sun & Sand Sports – Up to 70% Off campaign"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        Sun &amp; Sand Sports – Up to 70% Off campaign
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/online/">
                            Online
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxOne}
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
                      {/* <i
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
                      </i> */}
                    </div>
                  </div>
                </div>
                {/* Image Box 2 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "49.9747%", top: "0px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/president-cheese-festive-campaign/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/2.jpg"
                          alt="President Cheese – Festive Campaign"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        President Cheese – Festive Campaign
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/online/">
                            Online
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxTwo}
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
                {/* Image Box 3 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-cd15df83c4baf65118eabbe9501a0c9d ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "0%", top: "523px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/mint-leaf-dubai/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img src="projects/3.jpg" alt="Mint Leaf – Dubai" />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        Mint Leaf – Dubai
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/brochure-design/">
                            Brochure Design
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxThree}
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
                {/* Image Box 4 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{
                    position: "absolute",
                    left: "49.9747%",
                    top: "606px",
                  }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/american-hospital-dubai-pediatric-campaign/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/4.jpg"
                          alt="American Hospital Dubai – Pediatric campaign"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        American Hospital Dubai – Pediatric campaign
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/online/">
                            Online
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxFour}
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
                {/* Image Box 5 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-cd15df83c4baf65118eabbe9501a0c9d"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "0%", top: "1045px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/al-habtoor-polo-resort-brochure-design/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/5.jpg"
                          alt="Al Habtoor Polo Resort Brochure Design"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        Al Habtoor Polo Resort Brochure Design
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/brochure-design/">
                            Brochure Design
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxFive}
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
                {/* Image Box 6 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-cd15df83c4baf65118eabbe9501a0c9d ohio-filter-project-cd13c310d7d9b45f0f6ec039ffb81e3f ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{
                    position: "absolute",
                    left: "49.9747%",
                    top: "1213px",
                  }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="project/the-watchbox-social-media/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/6.jpg"
                          alt="The WatchBox – Social Media Creatives"
                        />
                        <div
                          className="ohio-video-module-sc video-module with-animation open-popup"
                          data-video-module="https://www.youtube.com/embed/6i6L3P2yM-A"
                        >
                          <div className="btn-play btn-round ">
                            <i className="ion ion-ios-play" />
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        The WatchBox – Social Media Creatives
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/brochure-design/">
                            Brochure Design
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/digital-marketing/">
                            Digital Marketing
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxSix}
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
                {/* Image Box 7 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-f0c5bbc5c9eb3d6564abb4bd6ad9e024 ohio-filter-project-cd13c310d7d9b45f0f6ec039ffb81e3f ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "0%", top: "1652px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/american_hospital_dubai_movember_campaign_1/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/7.jpg"
                          alt="American Hospital Dubai Movember Campaign"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        American Hospital Dubai Movember Campaign
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/activation/">
                            Activation
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/digital-marketing/">
                            Digital Marketing
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/online/">
                            Online
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxSeven}
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
                {/* Image Box 8 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-9700b583da84012babb046b2c0cd4c5c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{
                    position: "absolute",
                    left: "49.9747%",
                    top: "1820px",
                  }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/american-hospital-dubai-clinic-launch/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/8.jpg"
                          alt="American Hospital Dubai – Clinic Launch"
                        />
                        <div
                          className="ohio-video-module-sc video-module with-animation open-popup"
                          data-video-module="https://www.youtube.com/embed/t67_zAg5vvI"
                        >
                          <div className="btn-play btn-round">
                            <i
                              className="icon"
                              style={{ width: "62px", height: "62px" }}
                            >
                              <svg
                                className="default"
                                width={13}
                                height={20}
                                viewBox="0 0 13 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 20L13 10L0 0V20Z" />
                              </svg>
                              <svg
                                className="minimal"
                                width={17}
                                height={20}
                                viewBox="0 0 17 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                />
                              </svg>
                            </i>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        American Hospital Dubai – Clinic Launch
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/online/">
                            Online
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/photography/">
                            Photography
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxEight}
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
                {/* Image Box 9 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "0%", top: "2259px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/itr-lubricants/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/9.jpg"
                          alt="ITR LUBRICANTS BRAND IDENTITY"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        ITR LUBRICANTS BRAND IDENTITY
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/identity/">
                            Identity
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxNine}
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
                {/* Image Box 10 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-cd15df83c4baf65118eabbe9501a0c9d ohio-filter-project-445f9aaad6a0d45b7f0c4e673b0c3b2d"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{
                    position: "absolute",
                    left: "49.9747%",
                    top: "2342px",
                  }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/rosewood-abu-dhabi-festive-brochure/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/10.jpg"
                          alt="Rosewood Abu Dhabi – Festive Brochure"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        Rosewood Abu Dhabi – Festive Brochure
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/brochure-design/">
                            Brochure Design
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/illustration/">
                            Illustration
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxTen}
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
                {/* Image Box 11 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-2ec9e9be8bed1ffe0ed8144a3f59c246"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "0%", top: "2571px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/sunartek_website/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          className
                          src="projects/11.jpg"
                          alt="Sunartek Website"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        Sunartek Website
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/identity/">
                            Identity
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxEleventh}
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
                {/* Image Box 12 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-efd4a08008b3c6db0d6b9bdf79a3ad7c ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{
                    position: "absolute",
                    left: "49.9747%",
                    top: "2865px",
                  }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/details-with-left-gallery/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/12.jpg"
                          alt="AHD Psychiatry Department Campaign"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        AHD Psychiatry Department Campaign
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/online/">
                            Online
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxTwelfth}
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
                {/* Image Box 13 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-f0c5bbc5c9eb3d6564abb4bd6ad9e024 ohio-filter-project-600178f1a9eb784fea90dae07c8f93c7 ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{ position: "absolute", left: "0%", top: "3177px" }}
                >
                  <div className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay">
                    <a href="#project/diseno-de-moda/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/13.jpg"
                          alt="American Hospital Dubai – Breast Cancer Campaign"
                        />
                        <div
                          className="ohio-video-module-sc video-module with-animation open-popup"
                          data-video-module="https://www.youtube.com/embed/t67_zAg5vvI"
                        >
                          <div className="btn-play btn-round ">
                            <i
                              className="icon"
                              style={{ width: "62px", height: "62px" }}
                            >
                              <svg
                                className="default"
                                width={13}
                                height={20}
                                viewBox="0 0 13 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0 20L13 10L0 0V20Z" />
                              </svg>
                              <svg
                                className="minimal"
                                width={17}
                                height={20}
                                viewBox="0 0 17 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M0.766274 0.442678C0.998698 0.312329 1.26165 0.24625 1.52808 0.25124C1.79452 0.256229 2.05481 0.332105 2.28219 0.471065L15.78 8.72C15.9993 8.85399 16.1804 9.04206 16.3061 9.26618C16.4318 9.4903 16.4978 9.74295 16.4978 9.99991C16.4978 10.2569 16.4318 10.5095 16.3061 10.7336C16.1804 10.9578 15.9993 11.1458 15.78 11.2798L2.28219 19.5288C2.05481 19.6677 1.79451 19.7436 1.52808 19.7486C1.26165 19.7536 0.9987 19.6875 0.766274 19.5571C0.533848 19.4268 0.340346 19.2369 0.205669 19.0069C0.0709916 18.777 1.3411e-07 18.5153 0 18.2488V1.75098C1.3411e-07 1.48449 0.0709911 1.22282 0.205669 0.992883C0.340347 0.76294 0.533849 0.573027 0.766274 0.442678ZM14.9978 9.99991L1.5 1.75098L1.5 18.2488L14.9978 9.99991Z"
                                />
                              </svg>
                            </i>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        American Hospital Dubai – Breast Cancer Campaign
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/activation/">
                            Activation
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/production/">
                            Production
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxThirteenth}
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
                {/* Image Box 14 */}
                <div
                  className="portfolio-item-wrap masonry-block grid-item vc_col-lg-6 vc_col-md-6 vc_col-xs-12 ohio-project-item ohio-filter-project-ef06d01955945f487cff5e8dde5e4604 ohio-filter-project-f0c5bbc5c9eb3d6564abb4bd6ad9e024 ohio-filter-project-5091376a7ad8eaf7885bd9db33d08d23 ohio-filter-project-d474ce4eed6761c77ae5767f9151ade9"
                  data-lazy-item
                  data-lazy-scope="projects"
                  style={{
                    position: "absolute",
                    left: "49.9747%",
                    top: "3472px",
                  }}
                >
                  <div
                    className="portfolio-item portfolio-item-grid portfolio-grid-type-11  hover-color-overlay"
                    // data-portfolio-popup="ohio-lightbox-643e5aa1a7f8e"
                  >
                    <a href="#project/details-with-bottom-gallery/">
                      <div className="portfolio-item-image ">
                        {/* Project image */}
                        <img
                          src="projects/14.jpg"
                          alt="American Hospital Dubai 25 Years Campaign"
                        />
                      </div>
                    </a>
                    {/* <div
                      className="portfolio-item-details text-left"
                      style={{ transform: "translate(0px, 0px)" }}
                    >
                      <h3 className="portfolio-item-headline title ">
                        American Hospital Dubai 25 Years Campaign
                      </h3>
                      <div className="category-holder">
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/360-campaign/">
                            360 Campaign
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/activation/">
                            Activation
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/brand-identity/">
                            Brand Identity
                          </a>
                        </span>
                        <span className="category ">
                          <a href="https://studio3.ae/portfolio-category/social-media/">
                            Social media
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div
                      className="btn-lightbox btn-round btn-round-outline btn-round-small btn-round-light"
                      tabIndex={1}
                      onClick={toggleClassBoxFourteenth}
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
              {/* Pagination */}
            </div>
            <div className="vc_empty_space" style={{ height: "20px" }}>
              <span className="vc_empty_space_inner" />
            </div>
            <div className="ohio-button-sc btn-wrap text-left">
              <a
                href="/projects"
                className="btn  btn-link"
                id="studio3CustomBtnLink"
              >
                <span
                  className="text"
                  style={{
                    color: "#000",
                    backgroundColor: "#fff",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Explore the Showcase
                </span>
                <i class="icon -right">
                  <svg
                    class="default"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"></path>
                  </svg>
                  <svg
                    class="minimal"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 8C0 7.58579 0.335786 7.25 0.75 7.25H17.25C17.6642 7.25 18 7.58579 18 8C18 8.41421 17.6642 8.75 17.25 8.75H0.75C0.335786 8.75 0 8.41421 0 8Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.96967 0.71967C10.2626 0.426777 10.7374 0.426777 11.0303 0.71967L17.7803 7.46967C18.0732 7.76256 18.0732 8.23744 17.7803 8.53033L11.0303 15.2803C10.7374 15.5732 10.2626 15.5732 9.96967 15.2803C9.67678 14.9874 9.67678 14.5126 9.96967 14.2197L16.1893 8L9.96967 1.78033C9.67678 1.48744 9.67678 1.01256 9.96967 0.71967Z"
                    ></path>
                  </svg>
                </i>
              </a>
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

      {/* Project One Dialog Box */}
      <div
        className={
          isDialoagBox
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
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/1.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/1.jpg")',
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
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/online/">
                      Online
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/outdoor/">
                      Outdoor
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/sun-sand-sports-up-to-70-off-campaign/"
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
      {/* Project Two Dialog Box */}
      <div
        className={
          isDialoagBoxTwo
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
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/2.jpg")',
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
          isDialoagBoxThree
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
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/3.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/3.jpg")',
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
          isDialoagBoxFour
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
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/4.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/4.jpg")',
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
          isDialoagBoxFive
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
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/5.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/5.jpg")',
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
          isDialoagBoxSix
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
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/6.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/6.jpg")',
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
          isDialoagBoxSeven
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
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/7.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/7.jpg")',
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
          isDialoagBoxEight
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
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
                  }}
                ></div>
                <div
                  class="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/8.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/8.jpg")',
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
          isDialoagBoxNine
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
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/9.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/9.jpg")',
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
      <div
        className={
          isDialoagBoxTen
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd33d61"
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
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/10.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/10.jpg")',
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
                    <a href="https://studio3.ae/portfolio-category/brochure-design/">
                      Brochure Design
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/illustration/">
                      Illustration
                    </a>
                  </span>
                </div>
                <span className="date">June 3, 2019</span>
              </div>
              <h3 className="project-page-headline">
                Rosewood Abu Dhabi – Festive Brochure
              </h3>
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
                  <p>Rosewood Abu Dhabi </p>
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
                href="https://studio3.ae/project/rosewood-abu-dhabi-festive-brochure/"
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
      {/* Project Ellavan Dialog Box */}
      <div
        className={
          isDialoagBoxEleventh
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd35e4c"
        data-lazy-to-footer="true"
      >
        <div class="clb-portfolio-lightbox-media">
          <div
            class="slider"
            data-slider-navigation="1"
            data-slider-pagination="1"
            data-slider-loop="1"
            data-slider-mousescroll="1"
            data-slider-autoplay="1"
            data-slider-autoplay-time="5000"
            data-slider-autoplay-pause=""
          >
            <div
              class="portfolio-lightbox-image"
              data-ohio-lightbox-image="projects/11.jpg"
              style={{
                minWidth: "613.333px",
                marginRight: "0px",
                backgroundImage: 'url("projects/11.jpg")',
              }}
            ></div>
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
                    <a href="https://studio3.ae/portfolio-category/identity/">
                      Identity
                    </a>
                  </span>
                </div>
                <span class="date">June 3, 2019</span>
              </div>
              <h3 class="project-page-headline">Sunartek Website</h3>
              <div class="project-description">
                We’ve created a unique visual system and strategy across the
                wide existing spectrum of visible mobile applications and found
                yourself in a wide, straggling with wainscots...{" "}
              </div>
              <ul class="project-meta">
                <li>
                  <h6 class="project-meta-title">Strategy</h6>
                  <p>Online</p>
                </li>
                <li>
                  <h6 class="project-meta-title">Design</h6>
                  <p>Concept, Design, Content, Coding, UI/UX, SEO </p>
                </li>
                <li>
                  <h6 class="project-meta-title">Client</h6>
                  <p>Sunartek, Singapore</p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/sunartek_website/"
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
      {/* Project Twelve Dialog Box */}
      <div
        className={
          isDialoagBoxTwelfth
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd39176"
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
                  transform: "translate(-4906.66px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item next-slide"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/12.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/12.jpg")',
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
                AHD Psychiatry Department Campaign
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Digital, Social Media, BTL</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Creative Concept, Campaign Development, Digital</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Client</h6>
                  <p>American Hospital Dubai</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Tags</h6>
                  <p>
                    <a href="https://studio3.ae/portfolio-tag/360-campaign/">
                      360 campaign
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/american-hospital/">
                      American Hospital
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/hospital-creative/">
                      Hospital Creative
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/online/">
                      Online
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-meda/">
                      Social Meda
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/details-with-left-gallery/"
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
      {/* Project Thirtin Dialog Box */}
      <div
        className={
          isDialoagBoxThirteenth
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd3ccb7"
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
                  transform: "translate(-6746.66px, 0px)",
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/13_2.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13_2.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/13.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/13.jpg")',
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
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 04</span>
              </div>
              <div className="clb-slider-page">
                <span className="clb-slider-pagination-index"> 05</span>
              </div>
              <div className="clb-slider-page active">
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
                    <a href="https://studio3.ae/portfolio-category/activation/">
                      Activation
                    </a>
                  </span>
                  <span className="category">
                    <a href="https://studio3.ae/portfolio-category/production/">
                      Production
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
                American Hospital Dubai – Breast Cancer Campaign
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Digital, Social Media, BTL</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>Creative Concept, Art direction, Onsite Activation </p>
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
                    <a href="https://studio3.ae/portfolio-tag/digital-marketing/">
                      Digital Marketing
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/installation/">
                      Installation
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/production/">
                      Production
                    </a>
                    ,{" "}
                    <a href="https://studio3.ae/portfolio-tag/social-media/">
                      Social Media
                    </a>{" "}
                  </p>
                </li>
              </ul>
              <a
                href="https://studio3.ae/project/diseno-de-moda/"
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
      {/* Project Forteen Dialog Box */}
      <div
        className={
          isDialoagBoxFourteenth
            ? "clb-popup clb-portfolio-lightbox visible"
            : "clb-popup clb-portfolio-lightbox"
        }
        id="ohio-lightbox-6451fcfd3d907"
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
                  transition: "all 1s ease 0s",
                }}
              >
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/14.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/14.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/14.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/14.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item prev-slide"
                  data-ohio-lightbox-image="projects/14.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/14.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item active"
                  data-ohio-lightbox-image="projects/14.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/14.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned next-slide"
                  data-ohio-lightbox-image="projects/14.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/14.jpg")',
                  }}
                />
                <div
                  className="portfolio-lightbox-image clb-slider-item cloned"
                  data-ohio-lightbox-image="projects/14.jpg"
                  style={{
                    minWidth: "613.333px",
                    marginRight: "0px",
                    backgroundImage: 'url("projects/14.jpg")',
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
                    <a href="https://studio3.ae/portfolio-category/brand-identity/">
                      Brand Identity
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
                American Hospital Dubai 25 Years Campaign
              </h3>
              <div className="project-description"></div>
              <ul className="project-meta">
                <li>
                  <h6 className="project-meta-title">Strategy</h6>
                  <p>Outdoor, Print, Digital, Social Media, BTL</p>
                </li>
                <li>
                  <h6 className="project-meta-title">Design</h6>
                  <p>logo Creation, Creative Concept, BTL</p>
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
                href="https://studio3.ae/project/details-with-bottom-gallery/"
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
      {/* Dialog Box End */}
    </div>
  );
};

export default Projects;
