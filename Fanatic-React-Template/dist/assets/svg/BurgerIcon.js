function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 28,
    height: 22,
    viewBox: "0 0 28 22"
  }, props), /*#__PURE__*/React.createElement("path", {
    "data-name": "Line 5",
    fill: "none",
    stroke: "#0b093b",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M1 1h26"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Line 6",
    fill: "none",
    stroke: "#0b093b",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M1 11h26"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Line 7",
    fill: "none",
    stroke: "#0b093b",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M1 21h26"
  }));
}
export default SvgComponent;