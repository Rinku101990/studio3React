import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import "./Layout.css";
import "./f9sf9.css";
// import "./dialog.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// Service Pages
import Advertising from "./pages/Advertising";
import Marketing from "./pages/Marketing";
import Brochure from "./pages/Brochure";
import Branding from "./pages/Branding";
import Socialmedia from "./pages/Socialmedia";
import Webdevelopment from "./pages/Webdevelopment";
import Illustration from "./pages/Illustration";
import Typography from "./pages/Typography";
import Printretail from "./pages/Printretail";
import Videoproduction from "./pages/Videoproduction";
import Eventsexhibitions from "./pages/Eventsexhibitions";
import Corporategifts from "./pages/Corporategifts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="services" element={<Services />} />
            <Route path="contact-us" element={<Contact />} />
            {/* Services URL */}
            <Route path="services/advertising" element={<Advertising />} />
            <Route path="services/direct-marketing" element={<Marketing />} />
            <Route path="services/brochure-design" element={<Brochure />} />
            <Route path="services/branding" element={<Branding />} />
            <Route path="services/social-media" element={<Socialmedia />} />
            <Route
              path="services/web-development"
              element={<Webdevelopment />}
            />
            <Route path="services/illustration" element={<Illustration />} />
            <Route path="services/typography" element={<Typography />} />
            <Route path="services/print-retail" element={<Printretail />} />
            <Route
              path="services/video-production"
              element={<Videoproduction />}
            />
            <Route
              path="services/events-exhibition"
              element={<Eventsexhibitions />}
            />
            <Route
              path="services/corporate-gifts"
              element={<Corporategifts />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
