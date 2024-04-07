import React, { useState } from 'react';
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


function CreateQPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selections, setSelections] = useState({});
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [question, setQuestion] = useState('');

  const toggleSelection = (key) => {
    setSelectedTypes(prev => 
      prev.includes(key) ? prev.filter(type => type !== key) : [...prev, key]
    );
  };
  const handleSelectionChange = (key, count) => {
    setSelections(prev => ({
      ...prev,
      [key]: count
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`질문이 제출되었습니다: ${question}`);
    // 이 부분에서 질문을 처리하는 로직(예: API 호출)을 구현할 수 있습니다.
  };

  const fetchQuestions = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/GenerateProblem/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selections })
    })
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      console.log(data); // Fetch된 문제 데이터 처리
    })
    .catch(error => {
      console.error('Fetching questions failed:', error);
      setError(error.message);
      setLoading(false);
    });
  };

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
                        value={selections[subTypeKey] || 5}
                        onChange={(e) => handleSelectionChange(subTypeKey, parseInt(e.target.value))}
                      >
                        {[5, 10, 15].map(count => (
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
                    value={selections['OX선택형'] || 5}
                    onChange={(e) => handleSelectionChange('OX선택형', parseInt(e.target.value))}
                  >
                    {[5, 10, 15].map(count => (
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
          <DownloadButton onClick={() => alert('PDF 다운로드 시작...')}>PDF 다운로드</DownloadButton>
        </DownloadButtonContainer>
      </PageContainer>
    </>
  );
}



export default CreateQPage;