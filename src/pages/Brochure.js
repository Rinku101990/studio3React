import React from "react";
import { Link } from "react-router-dom";
import Accordiontab from "../components/Accordiontab";

const Brochure = () => {
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
                              Brochure Design{" "}
                            </h3>
                          </div>
                          <div className="ohio-text-sc ">
                            <p>
                              <strong>Brochure Design Company in Dubai</strong>
                            </p>
                            <p>
                              When you’re considering how to get the attention
                              of customers or provide information to existing
                              ones, it’s often best to utilize brochures,
                              flyers, and leaflets. At{" "}
                              <Link to="/">Studio3</Link>, we have a team of
                              artists and marketing geniuses that will assist
                              you with every aspect of leaflet design and flyer
                              design. We’ll work with you to develop the message
                              that you want to send, and then make it a reality
                              no matter when your deadlines may be.
                            </p>
                            <p>
                              <strong>
                                Use Our Brochure Design Company in Dubai for All
                                Purposes
                              </strong>
                            </p>
                            <p>
                              Most companies have very different needs as they
                              pertain to brochures and other similar media. For
                              example, some companies need corporate information
                              that is easily digestible and compact for events.
                              Others want to have flyer designs ready for their
                              marketing requirements or as an ongoing
                              publication. No matter what you need from our
                              brochure company, we can help you reach your
                              goals. We have a skilled team ready to show you
                              leaflet designs that will reach your clients and
                              strike the right tone.
                            </p>
                            <p>
                              <strong>
                                Multimedia Leaflet and Brochure Designs
                                Available
                              </strong>
                            </p>
                            <p>
                              Not all leaflet designs are something that you
                              would like printed on paper. Sometimes, you would
                              like to have a piece that doubles as an internet
                              advertisement and can still be printed.
                              Fortunately, our amazing flyer design team has the
                              ability to create new materials that can be used
                              in whatever medium in which you would like to
                              work. Individual print, digital, or as part of a
                              larger print product, our flyers can be integrated
                              anywhere.
                            </p>
                            <p>
                              <strong>
                                Artistic Visions for Leaflet and Flyer Design
                              </strong>
                            </p>
                            <p>
                              Studio3 has focused on being able to deliver
                              quality products with more than a hint of artistic
                              vision. When our team does your flyer design,
                              you’ll see more than a mix of colors or styles,
                              you’ll also get tactile high-end brochures that
                              will be more than a simple brochure. They will be
                              works of art.
                            </p>
                            <p>
                              <strong>Maintaining Your Brand at Studio3</strong>
                            </p>
                            <p>
                              Brand awareness is something of a specialty at
                              Studio3. As such, all of the leaflet designs and
                              flyer designs will be adjusted so that they fall
                              in line with your existing brand. We can help you
                              decide on a color scheme, integrate logos, and
                              much more. Even if you haven’t done much branding
                              for your company, that is a service that we offer
                              at our business as well. Allow us to help you
                              design a brochure that will do more than provide
                              clients information. It will also show them that
                              you are a fully developed company that cares as
                              much about your presentation as you do the
                              services you provide.
                            </p>
                            <p>
                              Getting involved with flyer design and leaflet
                              design doesn’t have to be complicated. We have the
                              tools and expertise that you need to create
                              successful materials at our brochure design
                              company in Dubai. Our dedicated staff is here to
                              make the process as simple as possible and give
                              you the outcomes that you need to get your
                              business even more notice as a quality brand.
                              Start today by contacting Studio3 so we can guide
                              you.
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

export default Brochure;
