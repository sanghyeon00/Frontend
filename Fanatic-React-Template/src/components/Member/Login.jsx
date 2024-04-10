import styled from "styled-components";
import logo from '../../assets/img/Loginout/greenlogo.png';
import React, { useState, useEffect } from 'react';
import LoginButton from "../Buttons/LoginButon";

const Login = () => {


    const [id, setid] = useState('');
    const [password, setpassword] = useState('');
    
    const idChange = (event) => {
        setid(event.target.value); // 입력한 아이디로 상태 업데이트
      };
    const passwordChange = (event) => {
        setpassword(event.target.value); // 입력한 아이디로 상태 업데이트
    };


    return (
        <Wrapper>
            <LoginBox>
                <img src={logo} alt="로고 이미지"  style={{marginLeft:"200px",marginTop:"20px",marginBottom:"15px", width:"100px", height:"40px"}}/>
                <h1 style={{ textAlign:"center" }} className="font30 extraBold">로그인</h1>
                <InputBox 
                    type="text" 
                    value={id} 
                    onChange={idChange} 
                    placeholder="아이디를 입력해주세요." 
                />
                <InputBox 
                    type="password" 
                    value={password} 
                    onChange={passwordChange} 
                    placeholder="비밀번호를 입력해주세요." 
                />
                <div style={{fontSize:"13px", marginTop:"10px", fontWeight:"bold"}}>
                    <Checkbox type="checkbox" id="checkbox" name="checkbox" />자동 로그인
                    <a style={{fontSize:"13px", fontWeight:"bold", marginLeft:"160px"}}>아이디 찾기</a> | <a style={{fontSize:"13px", fontWeight:"bold"}}>비밀번호 찾기</a>
                </div>
                <LoginButton title="로그인" margin_top={true}/>
                <LoginButton title="회원가입"/>
            </LoginBox>

        </Wrapper>
    );
  };
   
  export default Login;


  const Wrapper = styled.section`
  margin-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  background:#EFF8F3;
`;


const LoginBox = styled.div`
margin-top: 40px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:500px;
height:500px;
background: #FFFFFF;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;    
`;

const InputBox = styled.input`
margin-top:10px;
margin-left:43.5px;
width:400px;
height:50px;
border: 1px solid #000000;
padding-left: 10px;
`;

const Checkbox = styled.input`
  width: 11px; /* 너비 조정 */
  height: 11px; /* 높이 조정 */
  border: 2px solid #000000; /* 테두리 스타일 지정 */
  margin-left: 50px; /* 체크박스와 텍스트 사이 여백 조정 */
  margin-right: 5px;
`;

const Button = styled.button`
  width: 100px; /* 버튼 너비 조정 */
  height: 40px; /* 버튼 높이 조정 */
  background-color: #82FA58; /* 배경색 지정 */
  color: #black; /* 텍스트 색상 지정 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 버튼 테두리 둥글게 만들기 */
  cursor: pointer; /* 커서 스타일 변경 */
  font-size: 16px; /* 글꼴 크기 조정 */
`;