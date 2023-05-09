import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeaderTwo from "./HeaderTwo";

const Layout = () => {
  const currentPath = window.location.pathname;
  var redirectPath;
  if (currentPath === "/") {
    redirectPath = <Header />;
  } else {
    redirectPath = <HeaderTwo />;
  }

  return (
    <>
      {redirectPath}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
