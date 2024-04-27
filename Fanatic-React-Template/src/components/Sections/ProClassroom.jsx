import React, { useState, useEffect } from 'react'; // useEffect 추가
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProClassroom = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('createClassroom'); // 초기 뷰를 'createClassroom'으로 설정
    const [myCourses, setMyCourses] = useState([]); // 초기에 강의 목록은 비어있음

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/course_view/`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMyCourses(data.lecture); // Django에서 보낸 강의 목록을 상태에 저장
        } catch (error) {
            console.error('Failed to fetch courses:', error);
        }
    };

    const handleCreateCourse = () => {
        navigate('/create_question');
    };

    return (
        <ClassroomWrapper>
            <CoursesBox>
                <Nav>
                    <NavLink 
                        onClick={() => setView('myCourses')}
                        active={view === 'myCourses'}
                    >
                        내 강의
                    </NavLink>
                    <NavLink 
                        onClick={() => setView('createClassroom')}
                        active={view === 'createClassroom'}
                    >
                        강의실 생성
                    </NavLink>
                </Nav>
                {view === 'myCourses' && myCourses.map(course => (
                    <CourseCard key={course.key}>
                        <CourseInfo>
                            <CourseTitle>{course.name}</CourseTitle>
                            <ProfessorName>교수명 입력</ProfessorName>
                        </CourseInfo>
                        <Button onClick={handleCreateCourse}>문제 생성</Button>
                    </CourseCard>
                ))}
            </CoursesBox>
        </ClassroomWrapper>
    );
};

export default ProClassroom;

const ClassroomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #EFF8F3;
`;

const CoursesBox = styled.div`
  width: 40%;
  min-height: 60%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  overflow: hidden;
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
`;

const CourseTitle = styled.h2`
  margin: 0;
  color: #333;
`;

const ProfessorName = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Button = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #367c39;
  }
`;