import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Cursor from "./components/cursor";
import { Route, Routes, Router } from "react-router-dom";
import Layout from "./components/Layout";
import Services from "./pages/ServicePage";
import About from "./pages/AboutPage";
import HireDevelopers from "./pages/HireDevelopersPage";
import Industries from "./components/Industries";
import Portfolio from "./pages/PortfolioPage";
import CaseStudies from "./pages/CaseStudiesPage";
import Contact from "./pages/ContactUsPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="hire-developers" element={<HireDevelopers />} />
          <Route path="industries" element={<Industries />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
