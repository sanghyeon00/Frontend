import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sidebar, {
    sidebarOpen: sidebarOpen,
    toggleSidebar: toggleSidebar
  }), sidebarOpen && /*#__PURE__*/React.createElement(Backdrop, {
    toggleSidebar: toggleSidebar
  }), /*#__PURE__*/React.createElement(Wrapper, {
    className: "flexCenter animate whiteBg",
    style: y > 100 ? {
      height: "60px"
    } : {
      height: "80px"
    }
  }, /*#__PURE__*/React.createElement(NavInner, {
    className: "container flexSpaceCenter"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "pointer flexNullCenter",
    to: "home",
    smooth: true
  }, /*#__PURE__*/React.createElement(LogoIcon, null), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginLeft: "15px"
    },
    className: "font20 extraBold"
  }, "iSoda")), /*#__PURE__*/React.createElement(BurderWrapper, {
    className: "pointer",
    onClick: () => toggleSidebar(!sidebarOpen)
  }, /*#__PURE__*/React.createElement(BurgerIcon, null)), /*#__PURE__*/React.createElement(UlWrapper, {
    className: "flexNullCenter"
  }, /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    activeClass: "active",
    style: {
      padding: "10px 15px"
    },
    to: "home",
    spy: true,
    smooth: true,
    offset: -80
  }, "\uD648")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    activeClass: "active",
    style: {
      padding: "10px 15px"
    },
    to: "services",
    spy: true,
    smooth: true,
    offset: -80
  }, "\uC77C\uAE30")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    activeClass: "active",
    style: {
      padding: "10px 15px"
    },
    to: "projects",
    spy: true,
    smooth: true,
    offset: -80
  }, "\uC77C\uAE30")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    activeClass: "active",
    style: {
      padding: "10px 15px"
    },
    to: "blog",
    spy: true,
    smooth: true,
    offset: -80
  }, "\uCEE4\uBBA4\uB2C8\uD2F0")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    activeClass: "active",
    style: {
      padding: "10px 15px"
    },
    to: "pricing",
    spy: true,
    smooth: true,
    offset: -80
  }, "\uC11C\uBE44\uC2A4 \uC18C\uAC1C")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement(Link, {
    activeClass: "active",
    style: {
      padding: "10px 15px"
    },
    to: "contact",
    spy: true,
    smooth: true,
    offset: -80
  }, "1:1 \uC0C1\uB2F4"))), /*#__PURE__*/React.createElement(UlWrapperRight, {
    className: "flexNullCenter"
  }, /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      padding: "10px 30px 10px 0"
    }
  }, "\uB85C\uADF8\uC778")), /*#__PURE__*/React.createElement("li", {
    className: "semiBold font15 pointer flexCenter"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "radius8 lightBg",
    style: {
      padding: "10px 15px"
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))))));
}
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;