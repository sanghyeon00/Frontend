import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar'; // 사이드바 컴포넌트를 임포트합니다.
import QconfirmButton from "../Buttons/QconfirmButton";
import {GiBookmarklet} from 'react-icons/gi';
import { useParams } from 'react-router-dom';
import { useAuth } from "../Member/AuthContext";


const PageContainer = styled.div`
  padding-top: 120px;
  margin-left: 250px; /* 사이드바 너비만큼 여백 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarSection = styled.div`
  margin: 20px 0 ;
`;

const Section = styled.div`
  margin-bottom: 20px;
  width: 100%; /* 전체 너비를 균일하게 설정 */
  border: 1px solid #ccc; /* 섹션 별 구분선 */
  padding: 20px; /* 내부 패딩 */
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1); /* 경계가 더 명확하도록 그림자 추가 */
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px; /* 버튼 간격 조정 */;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc; /* 구분선 색상 */
  margin: 10px 0; /* 구분선 위아래 여백 */
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
`;

const buttonStyles = css`
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #4CAF50; /* 버튼 테두리 색상 추가 */
  background-color: white; /* 배경색을 흰색으로 설정 */
  color: black; /* 글자색을 검정색으로 설정 */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s, border-radius 0.3s;

  &:hover {
    transform: scale(1.05); /* 버튼이 조금 커지는 효과 */
    box-shadow: 0px 8px 15px rgba(0,0,0,0.2); /* 그림자를 진하게 */
    background: linear-gradient(145deg, #4caf50, #66bb6a); /* 그라디언트 배경 */
    border-radius: 8px; /* 모서리가 더 둥글게 */
  }

  ${({ active }) => active && `
    background-color: #007BFF; /* 활성화됐을 때의 배경색 */
    color: white; /* 활성화됐을 때의 글자색 */
    border-color: #007BFF; /* 활성화됐을 때의 테두리 색상 */
  `}
`;

const TypeButton = styled.button`
  ${buttonStyles}
  ${({ active }) => active && `
    background-color: #007BFF; // 선택됐을 때의 배경색
    color: white; // 선택됐을 때의 글자색
    border-color: #007BFF; // 선택됐을 때의 테두리 색상
  `}
`;

const CountSelect = styled.select`
  ${buttonStyles}
  ${({ disabled }) => disabled && `
    opacity: 0.5; // 비활성화 시 투명도 조정
    pointer-events: none; // 비활성화 시 클릭 이벤트 막기
  `}
`;

const GenerateButtonContainer = styled.div`
  margin-top: 20px;
  display: flex; /* Flexbox 레이아웃 사용 */
  justify-content: center; /* 버튼을 가운데로 정렬 */
`;

const GenerateButton = styled.button`
  ${buttonStyles}
  background-color: #007BFF;
  color: white;
`;


const Input = styled.input`
  width: 60%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative; /* 부모 위치 지정 */
`;

const InputContainer2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative; /* 부모 위치 지정 */
  margin-bottom:30px;
`;

const KeywordSelect = styled.select`
  padding: 5px 10px;
  margin: 0 5px;
  margin-left: 20px;
  font-size: 18px;
  cursor: pointer;
  border: 2px solid #4CAF50; /* 버튼 테두리 색상 추가 */
  background-color: white; /* 배경색을 흰색으로 설정 */
  color: black; /* 글자색을 검정색으로 설정 */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s, border-radius 0.3s;

  &:hover {
    transform: scale(1.05); /* 버튼이 조금 커지는 효과 */
    box-shadow: 0px 8px 15px rgba(0,0,0,0.2); /* 그림자를 진하게 */
    background: linear-gradient(145deg, #4caf50, #66bb6a); /* 그라디언트 배경 */
    border-radius: 8px; /* 모서리가 더 둥글게 */
  }

  ${({ active }) => active && `
    background-color: #007BFF; /* 활성화됐을 때의 배경색 */
    color: white; /* 활성화됐을 때의 글자색 */
    border-color: #007BFF; /* 활성화됐을 때의 테두리 색상 */
  `}
`;

const KeywordCheck = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 5px;
  font-size: 18px;
  width: 500px;
  height:60px;
  min-height: 60px;
  word-wrap: break-word;
  border-radius: 8px;
  margin-top: 0px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .removeButton {
    margin-left: 5px;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`${buttonStyles}`;

const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding-right: 20px; /* 상단바와의 간격 조절을 위한 우측 패딩 */
`;

const DownloadButton = styled.button`
  ${buttonStyles}
  background-color: #4CAF50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

const QuestionContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-left: 3px solid transparent;
  transition: border-color 0.3s, margin-left 0.3s;
  width: 100%; /* 컨테이너 너비를 균일하게 설정 */
  display: flex;
  justify-content: space-between; /* 내용을 양쪽으로 정렬 */
  border: 1px solid #ddd; /* 각 질문별 구분을 위한 경계선 */
  background-color: #f9f9f9; /* 배경색 추가 */

  &:hover, &.isSelected {
    margin-left: -3px;
    border-left: 3px solid #4CAF50; /* 호버 및 선택 시 초록색 테두리로 변경 */
    background-color: #e6ffe6; /* 호버 및 선택 시 배경색 변경 */
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  /* 각 라디오 버튼 스타일 지정 */
  input[type="radio"] {
    margin-right: 5px;
  }
`;

const Button = styled.button` /* 추가한 부분 */
  ${buttonStyles}
`;

const QuestionInput = styled.input` /* 추가한 부분 */
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const QuestionDivider = styled.hr`
  margin: 20px 0;
  border: 0;
  height: 1px;
  background-color: #ccc; // 문제 사이의 구별 선
`;

const QuestionContent = styled.div`
  white-space: pre-wrap; /* 공백과 개행을 유지합니다. */
  flex: 1;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #33FF00;
    
    border-color: gray;
  `}
`;

const OptionCheckbox = styled.input`
  margin-right: 5px;
`;

// 주요 컴포넌트 정의
function CreateQPage() {
  // 로딩상태, 에러상태, 선택된 옵션들, 선택된 문제 유형, 사용자 입력 질문, 서버로부터 받은 문제 데이터 상태 관리
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selections, setSelections] = useState({});
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]); // 서버로부터 받은 문제 데이터
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedKeywords, setSelectedKeywords] = useState([]); //선택된 키워드 배열 

  const {cookie} = useAuth();

  const { course_name } = useParams();
  console.log("course_name:", course_name);

  const navigate = useNavigate();

  const handleSolveQpage = () => {
    navigate("/solve_question");
    // 문제 생성 로직 구현
  };

  // 선택된 옵션 변겅 시 로그 출력을 위한 useEffect 훅 사용
  useEffect(() => {
    console.log(selections);
  }, [selections]); // selections 상태가 변경될 때마다 실행됩니다.


  const toggleSelection = (key) => {
    setSelectedTypes(prev => 
      prev.includes(key) ? prev.filter(type => type !== key) : [...prev, key]
    );
    if (selections[key] === undefined) {
      setSelections(prev => ({
        ...prev,
        [key]: 0
      }));
    }
  };
  //특정 문제 유형에 대해 원하는 문제의 개수를 선택할 때 호출
  // 문제의 개수를 선택하면, 해당 문제 유형(key)과 선택된 개수(count)를
  //selections 객체에 저장하거나 업데이트
  const handleSelectionChange = (key, count) => {
    // if (selectedTypes.includes(key)) {
      setSelections(prev => ({
        ...prev,
        [key]: count
      }));
    // } else {
    //   alert("먼저 문제 유형을 선택해주세요.");
    // }
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // 문제 데이터를 서버로부터 가져오는 함수
  const fetchQuestions = () => {
    if (Object.keys(selections).some(key => selections[key] > 0 && selectedTypes.includes(key))) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_Server_IP}/GenerateQuestion/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${cookie.access_token}`
        },
        body: JSON.stringify({ 
          selections: selections,
          selectedKeywords: selectedKeywords,
          course_name: course_name 
        })
        
      })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setQuestions(data.questions);
      })
      .catch(error => {
        console.error('Fetching questions failed:', error);
        setError(error.message);
        setLoading(false);
      });
    }
  };


  const kkkk = () => {
    // 활성화된 문제 유형 가져오기
    const activeTypes = selectedTypes.filter(type => selections[type]);
  
    // 활성화된 문제 유형이 없다면 selections 객체 초기화
    if (activeTypes.length === 0) {
      setSelections({});
      return;
    }
  
    // 활성화된 문제 유형이 있을 때 selections 객체 업데이트
    const updatedSelections = { ...selections };
  
    // 활성화되지 않은 문제 유형에 대한 key 삭제
    Object.keys(selections).forEach(key => {
      if (!activeTypes.includes(key)) {
        delete updatedSelections[key];
      }
    });
  
    // 업데이트된 selections로 설정
    setSelections(updatedSelections);
  
    // 선택된 문제 유형과 개수 출력
    alert(Object.entries(updatedSelections).map(([key, value]) => `${key}: ${value}`).join('\n'));
  };

  const handleGenerateButtonClick = () => {
    kkkk();
    fetchQuestions();
  };

  const handleKeywordSelect = (e) => {
    const selectedKeyword = e.target.value; // 선택된 키워드 값
    // 이미 선택된 키워드인지 확인 후 선택 배열에 추가
    if (!selectedKeywords.includes(selectedKeyword)) {
      setSelectedKeywords([...selectedKeywords, selectedKeyword]);
    }
  };

  const handleRemoveKeyword = (indexToRemove) => {
    setSelectedKeywords((prevKeywords) => {
      // 선택된 키워드 배열에서 특정 인덱스의 키워드를 제외한 새 배열 반환
      return prevKeywords.filter((_, index) => index !== indexToRemove);
    });
  };


  let keyword_list = [];

  if (course_name == "파이썬프로그래밍"){
    keyword_list = [' ','입맛돋우기', '파이썬인터프리터사용하기', '파이썬의간략한소개', '기타제어흐름도구',
    '자료구조', '모듈', '입력과출력', '에러와예외', '클래스', '표준라이브러리둘러보기', 
    '표준라이브러리둘러보기—부', '가상환경및패키지', '이제뭘하지?', '대화형입력편집및히스토리치환', 
    '부동소수점산술:문제점및한계', '부록'];
  }
  else if(course_name == "C++프로그래밍"){
    keyword_list = [' ', '토큰 및 문자 집합', '식별자', '리터럴', 'C++ 형식 시스템', 'Lvalue 및 Rvalue', 
    '표준 변환', '기본 제공 형식', '데이터 형식 범위', '선언 및 정의', '(const / constexpr)', '이니셜라이저', 
    '연산자', '캐스팅', '선택문', '반복문', '네임스페이스', '열거형', 'union', '함수', '함수 오버로드', 
    '연산자 오버로드', '클래스 및 구조체', '멤버 액세스 제어', '생성자', '소멸자', '상속', '멤버에 대한 포인터',
     'this 포인터', '람다식', '포인터', '예외처리'];
  }
  else if(course_name == "자바프로그래밍"){
    keyword_list = [' ', "변수", "연산자", "조건제어문", "클래스 객체", "클래스 심화", "중첩클래스", "인터페이스", "상속", "숫자클래스", "문자열"];
  };


  const handleQuestionClick = (id) => {
    setSelectedQuestionId(id);
  };


  // 컴포넌트가 마운트 될 때 서버로부터 문제 데이터를 가져옴
  useEffect(() => {
    fetchQuestions(); // 컴포넌트가 마운트될 때 서버로부터 문제 데이터를 가져옵니다.
  }, []); // 의존성 배열이 비어 있으므로, 컴포넌트가 처음 마운트될 때만 fetchQuestions 함수가 실행됩니다

  const questionTypes = {
    '객관식': ['빈칸', '단답형', '문장형'],
    '단답형': ['빈칸', '문장형'],
    'OX선택형': ['O/X'],
    '서술형': ['코딩']
  };

  const typeDividers = ['객관식', '단답형']; // 구분선을 추가할 질문 유형

  const renderQuestionUI = (type, item, questionId) => {
    switch (type) {
      case 1: // 객관식-빈칸
      case 2: // 객관식-단답형
      case 3: // 객관식-문장형
        return (
          <>
            {item.options.map((option, optionIndex) => (
              <OptionLabel key={optionIndex} active={selectedAnswers[questionId] === option}>
                <OptionCheckbox
                  type="radio"
                  id={`option-${optionIndex}`}
                  name={`question-${questionId}`}
                  value={option}
                  onChange={() => handleAnswerSelect(questionId, option)}
                />
                {option}
              </OptionLabel>
            ))}
          </>
        );
    
      case 4: // 단답형-빈칸
      case 5: // 단답형-문장형
      case 7: // 서술형-코딩
        return (
          <QuestionInput
            type="text"
            placeholder="답을 작성하세요."
            onChange={(e) => handleAnswerSelect(questionId, e.target.value)}
          />
        );
      case 6: // OX선택형-O/X
      return (
        <>
          <Button
            onClick={() => handleAnswerSelect(questionId, 'O')}
            active={selectedAnswers[questionId] === 'O'} // 선택된 항목에 따라 색상 변경을 위해 active 속성 추가
          >
            O
          </Button>
          <Button
            onClick={() => handleAnswerSelect(questionId, 'X')}
            active={selectedAnswers[questionId] === 'X'} // 선택된 항목에 따라 색상 변경을 위해 active 속성 추가
          >
            X
          </Button>
        </>
      );
    default:
      return null;
  }
};

  return (
    <>
      <Sidebar>
        {Object.keys(questionTypes).map((type) => (
          <React.Fragment key={type}>
            <SidebarSection>
              <Label>{type}</Label>
              {questionTypes[type].length > 0 ? (
                questionTypes[type].map(subType => {
                  const subTypeKey = `${type}-${subType}`;
                  const isActive = selectedTypes.includes(subTypeKey);
                  return (
                    <ButtonContainer key={subType}>
                      <TypeButton
                        active={isActive}
                        onClick={() => {toggleSelection(subTypeKey);
                                        handleSelectionChange(subTypeKey, 1);
                        }}
                      >
                        {subType}
                      </TypeButton>
                      <CountSelect
                        value={isActive ? (selections[subTypeKey] || 1) : ''}
                        onChange={(e) => handleSelectionChange(subTypeKey, parseInt(e.target.value))}
                        disabled={!isActive}
                      >
                        {[1, 2, 3, 4, 5].map(count => (
                          <option key={count} value={count}>{count}개</option>
                        ))}
                      </CountSelect>
                    </ButtonContainer>
                  );
                })
              ) : (
                <ButtonContainer>
                  <Label style={{visibility: 'hidden'}}>O/X</Label>
                  <CountSelect
                    value={selections['OX선택형'] || 1}
                    onChange={(e) => handleSelectionChange('OX선택형', parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(count => (
                      <option key={count} value={count}>{count}개</option>
                    ))}
                  </CountSelect>
                </ButtonContainer>
              )}
            </SidebarSection>
            {type !== '서술형' && <Divider />}
          </React.Fragment>
        ))}
        <GenerateButtonContainer>
          <GenerateButton onClick={handleGenerateButtonClick}>문제 생성</GenerateButton>
        </GenerateButtonContainer>
      </Sidebar>

      <PageContainer>
        <InputContainer>
          <h1 style={{marginBottom:"25px", color:"#20C075", fontWeight:"bold"}}><GiBookmarklet />&nbsp;<em style={{color:"red"}}>{course_name}</em> &nbsp; 문제 생성 페이지&nbsp;<GiBookmarklet /></h1>
        </InputContainer>
        <InputContainer>
        <h2>Keyword 선택  - </h2>
          <KeywordSelect onChange={handleKeywordSelect}>
            {keyword_list.map((keyword, index) => (
              <option key={index} value={keyword}>
                {keyword}
              </option>
            ))}
          </KeywordSelect>
        </InputContainer>
          
        <InputContainer2>
          <KeywordCheck>
            {selectedKeywords.map((keyword, index) => (
              <span key={index} style={{background:"#20C075", marginRight:"15px", borderRadius:"15px", padding:"3px", color:"white", fontSize:"14px"}}>
                #{keyword} 
                <span
                  className="removeButton"
                  onClick={() => handleRemoveKeyword(index)} // 삭제 함수 호출
                  style={{color:"black", fontSize:"16px", fontWeight:"bold"}}
                >
                  x
                </span>
              </span>
            ))}
          </KeywordCheck>
        </InputContainer2>

        {questions && questions.map((questionType, index) => (
          <React.Fragment key={index}>
            <Section>
              <Label>문제 유형: {questionType.type}</Label>
              {questionType.items && questionType.items.map((item, itemIndex) => (
                <QuestionContainer
                  key={`question-${index}-${itemIndex}`}
                  className={selectedQuestionId === `question-${index}-${itemIndex}` ? 'isSelected' : ''}
                  onClick={() => handleQuestionClick(`question-${index}-${itemIndex}`)}
                >
                  <QuestionContent>
                    {item.content}
                    {renderQuestionUI(questionType.type, item, `question-${index}-${itemIndex}`)}
                  </QuestionContent>
                </QuestionContainer>
              ))}
            </Section>
            {index < questions.length - 1 && <QuestionDivider />}
          </React.Fragment>
        ))}
        <QconfirmButton title="확정 및 퀴즈 시작" action={handleSolveQpage}/>

      </PageContainer>
    </>
  );
}

export default CreateQPage;