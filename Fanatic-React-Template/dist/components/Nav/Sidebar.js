import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
export default function Sidebar({
  sidebarOpen,
  toggleSidebar
}) {
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: "animate darkBg",
    sidebarOpen: sidebarOpen
  }, /*#__PURE__*/React.createElement(SidebarHeader, {
    className: "flexSpaceCenter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexNullCenter"
  }, /*#__PURE__*/React.createElement(LogoIcon, null), /*#__PURE__*/React.createElement("h1", {
    className: "whiteColor font20",
    style: {
      marginLeft: "15px"
    }
  }, "fanatic")), /*#__PURE__*/React.createElement(CloseBtn, {
    onClick: () => toggleSidebar(!sidebarOpen),
    className: "animate pointer"
  }, /*#__PURE__*/React.createElement(CloseIcon, null))), /*#__PURE__*/React.createElement(UlStyle, {
    className: "flexNullCenter flexColumn"
  }, /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: () => toggleSidebar(!sidebarOpen),
    activeClass: "active",
    className: "whiteColor",
    style: {
      padding: "10px 15px"
    },
    to: "home",
    spy: true,
    smooth: true,
    offset: -60
  }, "Home")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: () => toggleSidebar(!sidebarOpen),
    activeClass: "active",
    className: "whiteColor",
    style: {
      padding: "10px 15px"
    },
    to: "services",
    spy: true,
    smooth: true,
    offset: -60
  }, "Services")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: () => toggleSidebar(!sidebarOpen),
    activeClass: "active",
    className: "whiteColor",
    style: {
      padding: "10px 15px"
    },
    to: "projects",
    spy: true,
    smooth: true,
    offset: -60
  }, "Projects")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: () => toggleSidebar(!sidebarOpen),
    activeClass: "active",
    className: "whiteColor",
    style: {
      padding: "10px 15px"
    },
    to: "blog",
    spy: true,
    smooth: true,
    offset: -60
  }, "Blog")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: () => toggleSidebar(!sidebarOpen),
    activeClass: "active",
    className: "whiteColor",
    style: {
      padding: "10px 15px"
    },
    to: "pricing",
    spy: true,
    smooth: true,
    offset: -60
  }, "Pricing")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    onClick: () => toggleSidebar(!sidebarOpen),
    activeClass: "active",
    className: "whiteColor",
    style: {
      padding: "10px 15px"
    },
    to: "contact",
    spy: true,
    smooth: true,
    offset: -60
  }, "Contact"))), /*#__PURE__*/React.createElement(UlStyle, {
    className: "flexSpaceCenter"
  }, /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      padding: "10px 30px 10px 0"
    },
    className: "whiteColor"
  }, "Log in")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer flexCenter"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "radius8 lightBg",
    style: {
      padding: "10px 15px"
    }
  }, "Get Started"))));
}
const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${props => props.sidebarOpen ? "0px" : "-400px"};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;