import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';


const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 var(--hover, #66bb6a);
  }
  100% {
    box-shadow: 0 0 0 2em transparent;
  }
`;

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
  width: 95%;
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
    animation: ${pulseAnimation} 1s;
    box-shadow: 0 0 0 2em transparent;
  }

  ${({ active }) => active && `
    background-color: #007BFF;
    color: white;
    border-color: #007BFF;
  `}
`;

const Button = styled.button`
  ${buttonStyles}
  --hover: #66bb6a;
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
  // 기존 스타일 유지
  width: 65%;
  min-height: 300px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  font-size: 16px;
  color: #333;
  position: relative;
  border-radius: 8px;

  h1, h2, h3 {
    font-size: 1.5em;
    color: #333;
  }

  em {
    font-weight: bold;
  }
`;


const UploadSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1px;
  margin-right: 50px;
`;

const GuidelineTitle = styled.h1`
  color: #50C878; 
  text-align: center;
  margin-top : 50px;
`;

const GuidelineText = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top : 50px;
`;

const MarkdownPreview = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  margin-top: 20px;
  background-color: #f9f9f9;

  h1, h2, h3 {
    font-size: 1.5em;
    color: #333;
    font-weight: bold; /* h1, h2, h3 태그에 대한 폰트 굵기 설정 */
  }

  // strong 태그를 렌더링하지 않음
  em {
    font-weight: normal;
  }
`;

function DiaryPage() {
  const [formValues, setFormValues] = useState({
    who: '',
    when: '',
    where: '',
    what: '',
    how: '',
    why: '',
    others: '',
  });

    const [hashtags, setHashtags] = useState([]);
  const [showGuideline, setShowGuideline] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [editorText, setEditorText] = useState('');
  const [markdownText, setMarkdownText] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  // togglePreview 함수 수정하여 마크다운 미리보기 모드 전환 시 텍스트 저장 및 복원
const togglePreview = () => {
  if (!previewMode && editorText) {
    setMarkdownText(editorText); // 마크다운 텍스트 저장
  }
  setPreviewMode(!previewMode);
};

  const handleTextChange = value => {
    setEditorText(value);
  }; 

  const placeholders = {
    who: 'ex) 내가, 친구랑',
    when: 'ex) 어제, 오늘, 점심에, 저녁에',
    where: 'ex) 학교에서, 집에서',
    what: 'ex) 공부를 했다, 과제를 했다',
    how: 'ex) 강의를 보면서, 멘토링을 하면서',
    why: 'ex) 시험 때문에, 프로젝트 때문에',
    others: 'ex) 기타 사항을 적어주세요',
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
  const parseMarkdown = text => {
    // 이 함수는 ReactMarkdown을 사용하여 실제 마크다운을 HTML로 변환하지 않습니다.
    // 단순히 일반 텍스트에서 마크다운 문법을 해석하여 저장합니다.
    if (!text) return '';
    return text; // 이 예시에서는 변환 로직을 구현하지 않습니다.
  };

  useEffect(() => {
    parseMarkdown();
  }, [editorText]);

  useEffect(() => {
    if (previewMode && editorText) {
      const newParsedMarkdown = parseMarkdown(editorText);
      setEditorText(newParsedMarkdown);
    }
  }, [previewMode, editorText]); // 의존성 배열에 previewMode와 editorText 추가

  const createDiary = async () => {
    const newTags = Object.values(formValues)
      .filter(value => value)
      .map(value => value.replace(/\s+/g, ''));
    setHashtags(newTags);

    const markdownText = `
      **Who:** ${formValues.who}\n
      **When:** ${formValues.when}\n
      **Where:** ${formValues.where}\n
      **What:** ${formValues.what}\n
      **How:** ${formValues.how}\n
      **Why:** ${formValues.why}\n\n
      ${formValues.others}
    `;
    setEditorText(markdownText);
    setShowGuideline(false);

    const diaryData = {
        who: formValues.who,
        when: formValues.when,
        where: formValues.where,
        what: formValues.what,
        how: formValues.how,
        why: formValues.why,
        others: formValues.others,
        hashtags: newTags,
    };
  

    try {
      // 쟝고에 일기 생성 요청
      const response = await fetch(`${process.env.REACT_APP_Server_IP}/generate_daily/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diaryData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // 쟝고로부터 받은 일기 텍스트
      const generatedDiaryText = data.diaryText.replace(/\n/g, "\n\n");
  
      // 일기 텍스트를 마크다운 형식으로 변환하여 에디터에 표시
      setEditorText(data.diaryText);
  
      // 가이드라인 숨기기
      setShowGuideline(false);
    } catch (error) {
      console.error("Error creating diary:", error);
    }
  };

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => setUploading(false), 2000);
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
                placeholder={placeholders[key]}
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
          <Button onClick={togglePreview}>
            {previewMode ? '일반 보기' : '마크다운 미리보기'}
          </Button>
        </InputColumn>
        <DiaryOutput>
        {showGuideline ? (
  <>
    <GuidelineTitle>Guide Line</GuidelineTitle>
    <GuidelineText>육하원칙에 해당하는 내용을 작성해주세요.</GuidelineText>
    <GuidelineText>작성한 후 해시태그 생성을 눌러주세요.</GuidelineText>
    <GuidelineText>해시태그가 생성된 후 해시태그를 바탕으로 일기 생성이 됩니다.</GuidelineText>
  </>
) : (
  previewMode ? (
    <MarkdownPreview>
                <ReactMarkdown
                  children={editorText}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    // 별표로 둘러싸인 텍스트를 굵게 표시
                    strong: ({ node, children, ...props }) => <span style={{ fontWeight: 'bold' }} {...props}>{children}</span>,
                    // h1 태그 스타일 적용
                    h1: ({ node, children, ...props }) => <h1 style={{ fontWeight: 'bold' }} {...props}>{children}</h1>,
                    // h2 태그 스타일 적용
                    h2: ({ node, children, ...props }) => <h2 style={{ fontWeight: 'bold' }} {...props}>{children}</h2>,
                    // h3 태그 스타일 적용
                    h3: ({ node, children, ...props }) => <h3 style={{ fontWeight: 'bold' }} {...props}>{children}</h3>,
                  }}
                />
              </MarkdownPreview>
  ) : (
    <ReactQuill value={editorText} onChange={handleTextChange} />
  )
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