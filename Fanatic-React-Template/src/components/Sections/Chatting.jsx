import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Users from '../../../src/assets/img/users.png';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70vw; /* 가로 너비를 70%로 설정 */
  max-width: 1200px; /* 최대 너비 설정 */
  min-width: 600px; /* 최소 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  border: 1px solid #ccc;
  background-color: #eff8f3;
  overflow: hidden;
`;

const Header = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #ccffcc;
`;

const Message = styled.div`
  background-color: ${props => (props.isBot ? '#ccffcc' : '#4CAF50')};
  color: ${props => (props.isBot ? 'black' : 'white')};
  align-self: ${props => (props.isBot ? 'flex-start' : 'flex-end')};
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  max-width: 70%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isBot ? 'flex-start' : 'flex-end')};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    ${props => (props.isBot ? 'left: -10px;' : 'right: -10px;')}
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${props => (props.isBot ? '#ccffcc' : '#4CAF50')};
    ${props => (props.isBot ? 'border-left-color: transparent;' : 'border-right-color: transparent;')}
    ${props => (props.isBot ? 'border-right: 0;' : 'border-left: 0;')}
    ${props => (props.isBot ? 'margin-top: -10px;' : 'margin-top: -10px;')}
  }
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const MessageContent = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const MessageInfo = styled.div`
  font-size: 12px;
  color: #666;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 20px;
  border-top: 1px solid #ccc;
  background-color: #ffffff;
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
`;

const SendButton = styled.button`
  background-color: #4CAF50;
  border: none;
  padding: 15px;
  margin-left: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const ChatBotImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Chatting = () => {
  const location = useLocation();
  const { chatRoomName } = location.state || { chatRoomName: "채팅방" }; // Default value 설정
  const [messages, setMessages] = useState([
    { text: '안녕하세요! 어떻게 도와드릴까요?', isBot: true, sender: 'Bot', time: new Date().toLocaleString() }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const now = new Date();
      const formattedTime = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
      setMessages([...messages, { text: inputValue, isBot: false, sender: 'User', time: formattedTime }]);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    if (chatRoomName) {
      const now = new Date();
      const formattedTime = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
      setMessages([{ text: `여기는 공대 채팅방입니다!: ${chatRoomName}`, isBot: true, sender: 'Bot', time: formattedTime }]);
    }
  }, [chatRoomName]);

  return (
    <ChatContainer>
      <Header>{chatRoomName}</Header>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} isBot={message.isBot}>
            <MessageHeader>
              <ChatBotImage src={Users} alt="Avatar" />
              <MessageInfo>{message.sender} - {message.time}</MessageInfo>
            </MessageHeader>
            <MessageContent>{message.text}</MessageContent>
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요"
        />
        <SendButton onClick={handleSend}>➤</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chatting;
