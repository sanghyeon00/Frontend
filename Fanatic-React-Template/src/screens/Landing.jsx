import React, { useState } from "react";
import styled, { css } from 'styled-components';

// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

import ChatBot from "../components/Sections/ChatBot";
import chatboticon from '../assets/img/chatboticon.png';


function Landing() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Pagecontent>
      <Header />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />

    </Pagecontent>
      
        

      <ChatbotBox onClick={toggleChatBot}>
          <img src={chatboticon} alt={"챗봇"} style={{ width: "65px", height: "65px" }}/>
      </ChatbotBox>
      {isOpen && <ChatBot />}
    </>
  );
}

export default Landing;

const ChatbotBox = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Pagecontent = styled.div`
  margin-bottom: 80px;
`;

const CenteredImg = styled.img`
  width: 50px;
  height: 50px;
`;