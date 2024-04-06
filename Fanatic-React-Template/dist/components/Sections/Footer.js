import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement("div", {
    className: "darkBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(InnerWrapper, {
    className: "flexSpaceCenter",
    style: {
      padding: "30px 0"
    }
  }, /*#__PURE__*/React.createElement(Link, {
    className: "flexCenter animate pointer",
    to: "home",
    smooth: true,
    offset: -80
  }, /*#__PURE__*/React.createElement(LogoImg, null), /*#__PURE__*/React.createElement("h1", {
    className: "font15 extraBold whiteColor",
    style: {
      marginLeft: "15px"
    }
  }, "Fanatic")), /*#__PURE__*/React.createElement(StyleP, {
    className: "whiteColor font13"
  }, "\xA9 ", getCurrentYear(), " - ", /*#__PURE__*/React.createElement("span", {
    className: "purpleColor font13"
  }, "Fanatic"), " All Right Reserved"), /*#__PURE__*/React.createElement(Link, {
    className: "whiteColor animate pointer font13",
    to: "home",
    smooth: true,
    offset: -80
  }, "Back to top")))));
}
const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;