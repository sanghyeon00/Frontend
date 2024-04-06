import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
export default function Services() {
  return /*#__PURE__*/React.createElement(Wrapper, {
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lightBg",
    style: {
      padding: "50px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(ClientSlider, null))), /*#__PURE__*/React.createElement("div", {
    className: "whiteBg",
    style: {
      padding: "60px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(HeaderInfo, null, /*#__PURE__*/React.createElement("h1", {
    className: "font40 extraBold"
  }, "Our Awesome Services"), /*#__PURE__*/React.createElement("p", {
    className: "font13"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", /*#__PURE__*/React.createElement("br", null), "labore et dolore magna aliquyam erat, sed diam voluptua.")), /*#__PURE__*/React.createElement(ServiceBoxRow, {
    className: "flex"
  }, /*#__PURE__*/React.createElement(ServiceBoxWrapper, null, /*#__PURE__*/React.createElement(ServiceBox, {
    icon: "roller",
    title: "Graphic Design",
    subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  })), /*#__PURE__*/React.createElement(ServiceBoxWrapper, null, /*#__PURE__*/React.createElement(ServiceBox, {
    icon: "monitor",
    title: "Web Design",
    subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
  })), /*#__PURE__*/React.createElement(ServiceBoxWrapper, null, /*#__PURE__*/React.createElement(ServiceBox, {
    icon: "browser",
    title: "Development",
    subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  })), /*#__PURE__*/React.createElement(ServiceBoxWrapper, null, /*#__PURE__*/React.createElement(ServiceBox, {
    icon: "printer",
    title: "Print",
    subtitle: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lightBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Advertising, {
    className: "flexSpaceCenter"
  }, /*#__PURE__*/React.createElement(AddLeft, null, /*#__PURE__*/React.createElement("h4", {
    className: "font15 semiBold"
  }, "A few words about company"), /*#__PURE__*/React.createElement("h2", {
    className: "font40 extraBold"
  }, "A Study of Creativity"), /*#__PURE__*/React.createElement("p", {
    className: "font12"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."), /*#__PURE__*/React.createElement(ButtonsRow, {
    className: "flexNullCenter",
    style: {
      margin: "30px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "190px"
    }
  }, /*#__PURE__*/React.createElement(FullButton, {
    title: "Get Started",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "190px",
      marginLeft: "15px"
    }
  }, /*#__PURE__*/React.createElement(FullButton, {
    title: "Contact Us",
    action: () => alert("clicked"),
    border: true
  })))), /*#__PURE__*/React.createElement(AddRight, null, /*#__PURE__*/React.createElement(AddRightInner, null, /*#__PURE__*/React.createElement("div", {
    className: "flexNullCenter"
  }, /*#__PURE__*/React.createElement(AddImgWrapp1, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement("img", {
    src: AddImage1,
    alt: "office"
  })), /*#__PURE__*/React.createElement(AddImgWrapp2, null, /*#__PURE__*/React.createElement("img", {
    src: AddImage2,
    alt: "office"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flexNullCenter"
  }, /*#__PURE__*/React.createElement(AddImgWrapp3, null, /*#__PURE__*/React.createElement("img", {
    src: AddImage3,
    alt: "office"
  })), /*#__PURE__*/React.createElement(AddImgWrapp4, null, /*#__PURE__*/React.createElement("img", {
    src: AddImage4,
    alt: "office"
  }))))))))));
}
const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;