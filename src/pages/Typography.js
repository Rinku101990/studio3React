import React from "react";
import { Link } from "react-router-dom";
import Accordiontab from "../components/Accordiontab";

const Typography = () => {
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
                              Typography{" "}
                            </h3>
                          </div>
                          <div className="ohio-text-sc ">
                            <p>
                              <strong>
                                Quality Typography in Dubai Starts at Studio3
                              </strong>
                            </p>
                            <p>
                              Whether you need 2D typography or 3D typography,{" "}
                              <Link to="/">Studio3</Link> is available to
                              support your company’s needs. Having a typeface
                              that is unique for your company is one of the most
                              important things when it comes to representing the
                              business. A unique typeface will set you apart
                              from the other companies, give you instant brand
                              recognition, and can be woven into all your
                              professional materials. Let us show you how we can
                              aid you in developing typography for your
                              business.
                            </p>
                            <p>
                              <strong>Custom Designs</strong>
                            </p>
                            <p>
                              The first thing that Studio3 can perform for you
                              as a customer is by developing unique typography
                              designs. Some individuals, like artists, would
                              like a certain typeface made for them that sticks
                              out from the crowd and allows people to notice
                              them just by looking. Other times, companies of
                              all sizes would like to take part in 2D or 3D
                              typography to give their business a bold look that
                              is easily identifiable even in a crowded market.
                              While this isn’t directly branding, it is similar
                              to branding in many ways.
                            </p>
                            <p>
                              Our custom designs can capture the essence of your
                              business or a certain aspect of it, providing you
                              with a modern and easily transferrable script.
                            </p>
                            <p>
                              <strong>
                                2D and 3D Typography in Various Mediums
                              </strong>
                            </p>
                            <p>
                              Another great reason to use our company for your
                              typography needs is that we can work in several
                              different mediums. Some companies need work
                              performed in print media where they can send
                              flyers and leaflets to their clients. Other
                              companies are more interested in digital models of
                              their typography so they can reach audiences
                              online. No matter your needs, our dedicated staff
                              has the tools required to make this a reality by
                              delivering materials in any fashion you require.
                            </p>
                            <p>
                              <strong>Reflective of Your Brand</strong>
                            </p>
                            <p>
                              Typography isn’t just a way to make your texts
                              look fancy. It’s a way to instantly communicate a
                              certain tone to people. When considering this fact
                              in light of your overall branding, it’s important
                              to consider the interplay between the two. For
                              example, when we provide you with your typography,
                              it’s possible to integrate that into other
                              elements of your branding. Whether you want a
                              typeface that will match your logo, or you want a
                              logo redesign, Studio3 is here to give you the
                              best typography in Dubai. With a cohesive vision
                              for your business, we can provide you with
                              everything you require to generate a unified
                              brand, a sleek look, and a recognizable business.
                              Allow us to help your business in becoming a more
                              successful and whole company.
                            </p>
                            <p>
                              Whether you need a personal design or a cohesive
                              typeface for your entire business, we can help at
                              Studio3. Our professional and dedicated team will
                              develop a quality typeface that gives your company
                              a clean or artistic. From the moment that you
                              enter our offices at Business Bay, Dubai, UAE,
                              you’ll see how talented our creators are at making
                              words look and interact better than anyone else.
                              Get quality work no matter the deadline starting
                              right now.
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

export default Typography;
