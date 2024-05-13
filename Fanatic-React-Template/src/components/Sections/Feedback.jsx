import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Member/AuthContext";
import { MdReportProblem } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const Feedback = () => {



    return(
        <Wrapper>
            <Content>

            </Content>
        </Wrapper>
    );
}

export default Feedback;

const Wrapper = styled.div`
  margin-top:30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #EFF8F3;
`;

const Content = styled.div`
  width: 38%;
  min-height: 73%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  border-bottom: ${props => props.active ? '3px solid #4CAF50' : 'none'};

  &:hover {
    color: #4CAF50;
  }

  &:focus {
    outline: none;
  }
`;

const CourseCard = styled.div`
  width: 100%;
  background-color: #EFF8F3;
  padding: 15px;
  margin-top: 15px;
  border: 2px solid #4CAF50;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // ������ ����� �о��� �� �ֵ��� ��
`;

const CourseTitle = styled.h2`
  margin: 0;
  color: #333;
`;

const ProfessorName = styled.p`
  margin: 0
  font-size: 14px;
  color: #666;
`;

const Button = styled.button`
  background: ${props => props.disabled ? '#ccc' : '#4CAF50'};
  color: ${props => props.disabled ? '#666' : 'white'};
  border: none;
  padding: 10px 20px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background: ${props => props.disabled ? '#ccc' : '#367c39'};
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  z-index: 1001;
`;

const PageNav = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const PageButton = styled.button`
  background: none;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 16px;
  color: ${props => props.active ? '#4CAF50' : '#333'};
  cursor: pointer;

  &:hover {
    color: #4CAF50;
  }

  &:focus {
    outline: none;
  }
`;