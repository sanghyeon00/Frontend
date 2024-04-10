import React from "react";
import styled from "styled-components";

export default function LoginButton({ title, action, border, small,margin_top }) {
  return (
    <Wrapper
      onClick={action ? () => action() : null}
      border={border}
      small={small} // small prop을 Wrapper에 전달
      margin_top={margin_top}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: ${props => props.border ? "1px solid #01DF01" : "none"}; // border prop에 따른 조건부 스타일
  background-color: ${props => props.border ? "transparent" : "#20C075"};
  width: 413px; // 버튼의 너비를 줄입니다.
  margin-top: ${props => props.margin_top ? "45px" : "20px"};
  margin-left:  43.5px;
  align-self: ${props => props.small ? "flex-end" : "auto"};
  padding: ${props => props.small ? "8px 12px" : "15px 30px"};
  font-size: ${props => props.small ? "14px" : "16px"};
  color: ${props => props.border ? "#707070" : "#fff"};
  outline: none;
  font-weight:bold;
  border-radius: 5px;
  

  &:hover {
    background-color: ${props => props.border ? "transparent" : "#01DF01"};
    border: ${props => props.border ? "1px solid #7620ff" : "none"}; // 호버 시 테두리 스타일
    color: ${props => props.border ? "#7620ff" : "#fff"};
  }
`;
