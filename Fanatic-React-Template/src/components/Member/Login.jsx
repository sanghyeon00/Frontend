import styled from "styled-components";
import logo from '../../assets/img/Loginout/greenlogo.png';
import React, { useState, useEffect } from 'react';
import LoginButton from "../Buttons/LoginButon";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

const Login = () => {

    const navigate = useNavigate();

    const memberSingout = () => {
        navigate("/membership");
        // 여기에 교수 회원가입 입장 로직 구현
    };

    const [id, setid] = useState('');
    const [password, setpassword] = useState('');
    const [selectedLoginType, setSelectedLoginType] = useState('professor'); // Default selected login type

    const idChange = (event) => {
        setid(event.target.value); // 입력한 아이디로 상태 업데이트
      };
    const passwordChange = (event) => {
        setpassword(event.target.value); // 입력한 아이디로 상태 업데이트
    };
    const handleLoginTypeChange = (type) => {
        setSelectedLoginType(type);
    };

  ////////////////////////////////////////////////////////////////////////////////////


    const [cookie, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token']);

    const onCookie = (name, token) => {
      setCookie(name, token, {path: '/'});
    }

    const { login } = useAuth();

    // 로그인 구현 (프론트)
    const accountAccess = async (id, password, selectedLoginType) => {
      const response = await fetch(`${process.env.REACT_APP_Server_IP}/sign_in/`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": id,
          "password": password,
          "usertype": selectedLoginType
        }),
      });

      if (response.status === 200) {
        alert("가입 성공");
        login();
        navigate('/');
      } 
      else {
        console.error('가입 에러');
        alert("가입 실패");
      }

      const data = await response.json();
      return {
        access: data.access_token,
        refresh: data.refresh_token
      };
    };

    //로그아웃 구현
    const removeTokens = () => {
      removeCookie('access_token');
      removeCookie('refresh_token');
    };

    // 로그인 버튼 클릭이벤트 함수로 사용 >> 토큰 쿠키에 저장 >> access token 만료됐는지 확인 만료됐으면 refreshAccessToken함수 호출해서 기간 연장함.걍의자 하나 갖고오셈
    const loadLogin = async () => {
      const { access, refresh } = await accountAccess(id, password, selectedLoginType);
      onCookie('access_token', access);
      onCookie('refresh_token', refresh);
      
      try {
        const response = await fetch(`${process.env.REACT_APP_Server_IP}/access_token_check/`, { //백엔드 엔드포인트 수정해야함
          method: "GET",
          headers: {
            "Authorization": `Bearer ${access}`
          }
        });
        console.log("-------------------------");
        console.log(access);
        console.log("-------------------------");
        if (response.status === 401) { // 액세스 토큰이 만료되었을 때
          const newAccessToken = await refreshAccessToken(refresh);
          const newResponse = await fetch(`${process.env.REACT_APP_Server_IP}/refresh/`, { //백엔드 엔드포인트 수정해야함 
            method: "GET",
            headers: {
              "Authorization": `Bearer ${newAccessToken}`
            }
          });
          const newData = await newResponse.json();
          console.log(newData);
        } 
        else {
          const data = await response.json();
          console.log(data);
        }
      } 
      catch (error) {
        console.error("Error:", error);
      }
    };


    // access token 만료가 됐으면 refresh token 이용해 다시 access token 새로 받아와서 로그인 유지시킬라고 있는 함수임
    const refreshAccessToken = async (refreshToken) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_Server_IP}/refresh/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "refresh_token": refreshToken
          })
        });
    
        if (response.status === 200) {
          const data = await response.json();
          return data.access_token;
        } else {
          throw new Error("Failed to refresh access token");
        }
      } 
      catch (error) {
        console.error("Error:", error);
        throw error;
      }
    };





////////////////////////////////////////////////////////////////////////////////
    

    return (
        <Wrapper>
            <LoginBox>
              <Link to="/">
                <img src={logo} alt="로고 이미지"  style={{marginLeft:"200px",marginTop:"20px",marginBottom:"15px", width:"100px", height:"40px"}}/>
              </Link>
              <h1 style={{ textAlign:"center" }} className="font30 extraBold">로그인</h1>
                <div style={{ display: 'flex', marginLeft:"35px", marginTop:"30px", marginBottom:"10px"}}>
                    <LoginTypeText selected={selectedLoginType === 'professor'} onClick={() => handleLoginTypeChange('professor')}>
                        교수 로그인
                    </LoginTypeText>
                    <LoginTypeText selected={selectedLoginType === 'student'} onClick={() => handleLoginTypeChange('student')}>
                        학생 로그인
                    </LoginTypeText>
                </div>
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

                <LoginButton title="로그인" margin_top={true} action={loadLogin}/>
                <LoginButton title="회원가입" action={memberSingout}/>
            </LoginBox>

        </Wrapper>
    );
  };
   
  export default Login;


const Wrapper = styled.section`
margin-top: 80px;
width: 100%;
min-height: 700px;
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
height:560px;
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

const LoginTypeText = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  text-decoration: none;
  margin: 0 10px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: ${props => props.selected ? '100%' : '0'};
    height: 3px;
    background-color: #20C075;
    bottom: -2px;
    left: 0;
    transition: width 0.4s;
  }
`;