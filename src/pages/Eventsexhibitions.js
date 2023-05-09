import React from "react";
import { Link } from "react-router-dom";
import Accordiontab from "../components/Accordiontab";

const Eventsexhibitions = () => {
  return (
    <div
      id="content"
      className="site-content"
      data-mobile-menu-resolution={768}
    >
      <div className="page-container">
        <div id="primary" className="content-area">
          <div className="page-content ">
            <main id="main" className="site-main">
              <article className="page type-page status-publish hentry">
                <div className="entry-content">
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          {/* START Advertising REVOLUTION SLIDER 6.3.4 */}
                          <rs-fullwidth-wrap
                            id="rev_slider_1_1_forcefullwidth"
                            style={{ marginTop: "0px", marginBottom: "0px" }}
                          >
                            <rs-module-wrap
                              id="rev_slider_1_1_wrapper"
                              data-source="gallery"
                              style={{
                                background: "transparent",
                                padding: "0px",
                                margin: "0px auto",
                                width: "1263px",
                                height: "600px",
                                visibility: "visible",
                                position: "absolute",
                                overflow: "visible",
                                left: "-107px",
                              }}
                            >
                              <rs-module
                                id="rev_slider_1_1"
                                style={{
                                  width: "1263px",
                                  height: "600px",
                                  maxHeight: "600px",
                                }}
                                data-version="6.3.4"
                                data-idcheck="true"
                                className="revslider-initialised rev_redraw_on_blurfocus"
                                data-slideactive="rs-2"
                              >
                                <rs-slides
                                  style={{
                                    visibility: "visible",
                                    maxHeight: "none",
                                    height: "100%",
                                    width: "100%",
                                    overflow: "hidden",
                                  }}
                                >
                                  <rs-slide
                                    data-key="rs-1"
                                    data-title="Slide"
                                    data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
                                    data-originalindex={1}
                                    data-origindex={0}
                                    data-description
                                    data-sba
                                    data-scroll-based="false"
                                    style={{
                                      overflow: "hidden",
                                      height: "100%",
                                      width: "100%",
                                      zIndex: 18,
                                      opacity: 0,
                                      visibility: "hidden",
                                    }}
                                    data-owidth={1240}
                                    data-oheight={600}
                                    data-rspausetimeronce={0}
                                    data-ntrid={0}
                                    data-isactiveslide="false"
                                  >
                                    <rs-sbg-px
                                      style={{ backgroundColor: "transparent" }}
                                    >
                                      <rs-sbg-wrap
                                        data-owidth={1240}
                                        data-oheight={600}
                                        style={{
                                          transformOrigin: "50% 50%",
                                          visibility: "inherit",
                                          opacity: 1,
                                          transform: "perspective(600px)",
                                        }}
                                      >
                                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="//studio3.ae/wp-content/uploads/2021/12/AHD_Advertisinga.jpg" title="AHD_Advertisinga" width="1240" height="600" class="rev-slidebg" data-no-retina="">*/}
                                        <rs-sbg
                                          src="/projects/AHD_Advertisinga.jpg"
                                          className
                                          data-bgcolor="transparent"
                                          style={{
                                            backgroundColor: "transparent",
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage:
                                              'url("/projects/AHD_Advertisinga.jpg")',
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1,
                                            transform: "translate(0px, 0px)",
                                            visibility: "inherit",
                                            zIndex: 20,
                                          }}
                                          data-src-rs-ref="/projects/AHD_Advertisinga.jpg"
                                        />
                                      </rs-sbg-wrap>
                                    </rs-sbg-px>
                                    {/**/}
                                  </rs-slide>
                                  <rs-slide
                                    data-key="rs-2"
                                    data-title="Slide"
                                    data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
                                    data-originalindex={2}
                                    data-origindex={1}
                                    data-description
                                    data-sba
                                    data-scroll-based="false"
                                    style={{
                                      overflow: "hidden",
                                      height: "100%",
                                      width: "100%",
                                      zIndex: 20,
                                      opacity: 1,
                                      visibility: "inherit",
                                    }}
                                    data-rspausetimeronce={0}
                                    data-ntrid={0}
                                    data-isactiveslide="true"
                                  >
                                    <rs-sbg-px
                                      style={{ backgroundColor: "transparent" }}
                                    >
                                      <rs-sbg-wrap
                                        style={{
                                          transformOrigin: "50% 50%",
                                          visibility: "inherit",
                                          opacity: 1,
                                          transform: "perspective(600px)",
                                        }}
                                      >
                                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="//studio3.ae/wp-content/uploads/2021/12/NBF_Advertising.jpg" title="NBF_Advertising" width="1240" height="600" class="rev-slidebg" data-no-retina="">*/}
                                        <rs-sbg
                                          src="https://studio3.ae/wp-content/uploads/2021/12/NBF_Advertising.jpg"
                                          className
                                          data-bgcolor="transparent"
                                          style={{
                                            backgroundColor: "transparent",
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage:
                                              'url("https://studio3.ae/wp-content/uploads/2021/12/NBF_Advertising.jpg")',
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 1,
                                            transform: "translate(0px, 0px)",
                                            visibility: "inherit",
                                            zIndex: 20,
                                          }}
                                          data-src-rs-ref="https://studio3.ae/wp-content/uploads/2021/12/NBF_Advertising.jpg"
                                        />
                                      </rs-sbg-wrap>
                                    </rs-sbg-px>
                                    {/**/}
                                  </rs-slide>
                                  <rs-slide
                                    data-key="rs-3"
                                    data-title="Slide"
                                    data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
                                    data-originalindex={3}
                                    data-origindex={2}
                                    data-description
                                    data-sba
                                    data-scroll-based="false"
                                    style={{
                                      overflow: "hidden",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <rs-sbg-px>
                                      <rs-sbg-wrap>
                                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="//studio3.ae/wp-content/uploads/2021/12/Alwahda_Mall_Advertising.jpg" title="Alwahda_Mall_Advertising" width="1240" height="600" class="rev-slidebg" data-no-retina="">*/}
                                        <rs-sbg
                                          src="https://studio3.ae/wp-content/uploads/2021/12/Alwahda_Mall_Advertising.jpg"
                                          className
                                          data-bgcolor="transparent"
                                          style={{
                                            backgroundColor: "transparent",
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage:
                                              "url(https://studio3.ae/wp-content/uploads/2021/12/Alwahda_Mall_Advertising.jpg)",
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 0,
                                          }}
                                        />
                                      </rs-sbg-wrap>
                                    </rs-sbg-px>
                                    {/**/}
                                  </rs-slide>
                                  <rs-slide
                                    data-key="rs-4"
                                    data-title="Advertising"
                                    data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
                                    data-originalindex={4}
                                    data-origindex={3}
                                    data-description
                                    data-sba
                                    data-scroll-based="false"
                                    style={{
                                      overflow: "hidden",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <rs-sbg-px>
                                      <rs-sbg-wrap>
                                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="//studio3.ae/wp-content/uploads/2021/12/AHD_Advertising.jpg" title="AHD_Advertising" width="1240" height="600" class="rev-slidebg" data-no-retina="">*/}
                                        <rs-sbg
                                          src="https://studio3.ae/wp-content/uploads/2021/12/AHD_Advertising.jpg"
                                          className
                                          data-bgcolor="transparent"
                                          style={{
                                            backgroundColor: "transparent",
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage:
                                              "url(https://studio3.ae/wp-content/uploads/2021/12/AHD_Advertising.jpg)",
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 0,
                                          }}
                                        />
                                      </rs-sbg-wrap>
                                    </rs-sbg-px>
                                    {/**/}
                                  </rs-slide>
                                  <rs-slide
                                    data-key="rs-45"
                                    data-title="Slide"
                                    data-anim="ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"
                                    data-originalindex={5}
                                    data-origindex={4}
                                    data-description
                                    data-sba
                                    data-scroll-based="false"
                                    style={{
                                      overflow: "hidden",
                                      height: "100%",
                                      width: "100%",
                                    }}
                                  >
                                    <rs-sbg-px>
                                      <rs-sbg-wrap>
                                        {/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="//studio3.ae/wp-content/uploads/2021/12/SCB_Advertising.jpg" title="SCB_Advertising" width="1240" height="600" class="rev-slidebg" data-no-retina="">*/}
                                        <rs-sbg
                                          src="https://studio3.ae/wp-content/uploads/2021/12/SCB_Advertising.jpg"
                                          className
                                          data-bgcolor="transparent"
                                          style={{
                                            backgroundColor: "transparent",
                                            backgroundRepeat: "no-repeat",
                                            backgroundImage:
                                              "url(https://studio3.ae/wp-content/uploads/2021/12/SCB_Advertising.jpg)",
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%",
                                            width: "100%",
                                            height: "100%",
                                            opacity: 0,
                                          }}
                                        />
                                      </rs-sbg-wrap>
                                    </rs-sbg-px>
                                    {/**/}
                                  </rs-slide>
                                </rs-slides>
                                <rs-progress style={{ visibility: "hidden" }}>
                                  <rs-progress-bar
                                    style={{
                                      background: "rgba(255, 255, 255, 0.5)",
                                      transformOrigin: "0% 50%",
                                      transform:
                                        "translate3d(0px, 0px, 0px) scale(0.5717, 1)",
                                    }}
                                  />
                                </rs-progress>
                              </rs-module>
                            </rs-module-wrap>
                            <rs-fw-forcer style={{ height: "600px" }} />
                          </rs-fullwidth-wrap>
                          {/* END REVOLUTION SLIDER */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-2">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper" />
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-8">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div
                            className="vc_empty_space"
                            style={{ height: "32px" }}
                          >
                            <span className="vc_empty_space_inner" />
                          </div>
                          <div className="ohio-heading-sc heading text-left">
                            <h3 className="title" style={{ color: "#000000" }}>
                              Events &amp; Exhibitions{" "}
                            </h3>
                          </div>
                          <div className="ohio-text-sc ">
                            <p>
                              <strong>Events and Exhibitions at Studio3</strong>
                            </p>
                            <p>
                              Whether there is a larger expo that you want to be
                              a part of, or you have the chance to set up some
                              form of the base of operations at an event,{" "}
                              <Link to="/">Studio3</Link> can help you. Our
                              creative agency located in Business Bay, Dubai,
                              UAE is the key to developing unforgettable and
                              informative presences at events. We can design a
                              customized, completely reusable area that can be
                              used to inform potential clients of your new
                              products or to educate them about existing ones.
                              Let us show you how we can help your company get
                              established at exhibitions today.
                            </p>
                            <p>
                              <strong>We Set Up Corporate Exhibitions</strong>
                            </p>
                            <p>
                              One of the first ways that Studio3 can help other
                              companies is by establishing a company’s presence
                              at an exhibition in Dubai and beyond. Since our
                              offices are in Dubai and it’s one of the
                              fastest-growing cities, we know that companies
                              want to be involved with the major expos that take
                              place here. We have the knowledge to help you get
                              the permissions required to establish any sort of
                              booth or display that you’d like. Additionally, we
                              can make sure to use every bit of space to
                              optimize the overall impact that you’re able to
                              have on the potential clients that visit you at
                              the show.
                            </p>
                            <p>
                              <strong>
                                Studio3 Can Plan and Develop Events
                              </strong>
                            </p>
                            <p>
                              Studio3 is an expert at helping you plan events
                              for your company as an individual entity. If
                              you’re opening the doors to your business for a
                              day and want customers to have a place to learn
                              more about your products and work, we can help.
                              Studio3 has incredibly dedicated individuals
                              working all the time to work with your floor plan
                              and budget to provide you with a great area to
                              host guests. You don’t just get a basic experience
                              with our company, though. We will help you provide
                              a memorable experience for all the potential
                              customers, so they know who to call when they need
                              your services.
                            </p>
                            <p>
                              <strong>
                                Maintain Brand and Company Vision{" "}
                              </strong>
                            </p>
                            <p>
                              Lastly, Studio3 has experts in everything from
                              signage and typography to videos and branding. We
                              can make any event truly memorable by providing
                              your event with any combination of these services,
                              tying everything together. We have everything that
                              you will need under one roof at Studio3. Our
                              company will be there with you every step of the
                              way, so you have signs, matching logos, and color
                              schemes for all of your merchandise and products
                              that you plan to give away. All this and more are
                              waiting for you after a brief consultation with
                              our hardworking staff.
                            </p>
                            <p>
                              Gaining the trust of customers can be challenging
                              if all you have is a stall at a larger exhibition.
                              If you have the room, then we can provide a
                              customized company area in which you can meet
                              people, sample products, and educate customers all
                              under one “roof.” Our dedicated staff works hard
                              to provide quality outcomes that meet all your
                              needs while also addressing your company’s
                              deadlines. Give us the chance to impress you with
                              our expertise today!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-2">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper" />
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div
                            className="vc_empty_space"
                            style={{ height: "50px" }}
                          >
                            <span className="vc_empty_space_inner" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-2">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper" />
                      </div>
                    </div>
                    <Accordiontab />
                    <div className="wpb_column vc_column_container vc_col-sm-2">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper" />
                      </div>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                          <div
                            className="vc_empty_space"
                            style={{ height: "40px" }}
                          >
                            <span className="vc_empty_space_inner" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Area */}
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
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventsexhibitions;
