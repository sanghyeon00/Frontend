import React, { useState, useEffect } from "react";
import styled, { css, keyframes  } from 'styled-components';

export default function ChatBot() {
  return (
    <ContainerBox>
      <div className="chat-messages">
        <div className="message" style={{fontWeight:"bold"}}>안녕하세요! 어떻게 도와드릴까요?</div>
      </div>
    </ContainerBox>
  );
}

const ContainerBox = styled.div`
  width: 300px;
  height: auto;
  min-height: 30px;
  background: #EDEEED;
  border-radius: 15px 15px 15px 0px;
  padding: 8px;
`;