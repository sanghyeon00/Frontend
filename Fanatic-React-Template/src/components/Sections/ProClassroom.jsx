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
        fetchMyCourses();
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

    const fetchMyCourses = async () => {
      try {
          const response = await fetch(`${process.env.REACT_APP_Server_IP}/lecture_show/`, {
              headers: {
                  "Authorization": `Bearer ${accessToken}`
              }
          });
          const data = await response.json();
          if (response.ok) {
              setMyCourses(data.lecture);
          } else {
              console.error('Failed to fetch my courses');
          }
      } catch (error) {
          console.error('Failed to fetch my courses:', error);
      }
  };
  

  const handleCreateClassroom = async (courseName) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_Server_IP}/lecture_generate/`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject: courseName })
      });
      const result = await response.json();
  
      if (response.ok) {
        // 성공적으로 강의가 생성된 경우 '내 강의' 목록을 새로고칩니다.
        await fetchMyCourses(); 
        
        setShowModal(true); // 모달을 엽니다.
      } else {
        // 강의 생성 실패 시 사용자에게 알립니다.
        alert(`강의 생성 실패: ${result.message}`);
      }
    } catch (error) {
      // 네트워크 에러 처리
      alert("네트워크 에러가 발생했습니다. 다시 시도해주세요.");
      console.error("강의 생성 중 에러 발생:", error);
    }
  };
  


  const Modal = ({ closeModal }) => {
    return (
      <ModalWrapper>
        <ModalContent>
          <p>강의실 생성에 성공했습니다!</p>
          {/* closeModal이 호출되면 모달을 닫고 내 강의 탭으로 이동 */}
          <Button onClick={closeModal}>확인</Button>
        </ModalContent>
      </ModalWrapper>
    );
  };

  const closeModal = () => {
    setShowModal(false); // 모달을 닫습니다.
    setView('myCourses'); // 사용자 인터페이스를 '내 강의' 뷰로 전환합니다.
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
            {/* 여기에서 myCourses가 배열인 경우에만 map 함수를 호출합니다. */}
            {view === 'createClassroom' && Array.isArray(myCourses) && myCourses.map(course => (
                <CourseCard key={course.key}>
                    <CourseInfo>
                        <CourseTitle>{course.name}</CourseTitle>
                        <ProfessorName>교수명 입력</ProfessorName>
                    </CourseInfo>
                    <Button onClick={() => handleCreateClassroom(course.name)}>생성하기</Button>
                </CourseCard>
            ))}
            {/* ... */}
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
