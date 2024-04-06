import React from "react";
import styled from "styled-components";
export default function BlogBox({
  tag,
  title,
  text,
  action,
  author
}) {
  return /*#__PURE__*/React.createElement(WrapperBtn, {
    className: "animate pointer",
    onClick: action ? () => action() : null
  }, /*#__PURE__*/React.createElement(Wrapper, {
    className: "whiteBg radius8 shadow"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font20 extraBold"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "font13",
    style: {
      padding: "30px 0"
    }
  }, text), /*#__PURE__*/React.createElement("p", {
    className: "font13 extraBold"
  }, author), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("p", {
    className: "tag coralBg radius6 font13 extraBold"
  }, tag))));
}
const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;