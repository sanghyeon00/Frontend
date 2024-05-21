import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Member/AuthContext";
import backbb from '../../assets/img/study2.jpg';
import isodaloding from '../../assets/img/loding/isodaloding.png';

// useState로 컴포넌트 상태 관리
const CreateClassDiary = () => {
  const navigate = useNavigate();

  const { user, isLoggedIn, cookie } = useAuth();

  const [prompt, setPrompt] = useState("");
  const [feedback, setFeedback] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    console.log("프롬프트 입력:", prompt);
    fetchSendprompt();
  };

  const fetchSendprompt = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_Server_IP}/??/`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${cookie.access_token}`, 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                prompt: prompt
            })
        });
        const result = await response.json();
      
        if (response.ok) {
            setFeedback({
                title: result.title,
                content: result.content
              });
        } 
        else {
            console.error(`불러오기 실패 : ${result.message}`);
        }
    } catch (error) {
        console.error('Error fetching date list:', error);
    }
};

  return (
    <ClassroomWrapper>
      <CoursesBox>
        <h2 class="fontMedium"style={{ color: "#20C075", fontWeight: "bold" }}>수업 일기 생성</h2>
        <Grayunderline />
        <InputBox
          placeholder="프롬프트를 입력하세요..."
          value={prompt}
          onChange={handleInputChange}
        />
        <FeedbackBox>
            <FeedbackContent>
            <h3>{feedback.title}</h3>
            <p>{feedback.content}</p>
          </FeedbackContent>
        </FeedbackBox>
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>일기 생성</SubmitButton>
          <SubmitButton onClick={handleSubmit}>업로드</SubmitButton>
        </ButtonContainer>
      </CoursesBox>
    </ClassroomWrapper>
  );
};

export default CreateClassDiary;

const ClassroomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backbb});
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.2;
    z-index: -1;
  }
`;

const CoursesBox = styled.div`
  width: 60%;
  min-height: 80%;
  background-color: white;
  margin-top: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  overflow: hidden;
  margin-top: 50px;
`;

const TitleText = styled.h3`
  margin: 0;
  font-weight: bold;
  color: #333;
`;

const InputBox = styled.textarea`
  width: 50%;
  height: 70px;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 15px;
  resize: none;
  font-size: 16px;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SubmitButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  margin:0 15px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const FeedbackContent = styled.div`
  overflow-y: auto;
  height: 300px;
`;

const Grayunderline = styled.div`
  width: 500px;
  height: 1px;
  background-color: #ccc;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const FeedbackBox = styled.div`
  width: 850px;
  height: 280px;
  justify-content: center;
  background-color: #FBFAFA;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
`;