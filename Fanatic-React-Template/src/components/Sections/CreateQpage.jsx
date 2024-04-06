import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//function CreateQpage() {
//  const [questions, setQuestions] = useState([]);
  //const [loading, setLoading] = useState(false);
//  const [error, setError] = useState(null);

//  useEffect(() => {
//    setLoading(true); // 로딩 상태 시작
    // 실제 백엔드 서버의 주소로 교체해야 합니다.
//    fetch('http://your-backend-domain.com/api/questions')
//      .then(response => {
//        if (!response.ok) {
//          throw new Error('Network response was not ok');
//        }
//        return response.json(); // JSON으로 변환
//      })
//      .then(data => {
//        setQuestions(data); // 상태 업데이트
//        setLoading(false); // 로딩 상태 종료
//      })
//      .catch(error => {
//        console.error('Fetching questions failed:', error);
//        setError(error.message); // 에러 상태 업데이트
//        setLoading(false); // 로딩 상태 종료
//      });
//  }, []);

//  if (loading) {
//    return <p>Loading questions...</p>;
//  }

//  if (error) {
//    return <p>Error loading questions: {error}</p>;
//  }

//  return (
//    <QuestionContainer>
//      {questions.map((q, index) => (
//        <QuestionBlock key={index}>
//          <QuestionTitle>{index + 1}. {q.question}</QuestionTitle>
//          <OptionsList>
//            {q.options.map((option, idx) => (
//              <Option key={idx}>
//                <RadioInput
//                  type="radio"
//                  name={`question_${index}`}
//                  id={`question_${index}_option_${idx}`}
//                />
//                <OptionLabel htmlFor={`question_${index}_option_${idx}`}>{option}</OptionLabel>
//              </Option>
//            ))}
//          </OptionsList>
//        </QuestionBlock>
//      ))}
//    </QuestionContainer>
//  );
//}

//export default CreateQpage; 

// 이 코드는 데이터를 넣으면 문제가 이렇게 나온다는 예시 실제로는 위의 코드를 사용해야 함
function CreateQpage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // 예시 데이터입니다. 실제로는 백엔드에서 데이터를 가져옵니다.
    const fetchedQuestions = [
      // 객관식 문제
      { type: 'multiple-choice', question: '문제 1', options: ['선택지 1', '선택지 2', '선택지 3', '선택지 4'], answer: 'A' },
      { type: 'multiple-choice', question: '문제 2', options: ['선택지 1', '선택지 2', '선택지 3', '선택지 4'], answer: 'A' },
      { type: 'multiple-choice', question: '문제 3', options: ['선택지 1', '선택지 2', '선택지 3', '선택지 4'], answer: 'A' },
      // 단답형 문제
      { type: 'short-answer', question: '문제 4', answer: '답변' },
      { type: 'short-answer', question: '문제 5', answer: '답변' },
      // 서술형 문제
      { type: 'long-answer', question: '문제 6', answer: '상세한 답변' },
      // ... 추가 문제 데이터
    ];
    setQuestions(fetchedQuestions);
  }, []);

  return (
    <QuestionContainer>
      {questions.map((q, index) => (
        <QuestionBlock key={index}>
          <QuestionTitleContainer>
            <QuestionTitle>{index + 1}. {q.question}</QuestionTitle>
          </QuestionTitleContainer>
          {q.type === 'multiple-choice' && (
            <OptionsList>
              {q.options.map((option, idx) => (
                <Option key={idx}>
                  <RadioInput
                    type="radio"
                    name={`question_${index}`}
                    id={`question_${index}_option_${idx}`}
                  />
                  <OptionLabel htmlFor={`question_${index}_option_${idx}`}>{option}</OptionLabel>
                </Option>
              ))}
            </OptionsList>
          )}
          {q.type === 'short-answer' && (
            <ShortAnswerInput type="text" />
          )}
          {q.type === 'long-answer' && (
            <LongAnswerTextarea />
          )}
        </QuestionBlock>
      ))}
    </QuestionContainer>
  );
}

export default CreateQpage;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const QuestionBlock = styled.div`
  background-color: #f0f8ff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
`;

const QuestionTitleContainer = styled.div`
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuestionTitle = styled.h2`
  color: #333;
  margin: 0;
`;

const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const OptionLabel = styled.label`
  display: block;
  font-size: 1rem;
  cursor: pointer;
`;

const ShortAnswerInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(100% - 22px);
  background-color: #f0f8ff;
`;

const LongAnswerTextarea = styled.textarea`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(100% - 22px);
  height: 150px;
  background-color: #f0f8ff;
`;