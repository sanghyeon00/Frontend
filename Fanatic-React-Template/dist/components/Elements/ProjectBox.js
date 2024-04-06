import React from "react";
import styled from "styled-components";
export default function ProjectBox({
  img,
  title,
  text,
  action
}) {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(ImgBtn, {
    className: "aniamte pointer",
    onClick: action ? () => action() : null
  }, /*#__PURE__*/React.createElement("img", {
    className: "radius8",
    src: img,
    alt: "project"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font20 extraBold"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "font13"
  }, text));
}
const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;