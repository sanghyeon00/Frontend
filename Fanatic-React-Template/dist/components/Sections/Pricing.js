import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";
export default function Pricing() {
  return /*#__PURE__*/React.createElement(Wrapper, {
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whiteBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(HeaderInfo, null, /*#__PURE__*/React.createElement("h1", {
    className: "font40 extraBold"
  }, "Check Our Pricing"), /*#__PURE__*/React.createElement("p", {
    className: "font13"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", /*#__PURE__*/React.createElement("br", null), "labore et dolore magna aliquyam erat, sed diam voluptua.")), /*#__PURE__*/React.createElement(TablesWrapper, {
    className: "flexSpaceNull"
  }, /*#__PURE__*/React.createElement(TableBox, null, /*#__PURE__*/React.createElement(PricingTable, {
    icon: "roller",
    price: "$29,99/mo",
    title: "Starter",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    offers: [{
      name: "Product Offer",
      cheked: true
    }, {
      name: "Offer",
      cheked: true
    }, {
      name: "Product Offer #2",
      cheked: false
    }, {
      name: "Product",
      cheked: false
    }, {
      name: "Product Offer",
      cheked: false
    }],
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement(TableBox, null, /*#__PURE__*/React.createElement(PricingTable, {
    icon: "monitor",
    price: "$49,99/mo",
    title: "Basic",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    offers: [{
      name: "Product Offer",
      cheked: true
    }, {
      name: "Offer",
      cheked: true
    }, {
      name: "Product Offer #2",
      cheked: true
    }, {
      name: "Product",
      cheked: true
    }, {
      name: "Product Offer",
      cheked: false
    }],
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement(TableBox, null, /*#__PURE__*/React.createElement(PricingTable, {
    icon: "browser",
    price: "$59,99/mo",
    title: "Golden",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    offers: [{
      name: "Product Offer",
      cheked: true
    }, {
      name: "Offer",
      cheked: true
    }, {
      name: "Product Offer #2",
      cheked: true
    }, {
      name: "Product",
      cheked: true
    }, {
      name: "Product Offer",
      cheked: true
    }],
    action: () => alert("clicked")
  }))))));
}
const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;