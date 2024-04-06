function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18.641,
    height: 12.607
  }, props), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 77",
    fill: "#49cb86"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Rectangle 40",
    d: "M16.52 0l2.122 2.529L6.63 12.607l-2.122-2.529z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Rectangle 41",
    d: "M9.16 10.485L6.63 12.607.001 4.705 2.53 2.583z"
  })));
}
export default SvgComponent;