import React from "react";

const Branding = () => {
  return (
    <div
      id="content"
      className="site-content"
      data-mobile-menu-resolution={768}
    >
      <div className="clb-blank">
        <div className="clb-blank-image">
          <svg
            fill="#000000"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "40px", height: "40px" }}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z"></path>
              <path d="M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z"></path>
            </g>
          </svg>
        </div>
        <h4 className="clb-blank-headline">
          404. The page you are looking for does not exist.{" "}
        </h4>
        <p className="clb-blank-details">Tell us what you are looking for:</p>
        <div className="clb-blank-search">
          <form
            role="search"
            className="search search-form"
            action="#"
            method="GET"
          >
            <label>
              <span className="screen-reader-text">Search for</span>
              <input
                autoComplete="off"
                type="text"
                className="search-field"
                name="s"
                placeholder="Search..."
              />
            </label>
            <button type="submit" className="search search-submit">
              <i className="ion ion-md-search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Branding;
