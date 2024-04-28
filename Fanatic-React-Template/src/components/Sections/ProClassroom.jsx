import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Member/AuthContext";


const ProClassroom = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('createClassroom'); // 뷰 상태 추가
    const [myCourses, setMyCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { isLoggedIn, accessToken, refreshToken} = useAuth();

    useEffect(() => {
        checkPosition();
        fetchCourses();
    }, []);

    const checkPosition = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_Server_IP}/position_check/`, { //백엔드 엔드포인트 수정해야함
            method: "GET",
            headers: {
              "Authorization": `Bearer ${accessToken}`
            }
          });
            if (response.ok) {
                const status = response.status;
                if (status === 200) {
                    navigate("/Classroom");
                } else if (status === 201) {
                    console.log("Confirmed as professorr.");
                } else {
                    console.error('Unexpected status code:', status);
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error checking position:', error);
            navigate("/login"); // Assuming there's a login route to handle errors
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/course_view/`);
            if (!response.ok) {
                throw new Error('Failed to fetch courses');
            }
            const data = await response.json();
            setMyCourses(data.lecture);
        } catch (error) {
            console.error('Failed to fetch courses:', error);
        }
    };

    const handleCreateClassroom = () => {
      // TODO: 강의실 생성 API 호출 및 로직 구현
      setShowModal(true); // 성공 메시지 모달을 표시
  };

  const Modal = ({ closeModal }) => {
  return (
      <ModalWrapper>
          <ModalContent>
              <p>강의실 생성에 성공했습니다!</p>
              <Button onClick={closeModal}>확인</Button>
          </ModalContent>
      </ModalWrapper>
  );
};

  const closeModal = () => {
      setShowModal(false);
      setView('myCourses'); // 모달을 닫고 내 강의 탭으로 이동
  };

  return (
    <ClassroomWrapper>
        {showModal && <Modal closeModal={closeModal} />}
        <CoursesBox>
            <Nav>
                <NavLink 
                    onClick={() => setView('myCourses')}
                    active={view === 'myCourses'}
                >
                    내 강의
                </NavLink>
                <NavLink 
                    onClick={() => { setView('createClassroom'); fetchCourses(); }}
                    active={view === 'createClassroom'}
                >
                    강의실 생성
                </NavLink>
            </Nav>
            {view === 'createClassroom' && myCourses.map(course => (
                <CourseCard key={course.key}>
                    <CourseInfo>
                        <CourseTitle>{course.name}</CourseTitle>
                        <ProfessorName>교수명 입력</ProfessorName>
                    </CourseInfo>
                    <Button onClick={handleCreateClassroom}>생성하기</Button>
                </CourseCard>
            ))}
            {/* "내 강의" 탭에는 초기에 아무것도 띄우지 않습니다. */}
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
  z-index: 1000; /* 모달을 화면의 가장 앞으로 가져옵니다 */
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  z-index: 1001; /* 모달 내용이 모달 배경보다 위에 오도록 합니다 */
`;
