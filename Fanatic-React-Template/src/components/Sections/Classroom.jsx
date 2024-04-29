import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Member/AuthContext";

const Classroom = () => {
    const navigate = useNavigate();
    const { accessToken } = useAuth();
    const [view, setView] = useState('allCourses');
    const [courses, setCourses] = useState([]);
    const [myCourses, setMyCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        checkPosition();
        fetchCourses();
        fetchMyCourses();
    }, []);

    useEffect(() => {
      if (view === 'myCourses') {
          fetchMyCourses();
      }
  }, [view]);

    const checkPosition = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/position_check/`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${accessToken}` }
            });

            if (response.ok) {
                const status = response.status;
                if (status === 200) {
                    navigate("/Classroom");
                } else if (status === 201) {
                    navigate("/ProClassroom");
                } else {
                    console.error('Unexpected status code:', status);
                }
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error checking position:', error);
            navigate("/login");
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/lecture_view/`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${accessToken}` }
            });

            if (response.ok) {
                const data = await response.json();

                const uniqueCourses = data.lecture.filter(course => !myCourses.find(c => c.lecture_id == course.lecture_id));
                
                setCourses(uniqueCourses || []);
            } else {
                console.error('Failed to fetch courses');
            }
        } catch (error) {
            console.error('Error fetching courses:', error);
            navigate("/login");
        }
    };

    const fetchMyCourses = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/my_lecture_show/`, {
                headers: { "Authorization": `Bearer ${accessToken}` }
            });

            const data = await response.json();
          if (response.ok) {
              console.log(data);
              setMyCourses(data.lecture);
            } else {
                console.error('Failed to fetch my courses');
            }
        } catch (error) {
            console.error('Failed to fetch my courses:', error);
            
        }
    };

    // handleEnroll 함수 내의 강의 신청 부분 수정
const handleEnroll = async (course) => {
  try {
      const response = await fetch(`${process.env.REACT_APP_Server_IP}/lecture_apply/`, {
          method: 'POST',
          headers: {
              "Authorization": `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
              course: course.course,
              lecture_id: course.lecture_id 
          })
      });

      const result = await response.json();

      if (response.ok) {
          // 서버로부터 강의 목록을 받아와 state를 업데이트합니다.
          setMyCourses(result.courses);
          setShowModal(true);
          setView('myCourses');
      } else {
          alert(`신청 실패: ${result.message}`);
      }
  } catch (error) {
      alert("네트워크 에러가 발생했습니다. 다시 시도해주세요.");
      console.error("신청 중 에러 발생:", error);
  }
};


    const Modal = ({ closeModal }) => {
        return (
            <ModalWrapper>
                <ModalContent>
                    <p>신청에 성공했습니다!</p>
                    <Button onClick={closeModal}>확인</Button>
                </ModalContent>
            </ModalWrapper>
        );
    };

    const closeModal = async () => {
      setShowModal(false);
      setView('myCourses');
  };

    const coursesPerPage = 4;
    const totalPages = Math.ceil(courses.length / coursesPerPage);
    const courseStart = (page - 1) * coursesPerPage;
    const courseEnd = page * coursesPerPage;

    return (
        <Wrapper>
            {showModal && <Modal closeModal={closeModal} />}
            <Content>
                <Nav>
                    <NavLink 
                        onClick={() => {
                            setView('allCourses');
                            setPage(1);
                        }}
                        active={view === 'allCourses'}
                    >
                        강의 신청
                    </NavLink>
                    <NavLink 
                        onClick={() => {
                            setView('myCourses');
                            setPage(1);
                        }}
                        active={view === 'myCourses'}
                    >
                        내 강의
                    </NavLink>
                </Nav>
                {(view === 'allCourses' || view === 'myCourse') && courses.slice(courseStart, courseEnd).map(course => (
                    <CourseCard key={course.lecture_id}>
                        <CourseInfo>
                            <CourseTitle>{course.course}</CourseTitle>
                            <ProfessorName>{course.professor}</ProfessorName>
                            <LectureID>{course.lecture_id}</LectureID>
                        </CourseInfo>
                        <Button onClick={() => handleEnroll(course)}>신청</Button>
                    </CourseCard>
                ))}
                {view === 'myCourses' && myCourses && myCourses.map(course => (
    <CourseCard key={course.lecture_id}>
        <CourseInfo>
            <CourseTitle>{course.course}</CourseTitle>
            <ProfessorName>{course.professor}</ProfessorName>
            <LectureID>{course.lecture_id}</LectureID>
        </CourseInfo>
    </CourseCard>
))}
                {view === 'allCourses' && (
                    <PageNav>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PageButton
                                key={index}
                                onClick={() => setPage(index + 1)}
                                active={index + 1 === page}
                            >
                                {index + 1}
                            </PageButton>
                        ))}
                    </PageNav>
                )}
            </Content>
        </Wrapper>
    );
};

export default Classroom;

const LectureID = styled.p`
  text-align: right;
  font-size: 12px;
  color: #888;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #EFF8F3;
`;

const Content = styled.div`
  width: 60%;
  min-height: 80%;
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
  flex: 1; // 내용이 충분히 넓어질 수 있도록 함
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
  background: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;

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
