function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 27,
    height: 40,
    viewBox: "0 0 27 40"
  }, props), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 101",
    transform: "translate(-375 -21)"
  }, /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 16",
    width: 13,
    height: 8,
    rx: 4,
    transform: "translate(375 53)",
    fill: "#f40051"
  }), /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 11",
    width: 20,
    height: 8,
    rx: 4,
    transform: "translate(382 21)",
    fill: "#f2b300"
  }), /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 15",
    width: 20,
    height: 8,
    rx: 4,
    transform: "translate(382 37)",
    fill: "#7620ff"
  }), /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 12",
    width: 8,
    height: 8,
    rx: 4,
    transform: "translate(375 29)",
    fill: "#4cd5c5"
  })));
}
export default SvgComponent;