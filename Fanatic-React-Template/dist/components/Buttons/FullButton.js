import React from "react";
import styled from "styled-components";
export default function FullButton({
  title,
  action,
  border
}) {
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: "animate pointer radius8",
    onClick: action ? () => action() : null,
    border: border
  }, title);
}
const Wrapper = styled.button`
  border: 1px solid ${props => props.border ? "#707070" : "#7620ff"};
  background-color: ${props => props.border ? "transparent" : "#7620ff"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${props => props.border ? "#707070" : "#fff"};
  :hover {
    background-color: ${props => props.border ? "transparent" : "#580cd2"};
    border: 1px solid #7620ff;
    color: ${props => props.border ? "#7620ff" : "#fff"};
  }
`;