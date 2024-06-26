import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";
export default function Projects() {
  return /*#__PURE__*/React.createElement(Wrapper, {
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "whiteBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(HeaderInfo, null, /*#__PURE__*/React.createElement("h1", {
    className: "font40 extraBold"
  }, "Our Awesome Projects"), /*#__PURE__*/React.createElement("p", {
    className: "font13"
  }, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut", /*#__PURE__*/React.createElement("br", null), "labore et dolore magna aliquyam erat, sed diam voluptua.")), /*#__PURE__*/React.createElement("div", {
    className: "row textCenter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ProjectBox, {
    img: ProjectImg1,
    title: "Awesome Project",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ProjectBox, {
    img: ProjectImg2,
    title: "Awesome Project",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ProjectBox, {
    img: ProjectImg3,
    title: "Awesome Project",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    action: () => alert("clicked")
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row textCenter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ProjectBox, {
    img: ProjectImg4,
    title: "Awesome Project",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ProjectBox, {
    img: ProjectImg5,
    title: "Awesome Project",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    action: () => alert("clicked")
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"
  }, /*#__PURE__*/React.createElement(ProjectBox, {
    img: ProjectImg6,
    title: "Awesome Project",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
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
    className: "lightBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Advertising, {
    className: "flexSpaceCenter"
  }, /*#__PURE__*/React.createElement(AddLeft, null, /*#__PURE__*/React.createElement(AddLeftInner, null, /*#__PURE__*/React.createElement(ImgWrapper, {
    className: "flexCenter"
  }, /*#__PURE__*/React.createElement("img", {
    className: "radius8",
    src: AddImage2,
    alt: "add"
  })))), /*#__PURE__*/React.createElement(AddRight, null, /*#__PURE__*/React.createElement("h4", {
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
  }))))))));
}
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;