import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Sidebar from './Sidebar'; // 사이드바 컴포넌트를 임포트합니다.

const PageContainer = styled.div`
  padding-top: 120px;
  margin-left: 250px; /* 사이드바 너비만큼 여백 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px; /* 버튼 간격 조정 */
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
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-2px);
    background-color: #4CAF50; /* 호버 시 배경색 변경 */
    color: white; /* 호버 시 글자색 변경 */
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

const CountSelect = styled.select`${buttonStyles}`; // 드롭다운 메뉴에도 버튼 스타일 적용

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

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  margin-bottom: 10px; // 문제 간격
  border-left: 3px solid transparent; // 기본 상태에서는 투명한 왼쪽 테두리
  transition: border-color 0.3s; // 테두리 색상 변화를 위한 애니메이션 효과

  &:hover {
    border-left: 3px solid orange; // 마우스 호버 시 주황색 테두리로 변경
  }
`;

const QuestionDivider = styled.hr`
  margin: 20px 0;
  border: 0;
  height: 1px;
  background-color: #ccc; // 문제 사이의 구별 선
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

  // 선택된 옵션 변겅 시 로그 출력을 위한 useEffect 훅 사용
  useEffect(() => {
    console.log(selections);
  }, [selections]); // selections 상태가 변경될 때마다 실행됩니다.

  const toggleSelection = (key) => {
    setSelectedTypes(prev => 
      prev.includes(key) ? prev.filter(type => type !== key) : [...prev, key]
    );
    // 선택 시 기본값을 0으로 설정
    setSelections(prev => ({
      ...prev,
      [key]: prev[key] !== undefined ? prev[key] : 0
    }));
  };
  //특정 문제 유형에 대해 원하는 문제의 개수를 선택할 때 호출
  // 문제의 개수를 선택하면, 해당 문제 유형(key)과 선택된 개수(count)를
  //selections 객체에 저장하거나 업데이트
  const handleSelectionChange = (key, count) => {
    setSelections(prev => ({
      ...prev,
      [key]: count
    }));
  };

  // 문제 데이터를 서버로부터 가져오는 함수
  const fetchQuestions = () => {

    setLoading(true); //로딩 상태 true 설정
    fetch("http://127.0.0.1:8000/GenerateProblem/", {
      method: "POST", // HTTP 메소드 지정 
      headers: {
        'Content-Type': 'application/json', //콘텐츠 타입 헤더 설정
      },
      body: JSON.stringify({ selections }) // 선택된 옵션들을 JSON 문자열로 변환하여 요청
    })
    .then(response => response.json()) //응답 JSON으로 파싱
    .then(data => {

      console.log(selections)
      setLoading(false);
      setQuestions(data.questions);
    })
    .catch(error => {
      console.error('Fetching questions failed:', error); // 에러 발생 시 콘솔에 에러
      setError(error.message); //에러 메시지 상태에 저장
      setLoading(false); // 로딩상태 FALSE로 설정
    });
  };

    // 선택 변경 처리 함수
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`질문이 제출되었습니다: ${question}`);
      // 이 부분에서 질문을 처리하는 로직(예: API 호출)을 구현할 수 있습니다.
    };
  // 컴포넌트가 마운트 될 때 서버로부터 문제 데이터를 가져옴
  useEffect(() => {
    fetchQuestions(); // 컴포넌트가 마운트될 때 서버로부터 문제 데이터를 가져옵니다.
  }, []); // 의존성 배열이 비어 있으므로, 컴포넌트가 처음 마운트될 때만 fetchQuestions 함수가 실행됩니다

  useEffect(() => {
    fetchQuestions();
  }, []);

  const questionTypes = {
    '객관식': ['빈칸', '단답형', '문장형'],
    '단답형': ['빈칸', '문장형'],
    'OX선택형': ['O/X'],
    '서술형': ['코딩']
  };

  const typeDividers = ['객관식', '단답형']; // 구분선을 추가할 질문 유형

  return (
    <>
      <Sidebar>
        {Object.keys(questionTypes).map((type) => (
          <React.Fragment key={type}>
            <Section>
              <Label>{type}</Label>
              {questionTypes[type].length > 0 ? (
                questionTypes[type].map(subType => {
                  const subTypeKey = `${type}-${subType}`;
                  return (
                    <ButtonContainer key={subType}>
                      <TypeButton
                        active={selectedTypes.includes(subTypeKey)}
                        onClick={() => toggleSelection(subTypeKey)}
                      >
                        {subType}
                      </TypeButton>
                      <CountSelect
                        value={selections[subTypeKey] || 0} // 기본값을 0으로 설정
                        onChange={(e) => handleSelectionChange(subTypeKey, parseInt(e.target.value))}
                      >
                        {[0, 5, 10, 15].map(count => (
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
                    value={selections['OX선택형'] || 0} // 기본값을 0으로 설정
                    onChange={(e) => handleSelectionChange('OX선택형', parseInt(e.target.value))}
                  >
                    {[0, 5, 10, 15].map(count => (
                      <option key={count} value={count}>{count}개</option>
                    ))}
                  </CountSelect>
                </ButtonContainer>
              )}
            </Section>
            {type !== '서술형' && <Divider />}
          </React.Fragment>
        ))}
        <GenerateButtonContainer>
          <GenerateButton onClick={fetchQuestions}>문제 생성</GenerateButton>
        </GenerateButtonContainer>
      </Sidebar>
      <PageContainer>
        <InputContainer>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="프롬프트를 입력하세요."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <SubmitButton type="submit">제출</SubmitButton>
          </form>
        </InputContainer>
        <DownloadButtonContainer>
          <DownloadButton onClick={() => alert('PDF 다운로드 시작.....')}>PDF 다운로드</DownloadButton>
        </DownloadButtonContainer>
        {/* 서버로부터 받은 문제 데이터를 바탕으로 문제 유형 및 문제 내용을 표시하는 UI */}
        {questions.map((questionType, index) => (
          <React.Fragment key={index}>
            <Section>
              <Label>문제 유형: {questionType.type}</Label>
              {questionType.items.map((item, itemIndex) => (
                <QuestionContainer key={itemIndex}>
                  <p>{item.content}</p>
                  {/* 객관식 문제일 경우 선택지 렌더링 */}
                  {questionType.type === 1 && item.options.map((option, optionIndex) => (
                    <div key={optionIndex}>{option}</div>
                  ))}
                  <p>정답: {item.answer}</p>
                </QuestionContainer>
              ))}
            </Section>
            {index < questions.length - 1 && <QuestionDivider />}
          </React.Fragment>
        ))}
      </PageContainer>
    </>
  );
}

export default CreateQPage;