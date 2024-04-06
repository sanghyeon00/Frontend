import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
export default function Landing() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopNavbar, null), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Blog, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}