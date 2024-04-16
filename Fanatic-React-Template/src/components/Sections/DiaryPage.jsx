import React, { useState } from 'react';
import styled from 'styled-components';
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

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #367c39;
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
    // 해시태그를 생성합니다.
    const newTags = Object.values(formValues)
      .filter(value => value)
      .map(value => value.replace(/\s+/g, ''));
  
    // 백엔드 API 엔드포인트로 요청을 보냅니다.
    // 'http://localhost:8000/api/create-diary' 부분은 실제 백엔드 엔드포인트로 변경해야 합니다.
    try {
      const response = await fetch(`${process.env.REACT_APP_Server_IP}/GenerateQuestion/`, {
        method: 'POST', // 요청 방식
        headers: {
          'Content-Type': 'application/json', // 보내는 리소스의 타입
          // 필요한 경우, 다른 헤더들을 추가할 수 있습니다. 예: 'Authorization': 'Bearer your-token'
        },
        body: JSON.stringify({ hashtags: newTags }), // 서버로 보내는 데이터
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json(); // 응답을 JSON 형태로 파싱합니다.
  
      // 받은 일기 내용으로 에디터를 업데이트합니다.
      setEditorText(data.diaryText);
      setShowGuideline(false);
    } catch (error) {
      // 오류 처리
      console.error('Error creating diary:', error);
      // 오류가 발생하면 사용자에게 알릴 수 있는 상태를 설정하거나 메시지를 표시할 수 있습니다.
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
          <Button onClick={handleUpload}>업로드</Button>
          {uploading && <div style={{ fontSize: '16px', textAlign: 'center' }}>업로드중...</div>}
        </UploadSection>
    </Container>
  );
}

export default DiaryPage;
