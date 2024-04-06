function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 23.335,
    height: 23.335
  }, props), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 99",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Rectangle 58",
    d: "M21.213 0l2.121 2.121L2.121 23.335 0 21.213z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Rectangle 59",
    d: "M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z"
  })));
}
export default SvgComponent;