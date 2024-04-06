import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";
export default function PricingTable({
  icon,
  price,
  title,
  text,
  offers,
  action
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
    className: "whiteBg radius8 shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexSpaceCenter"
  }, getIcon, /*#__PURE__*/React.createElement("p", {
    className: "font30 extraBold"
  }, price)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "30px 0"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font30 extraBold"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "font13"
  }, text)), /*#__PURE__*/React.createElement("div", null, offers ? offers.map((item, index) => /*#__PURE__*/React.createElement("div", {
    className: "flexNullCenter",
    style: {
      margin: "15px 0"
    },
    key: index
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      top: "-1px",
      marginRight: "15px"
    }
  }, item.cheked ? /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: "20px"
    }
  }, /*#__PURE__*/React.createElement(CheckMark, null)) : /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: "20px"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "font20 extraBold"
  }, item.name))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "120px",
      margin: "30px auto 0 auto"
    }
  }, /*#__PURE__*/React.createElement(FullButton, {
    title: "Buy",
    action: action
  })));
}
const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;