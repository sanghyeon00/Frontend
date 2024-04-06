import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
export default function Blog() {
  return /*#__PURE__*/React.createElement(Wrapper, {
    id: "blog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whiteBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(HeaderInfo, null, /*#__PURE__*/React.createElement("h1", {
    className: "font40 extraBold"
  }, "Our Blog Stories"), /*#__PURE__*/React.createElement("p", {
    className: "font13"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", /*#__PURE__*/React.createElement("br", null), "labore et dolore magna aliquyam erat, sed diam voluptua.")), /*#__PURE__*/React.createElement("div", {
    className: "row textCenter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(BlogBox, {
    title: "New Office!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    tag: "company",
    author: "Luke Skywalker, 2 days ago",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(BlogBox, {
    title: "New Office!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    tag: "company",
    author: "Luke Skywalker, 2 days ago",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(BlogBox, {
    title: "New Office!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    tag: "company",
    author: "Luke Skywalker, 2 days ago",
    action: () => alert("clicked")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row textCenter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(BlogBox, {
    title: "New Office!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    tag: "company",
    author: "Luke Skywalker, 2 days ago",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(BlogBox, {
    title: "New Office!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    tag: "company",
    author: "Luke Skywalker, 2 days ago",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(BlogBox, {
    title: "New Office!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    tag: "company",
    author: "Luke Skywalker, 2 days ago",
    action: () => alert("clicked")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row flexCenter"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "50px 0",
      width: "200px"
    }
  }, /*#__PURE__*/React.createElement(FullButton, {
    title: "Load More",
    action: () => alert("clicked")
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "lightBg",
    style: {
      padding: '50px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(HeaderInfo, null, /*#__PURE__*/React.createElement("h1", {
    className: "font40 extraBold"
  }, "What They Say?"), /*#__PURE__*/React.createElement("p", {
    className: "font13"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", /*#__PURE__*/React.createElement("br", null), "labore et dolore magna aliquyam erat, sed diam voluptua.")), /*#__PURE__*/React.createElement(TestimonialSlider, null))));
}
const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;