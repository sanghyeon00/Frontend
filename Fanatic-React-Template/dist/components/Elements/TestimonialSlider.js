import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";
export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Slider, settings, /*#__PURE__*/React.createElement(LogoWrapper, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement(TestimonialBox, {
    text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
    author: "Ralph Waldo Emerson"
  })), /*#__PURE__*/React.createElement(LogoWrapper, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement(TestimonialBox, {
    text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
    author: "Ralph Waldo Emerson"
  })), /*#__PURE__*/React.createElement(LogoWrapper, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement(TestimonialBox, {
    text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
    author: "Ralph Waldo Emerson"
  })), /*#__PURE__*/React.createElement(LogoWrapper, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement(TestimonialBox, {
    text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
    author: "Ralph Waldo Emerson"
  })), /*#__PURE__*/React.createElement(LogoWrapper, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement(TestimonialBox, {
    text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
    author: "Ralph Waldo Emerson"
  })), /*#__PURE__*/React.createElement(LogoWrapper, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement(TestimonialBox, {
    text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
    author: "Ralph Waldo Emerson"
  }))));
}
const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;