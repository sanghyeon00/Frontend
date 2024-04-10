import styled from "styled-components";
import logo from '../../assets/img/Loginout/greenlogo.png';
import React, { useState, useEffect } from 'react';
import SingupButton from "../Buttons/SingupButton";
import { useNavigate } from "react-router-dom";

const Membership = () => {

    const navigate = useNavigate();

    const TeacherSingout = () => {
        navigate("/teacherSingout");
        // 여기에 교수 회원가입 입장 로직 구현
    };
    
    const StudentSingout = () => {
        navigate("/studentSingout");
        // 여기에 학생 회원가입 생성 로직 구현
    };

    return (
        <Wrapper>
            <LoginBox>
                <img src={logo} alt="로고 이미지"  style={{marginLeft:"250px",marginTop:"20px",marginBottom:"15px", width:"100px", height:"40px"}}/>
                <h1 style={{ textAlign:"center", fontSize:"25px"}} className="font25 extraBold">회원가입</h1>
                <h1 style={{ textAlign:"center", fontSize:"15px", marginTop:"10px" }} className="font15 extraBold">iSoda에 오신것을 환영합니다.</h1>
                <h1 style={{ textAlign:"center", fontSize:"11px",color:"gray", marginTop:"10px" }} className="font11 extraBold">iSoda의 회원이 되시면 다양한 학습에 도움이 되는 서비스를 누리실 수 있습니다.</h1>
                <h1 style={{ textAlign:"center", fontSize:"11px",color:"gray" }} className="font11 extraBold">아래 중 회원타입을 선택하신 후 회원가입을 진행해주시기 바랍니다.</h1>

                <BoxContainer>
                    <Box>
                        <StyledLink>교수 회원가입</StyledLink>
                        <h1 style={{ textAlign:"center", fontSize:"10px", marginTop:"15px" }} className="font15 extraBold">iSoda 사이트의 문제생성 서비스에서</h1>
                        <h1 style={{ textAlign:"center", fontSize:"10px" }} className="font15 extraBold">강의실 관리와 문제 생성을 하실 수 있는</h1>
                        <h1 style={{ textAlign:"center", fontSize:"10px" }} className="font15 extraBold">권한이 부여됩니다.</h1>

                        <h1 style={{ textAlign:"center", fontSize:"10px",marginTop:"5px" }} className="font15 extraBold">학생들의 문제점에 대한 피드백과 통계를</h1>
                        <h1 style={{ textAlign:"center", fontSize:"10px" }} className="font15 extraBold">받아볼 수 있습니다.</h1>
                        <SingupButton title="교수 회원가입" action={TeacherSingout}/>
                    </Box>

                    <Box>
                        <StyledLink>학생 회원가입</StyledLink>
                        <h1 style={{ textAlign:"center", fontSize:"10px", marginTop:"15px" }} className="font15 extraBold">iSoda 사이트의 문제생성 서비스에서</h1>
                        <h1 style={{ textAlign:"center", fontSize:"10px" }} className="font15 extraBold">교수님의 강의실 입장과 생성된 문제를 </h1>
                        <h1 style={{ textAlign:"center", fontSize:"10px" }} className="font15 extraBold">풀고 피드백을 받을 수 있습니다.</h1>

                        <h1 style={{ textAlign:"center", fontSize:"10px",marginTop:"5px" }} className="font15 extraBold">공부일기 자동생성 서비스 이용 가능합니다.</h1>
                        <h1 style={{ textAlign:"center", fontSize:"10px" }} className="font15 extraBold">커뮤니티와 진로 챗봇을 이용 가능합니다.</h1>
                        <SingupButton title="학생 회원가입" action={StudentSingout}/>
                    </Box>
                </BoxContainer>

            </LoginBox>
        </Wrapper>
    );
  };
   
  export default Membership;



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
margin-top: 50px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:600px;
height:500px;
background: #FFFFFF;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Box = styled.div`
  width: 250px;
  height: 230px;
  background-color: white;
  border-top: 3px solid #000; /* 윗쪽 border 색상 */
  border-radius: 2px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 */
  padding: 15px;
  margin-right: 15px;
  margin-left: 15px;
`;

const StyledLink = styled.p`
  color: black;
  text-decoration: underline;
  text-decoration-color: green;
  text-align: center;
  text-decoration-thickness: 3px;
  font-weight: bold;
`;