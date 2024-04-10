import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function CreateQpage() {
 const [questions, setQuestions] = useState([]);
 const [questions2, setQuestions2] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 useEffect(() => {
   setLoading(true); // 로딩 상태 시작
    // 실제 백엔드 서버의 주소로 교체해야 합니다.
   fetch("http://127.0.0.1:8000/GenerateProblem/", { 
  method: "POST",
  headers: {
      'Content-Type': 'application/json',
    },
 })
 .then((response) => response.json())
     .then(data => {
       setQuestions(data); // 상태 업데이트
       console.log('data1'+data)
      //  setLoading(false); // 로딩 상태 종료
     })
     .catch(error => {
       console.error('Fetching questions failed:', error);
       setError(error.message); // 에러 상태 업데이트
      //  setLoading(false); // 로딩 상태 종료
     });

     fetch("http://127.0.0.1:8000/GenerateProblem_v2/", { 
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
        },
     })
     .then((response) => response.json())
     .then(data => {
      setQuestions2(data); // 상태 업데이트
      console.log('data2'+data)
      setLoading(false); // 로딩 상태 종료
    })
    .catch(error => {
      console.error('Fetching questions failed:', error);
      setError(error.message); // 에러 상태 업데이트
      setLoading(false); // 로딩 상태 종료
    });
 }, []);

 if (loading) {
   return <p>Loading questions...</p>;
 }

 if (error) {
   return <p>Error loading questions: {error}</p>;
 }


return (
  <Wrapper>
    <QuestionContainer>
      {questions2.map((q, index) => (
        <QuestionBlock key={index}>
          <QuestionTitle>{index + 1}. {q.question}</QuestionTitle>
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
        </QuestionBlock>
      ))}
      {questions.map((q, index) => (
            <QuestionBlock key={index}>
              <QuestionTitle>{index + 1}. {q.question}</QuestionTitle>
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
            </QuestionBlock>
          ))}
        </QuestionContainer>
      </Wrapper>
);
}

export default CreateQpage;


const Wrapper = styled.section`
  margin-top: 320px;
`;

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

// const QuestionTitleContainer = styled.div`
//   background-color: #ffffff;
//   padding: 10px 20px;
//   border-radius: 8px;
//   margin-bottom: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

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

// const ShortAnswerInput = styled.input`
//   padding: 10px;
//   margin-top: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: calc(100% - 22px);
//   background-color: #f0f8ff;
// `;

// const LongAnswerTextarea = styled.textarea`
//   padding: 10px;
//   margin-top: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: calc(100% - 22px);
//   height: 150px;
//   background-color: #f0f8ff;
// `;
