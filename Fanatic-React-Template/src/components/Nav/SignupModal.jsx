import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton"; // 기존에 사용하신 버튼 컴포넌트를 가정합니다.

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
  margin-top: 10px;
  z-index: 1001;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  label {
    margin-right: 10px;
    font-size: 15px;
    font-weight: 600;
  }

  input {
    margin-right: 5px;
  }
`;

export default function SignupModal({ isOpen, onClose, position }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 로직을 구현합니다.
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent style={{ top: `${position.top}px`, left: `${position.left}px` }} onClick={(e) => e.stopPropagation()}>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>아이디</Label>
            <Input type="text" />
            <FullButton title="중복 확인" small border /> {/* 버튼 스타일링은 FullButton 컴포넌트에 따라 다릅니다. */}
          </FormField>
          <FormField>
            <Label>비밀번호</Label>
            <Input type="password" />
          </FormField>
          <FormField>
            <Label>비밀번호 확인</Label>
            <Input type="password" />
          </FormField>
          <RadioGroup>
            <Label>교수</Label>
            <Input type="radio" name="role" value="professor" />
            <Label>학생</Label>
            <Input type="radio" name="role" value="student" />
          </RadioGroup>
          <FormField>
            <Label>학번</Label>
            <Input type="text" />
          </FormField>
          <FullButton type="submit" title="회원가입" small border />
        </Form>
      </ModalContent>
    </ModalBackdrop>
  );
}
