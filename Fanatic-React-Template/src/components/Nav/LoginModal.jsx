import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: start;
  justify-content: start;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px; /* or however much space you want */
  z-index: 1001;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 15px; // 필드 간격 추가
`;

const Label = styled.label`
  font-weight: 600; // 이는 semiBold와 유사한 두께입니다.
  font-size: 15px;
  margin-bottom: 5px; // 라벨과 입력 필드 사이의 간격
`;

const Input = styled.input`
  width: 100%;       // 입력 필드 너비를 100%로 설정
  padding: 10px;     // 입력 필드 안쪽 여백
  box-sizing: border-box; // 패딩과 테두리가 너비에 포함되도록 설정
`;

export default function LoginModal({ isOpen, onClose, position }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직을 여기에 구현합니다.
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent style={{ top: `${position.top}px`, left: `${position.left}px` }} onClick={(e) => e.stopPropagation()}>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>아이디</Label>
            <Input type="text" />
          </FormField>
          <FormField>
            <Label>비밀번호</Label>
            <Input type="password" />
          </FormField>
          <FullButton type="submit" title="로그인" small border />
        </Form>
      </ModalContent>
    </ModalBackdrop>
  );
}