import React, { useState, useEffect } from "react";
import styled, { css, keyframes  } from 'styled-components';

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
import pngwing from '../assets/img/pngwing.png';
import roundlogo from '../assets/img/roundlogo.png';
import chatrobot from '../assets/img/chatrobot.png';


function Landing() {

  const [isClicked, setIsClicked] = useState(false);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [showChatBot, setShowChatBot] = useState(false);
  const [imageSrc, setImageSrc] = useState(chatboticon);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setRotateDeg(isClicked ? 0 : 45);
    const newImageSrc = isClicked ? chatboticon : pngwing;
    setTimeout(() => {
      setImageSrc(newImageSrc);
    }, 400);
  };

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setShowChatBot(true);
      }, 600);
    } else {
      setShowChatBot(false);
    }
  }, [isClicked]);
  

  return (
    <>
      <Header />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      
      <ChatbotBox onClick={handleClick} isClicked={isClicked}>
        <Iconimg 
          src={imageSrc}
          alt={"챗봇"} 
          rotate={rotateDeg}
        />
      </ChatbotBox>

      <ModalContainer isClicked={isClicked}>
        <ModalContent>
          <ModalHeader>
            <img src={roundlogo} alt="Logo" style={{width:"30px", height:"30px"}}/>
            <ChatBotTitle> iSoda ChatBot </ChatBotTitle>
            <img src={chatrobot} alt="Bot" style={{width:"38px", height:"45px"}}/>
          </ModalHeader>
        </ModalContent>

          <ModalInnerContent>
            <ChatArea>
              {showChatBot && (
                <ChatBot />
              )}
            </ChatArea>
            
            <ChatInputAndButtonWrapper>
              <ChatInput type="text" placeholder="메시지를 입력하세요" />
              <SendMessageButton>전송</SendMessageButton>
            </ChatInputAndButtonWrapper>
            
          </ModalInnerContent>
        
      </ModalContainer>



    </>
  );
}

export default Landing;

const ChatbotBox = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 1000;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
  

  &:hover {
      bottom: 20px;
      right: 20px;
      width: 75px;
      height: 75px;
  }
`;

const Pagecontent = styled.div`
  margin-bottom: 80px;
`;

const rotateAnimation1 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(60deg);
  }
`;

const rotateAnimation2 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-60deg);
  }
`;

const Iconimg = styled.img`
  width: 50px;
  height: 50px;


  ${({ rotate }) => rotate 
    ? css`
        animation: ${rotateAnimation1} 0.4s linear;
      `
    : css`
        animation: ${rotateAnimation2} 0.4s linear;
      `
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  padding:10px;
  bottom: 100px;
  right: 25px;
  border-radius: 20px;
  background: #F5FBEF;
  width: ${({ isClicked }) => (isClicked ? "400px" : "0px")};
  height: ${({ isClicked }) => (isClicked ? "580px" : "0px")};
  visibility: ${({ isClicked }) => (isClicked ? "visible" : "hidden")};
  transition: all 0.5s;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);
  z-index: 1001;
  overflow: hidden;
`;

const ModalContent = styled.div`
  background: #4CAF50; /* 초록색 배경 */
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const ChatBotTitle = styled.h2`
  margin-right: 120px;
  margin-top:5px;
  margin-left: 5px;
  color: white;

`;

const ModalInnerContent = styled.div`
  overflow-y: auto;
  height: calc(100% - 80px);
  background: #C8F6D0;
  border-radius: 15px;
  padding: 18px;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatInput = styled.input`
  width: calc(100% - 65px);
  height: 39px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
`;

const SendMessageButton = styled.button`
  margin-left: 10px;
  // margin-top: 5px;
  width: 55px;
  height: 39px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const ChatArea = styled.div`
  height: calc(100% - 50px);
  overflow-y: auto;
`;

const ChatMessage = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
`;

const ChatInputAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin-top: 10px;
`;