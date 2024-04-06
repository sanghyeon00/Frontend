import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";
export default function TestimonialBox({
  text,
  author
}) {
  return /*#__PURE__*/React.createElement(Wrapper, {
    className: "darkBg radius8 flexNullCenter flexColumn"
  }, /*#__PURE__*/React.createElement(QuoteWrapper, null, /*#__PURE__*/React.createElement(QuoteIcon, null)), /*#__PURE__*/React.createElement("p", {
    className: "whiteColor font13",
    style: {
      paddingBottom: "30px"
    }
  }, text), /*#__PURE__*/React.createElement("p", {
    className: "orangeColor font13",
    style: {
      alignSelf: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("em", null, author)));
}
const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;