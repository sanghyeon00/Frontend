import React, { useState } from 'react';
import styled from 'styled-components';

const Classroom = () => {
    const [view, setView] = useState('allCourses');
    const [courses, setCourses] = useState([
        { id: 1, title: "강좌1", professor: "교수명" },
        { id: 2, title: "강좌2", professor: "교수명" }
    ]);
    const [myCourses, setMyCourses] = useState([
        { id: 3, title: "강좌3", professor: "교수명" }
    ]);

    const handleEnroll = (course) => {
        alert("신청에 성공했습니다.");
        setMyCourses([...myCourses, course]);
        setCourses(courses.filter(c => c.id !== course.id));
    };

    return (
        <Wrapper>
            <Content>
                <Nav>
                    <NavLink 
                        onClick={() => setView('allCourses')}
                        active={view === 'allCourses'}
                    >
                        강의 신청
                    </NavLink>
                    <NavLink 
                        onClick={() => setView('myCourses')}
                        active={view === 'myCourses'}
                    >
                        내 강의
                    </NavLink>
                </Nav>
                {view === 'allCourses' && courses.map(course => (
                    <CourseCard key={course.id}>
                        <CourseInfo>
                            <CourseTitle>{course.title}</CourseTitle>
                            <ProfessorName>{course.professor}</ProfessorName>
                        </CourseInfo>
                        <Button onClick={() => handleEnroll(course)}>신청</Button>
                    </CourseCard>
                ))}
                {view === 'myCourses' && myCourses.map(course => (
                    <CourseCard key={course.id}>
                        <CourseInfo>
                            <CourseTitle>{course.title}</CourseTitle>
                            <ProfessorName>{course.professor}</ProfessorName>
                        </CourseInfo>
                    </CourseCard>
                ))}
            </Content>
        </Wrapper>
    );
};

export default Classroom;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #EFF8F3;
`;

const Content = styled.div`
  width: 60%; // 조정된 너비
  min-height: 80%; // 조정된 최소 높이
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px; // 추가된 하단 여백
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
  margin-bottom: 10px;
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
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #367c39;
  }
`;
