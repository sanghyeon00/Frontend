import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const MainContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  padding: 20px;
  margin-top: 100px;
`;

const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  background-color: #ccffcc;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  margin-right: 20px;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-top: 10px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const buttonStyles = css`
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border: 2px solid #4CAF50;
  background-color: white;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s, border-radius 0.3s;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(145deg, #4caf50, #66bb6a);
    background-color: #4CAF50;
    border-radius: 8px;
    animation: ${pulseAnimation} 1s; /* 애니메이션 추가 */
    box-shadow: 0 0 0 2em transparent; /* 초기 상태 */
  }

  ${({ active }) => active && `
    background-color: #007BFF;
    color: white;
    border-color: #007BFF;
  `}
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 var(--hover, #66bb6a);
  }
  100% {
    box-shadow: 0 0 0 2em transparent;
  }
`;

const Button = styled.button`
  ${buttonStyles}
  --hover: #66bb6a; /* 호버 색상 설정 */
  &:hover, &:focus {
    animation: ${pulseAnimation} 1s;
    box-shadow: 0 0 0 2em transparent;
  }
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #e0e0e0;
  margin: 5px;
  border-radius: 15px;
  cursor: pointer;

  &:before {
    content: '#';
  }

  &:after {
    content: '×';
    padding-left: 10px;
    font-weight: bold;
  }
`;

const HashTagBox = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  min-height: 150px;
  word-wrap: break-word;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`;


const DiaryOutput = styled.div`
  width: 65%;
  min-height: 300px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  font-size: 16px;
  color: #333;
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`;

const UploadSection = styled.div`
  display: flex; // flex로 설정
  justify-content: flex-end; // 우측 정렬
  margin-top: 1px;
  margin-right: 50px;
`;


const GuidelineTitle = styled.h1`
  color: #50C878; /* Emerald color */
  text-align: center;
  margin-top : 50px;
`;

const GuidelineText = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top : 50px;
`;



function DiaryPage() {
  const [formValues, setFormValues] = useState({
    who: '',
    when: '',
    where: '',
    what: '',
    how: '',
    why: ''
  });
  const [hashtags, setHashtags] = useState([]);
  const [diaryText, setDiaryText] = useState('');
  const [showGuideline, setShowGuideline] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editorText, setEditorText] = useState('');

  const placeholders = {
    who: 'ex) 내가, 친구랑',
    when: 'ex) 어제, 오늘, 점심에, 저녁에',
    where: 'ex) 학교에서, 집에서',
    what: 'ex) 공부를 했다, 과제를 했다',
    how: 'ex) 강의를 보면서, 멘토링을 하면서',
    why: 'ex) 시험 때문에, 프로젝트 때문에'
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeleteTag = tag => {
    setHashtags(prev => prev.filter(t => t !== tag));
  };


  const generateHashtags = () => {
    const newTags = Object.values(formValues)
      .filter(value => value)
      .map(value => value.replace(/\s+/g, ''));
    setHashtags(newTags);
  };

  const createDiary = async () => {
    // 사용자 입력으로부터 해시태그를 생성합니다.
    const newTags = Object.values(formValues)
      .filter(value => value)
      .map(value => value.replace(/\s+/g, ''));
    setHashtags(newTags);  // UI에 해시태그 표시

    // JSON 데이터 구조, 서버에 전송
    const diaryData = {
        who: formValues.who,
        when: formValues.when,
        where: formValues.where,
        what: formValues.what,
        how: formValues.how,
        why: formValues.why,
        hashtags: newTags
    };

    // 서버에 일기 생성 요청
    try {
      const response = await fetch(`${process.env.REACT_APP_Server_IP}/api/create-diary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diaryData)  // JSON 형식의 데이터 전송
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();  // 응답 데이터를 JSON 형식으로 변환
      const formattedText = data.diaryText.replace(/(\.)/g, '$1\n');
    setEditorText(formattedText);
    setShowGuideline(false);
  } catch (error) {
    console.error('Error creating diary:', error);
  }
};

  const handleUpload = () => {
    setUploading(true);
    // 여기에 실제 파일 업로드 로직을 추가하세요.
    setTimeout(() => setUploading(false), 2000); // 임시 업로드 시뮬레이션
  };

  return (
    <Container>
      <MainContent>
      <InputColumn>
        {Object.keys(formValues).map(key => (
          <div key={key}>
            <InputLabel htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</InputLabel>
            <Input
              type="text"
              id={key}
              name={key}
              value={formValues[key]}
              onChange={handleChange}
              placeholder={placeholders[key]} // placeholder 추가
            />
          </div>
        ))}
        <Button onClick={generateHashtags}>해시태그 생성</Button>
        <HashTagBox>
          {hashtags.map((tag, index) => (
            <Tag key={index} onClick={() => handleDeleteTag(tag)}>
              {tag}
            </Tag>
          ))}
        </HashTagBox>
        <Button onClick={createDiary}>일기 생성</Button>
      </InputColumn>
      <DiaryOutput>
  {/* showGuideline 상태에 따라 조건부 렌더링 */}
  {showGuideline ? (
    // 가이드라인 텍스트를 표시합니다.
    <>
      <GuidelineTitle>Guide Line</GuidelineTitle>
      <GuidelineText>육하원칙에 해당하는 내용을 작성해주세요.</GuidelineText>
      <GuidelineText>작성한 후 해시태그 생성을 눌러주세요.</GuidelineText>
      <GuidelineText>해시태그가 생성된 후 해시태그를 바탕으로 일기 생성이 됩니다.</GuidelineText>
    </>
  ) : (
    // 리치 텍스트 에디터를 표시합니다.
    <ReactQuill value={editorText} onChange={setEditorText} />
  )}
</DiaryOutput>
      </MainContent>
      <UploadSection>
          <Button onClick={handleUpload}>업로드+</Button>
          {uploading && <div style={{ fontSize: '16px', textAlign: 'center' }}>업로드중...</div>}
        </UploadSection>
    </Container>
  );
}

export default DiaryPage;
