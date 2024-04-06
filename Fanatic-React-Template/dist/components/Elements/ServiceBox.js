import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
export default function ServiceBox({
  icon,
  title,
  subtitle
}) {
  let getIcon;
  switch (icon) {
    case "roller":
      getIcon = /*#__PURE__*/React.createElement(RollerIcon, null);
      break;
    case "monitor":
      getIcon = /*#__PURE__*/React.createElement(MonitorIcon, null);
      break;
    case "browser":
      getIcon = /*#__PURE__*/React.createElement(BrowserIcon, null);
      break;
    case "printer":
      getIcon = /*#__PURE__*/React.createElement(PrinterIcon, null);
      break;
    default:
      getIcon = /*#__PURE__*/React.createElement(RollerIcon, null);
      break;
  }
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: "flex flexColumn"
  }, /*#__PURE__*/React.createElement(IconStyle, null, getIcon), /*#__PURE__*/React.createElement(TitleStyle, {
    className: "font20 extraBold"
  }, title), /*#__PURE__*/React.createElement(SubtitleStyle, {
    className: "font13"
  }, subtitle));
}
const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;