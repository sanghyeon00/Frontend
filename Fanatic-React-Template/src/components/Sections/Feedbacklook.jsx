import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Member/AuthContext";
import { MdReportProblem } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Feedbacklook = () => {
    const navigate = useNavigate();
    const { cookie } = useAuth();
    const { course_imformation } = useParams();
    
    const parts = course_imformation.split("$$");
    const course_name = parts[0];
    const course_professor = parts[1];
    
    const location = useLocation();

    const [selectedTab, setSelectedTab] = useState("feedback");
    const [feedback, setFeedback] = useState({});

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const dataorganize = () => {
        let elements = {};
        for (let i = 1; i <= feedback.count; i++) {
            elements[i] = feedback[i];
        }
        return elements;
    };

    const data = dataorganize();
    const histogramData = Object.entries(data).map(([questionNumber, answerCount]) => ({
        questionNumber,
        answerCount
    }));

    const handleBack = () => {
        navigate(`/feedback/${decodeURIComponent(course_imformation)}`);
    };

    useEffect(() => {
        fetchfeedbacklook();
    }, []);


    const fetchfeedbacklook = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_Server_IP}/feedback/`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${cookie.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: location.state.id
            })
        });
        const result = await response.json();
      
        if (response.ok) {
            setFeedback(result || {});
            console.log(result);
        } 
        else {
            console.error(`불러오기 실패 : ${result.message}`);
        }
      } catch (error) {
        console.error('Error fetching date list:', error);
      }
    };

    const renderQuizAccuracy = () => {
        const elements = [];
        for (let i = 1; i <= feedback.count; i++) {
            let result = 100 / feedback.cnt * feedback[i];
            elements.push(
                <div key={i} style={{ display: "flex", alignItems: "center", marginBottom:"5px"}}>
                    <h3 style={{color:"#4CAF50",marginRight: "5px"}}>{i}번 정답률 : </h3>  
                    <h3 style={{marginRight: "5px"}}>{result} % </h3>
                    <h3 style={{color:"#ccc"}}>({feedback[i]}/{feedback.cnt}명)</h3>
                </div>
            );
        }
        console.log(elements);
        return elements;
    };

    return(
        <Wrapper>
            <div style={{width:"200px", display:"flex", flexDirection:"row", marginBottom:"30px"}}>
                <FeedbackButton onClick={() => handleTabChange("feedback")} selected={selectedTab === "feedback"}>
                    <h4 style={{fontWeight:"bold"}}>FeedBack</h4>
                </FeedbackButton>

                <ProblemButton onClick={() => handleTabChange("problem")} selected={selectedTab === "problem"}>
                    <h4 style={{fontWeight:"bold"}}>Quiz</h4>
                </ProblemButton>
            </div>

                {selectedTab === 'feedback' ? (
                <Content>
                    <Title>
                        <h2 style={{color:"#20C075", fontWeight:"bold"}}>{course_name} 피드백 ({location.state.date})</h2>
                        <Underline />
                    </Title>

                        <FeedbackBox>
                            <h3 style={{fontWeight:"bold"}}>FeedBack</h3>
                            <FeedbackContent>
                                {feedback.feedback}
                            </FeedbackContent>
                        </FeedbackBox>

                        <BoxWrapper>
                            <HistBox>
                                <Title>
                                    <h3 style={{fontWeight:"bold"}}>Quiz 히스토그램</h3>
                                </Title>
                                    <div style={{width:"400px", height:"400px", marginRight:"20px"}}>
                                        <BarChart
                                            width={420}
                                            height={300}
                                            data={histogramData}
                                            margin={{ top: 15, right: 30, left: 0, bottom: 0 }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="questionNumber" />
                                            <YAxis interval={1} />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="answerCount" fill="#8884d8" />
                                        </BarChart>
                                    </div>
                            </HistBox>
                            <HistBox>
                                <Title>
                                    <h3 style={{fontWeight:"bold"}}>Quiz 정답률</h3>
                                </Title>
                                <div style={{ width: "300px", height: "260px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    {renderQuizAccuracy()}
                                </div>
                            </HistBox>
                        </BoxWrapper>
                        <Button onClick={handleBack}><h4>확인</h4></Button>
                </Content>   
            ) : (
                <Content>
                <Title>
                    <h2 style={{color:"#20C075", fontWeight:"bold"}}>{course_name} 퀴즈목록 ({location.state.date})</h2>
                    <Underline />
                </Title>
                    {/* <Button><h4>확인</h4></Button> */}
            </Content>
        )}
        </Wrapper>
    );
}

export default Feedbacklook;

const Wrapper = styled.div`
  margin-top:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1050px;
  background: #EFF8F3;
  flex-direction: column;
`;

const Content = styled.div`
  width: 60%;
  min-height:80%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:15px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Underline = styled.div`
  width: 500px;
  height: 2px;
  background-color: #20C075;
  margin-top: 12px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-top: 40px;
`;

const HistBox = styled.div`
  width: 400px;
  height: 350px;
  background-color: #FBFAFA;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FeedbackBox = styled.div`
  width: 850px;
  height: 250px;
  justify-content: center;
  background-color: #FBFAFA;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-top:40px;
`;

const FeedbackContent = styled.div`
  overflow-y: auto;
  height:200px;
`;

const Button = styled.button`
  background: ${props => props.disabled ? '#ccc' : '#4CAF50'};
  color: ${props => props.disabled ? '#666' : 'white'};
  border: none;
  border-radius:7px;
  padding: 10px 20px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background: ${props => props.disabled ? '#ccc' : '#367c39'};
  }
`;

const FeedbackButton = styled.div`
    width: 100px;
    height: 40px;
    background-color: ${props => props.selected ? "#8DF689" : "#FBFAFA"};
    color: ${props => props.selected ? "black" : "#ccc"};
    border: 1px solid #ccc;
    border-radius: 10px 0px 0px 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProblemButton = styled.div`
    width: 100px;
    height: 40px;
    background-color: ${props => props.selected ? "#8DF689" : "#FBFAFA"};
    color: ${props => props.selected ? "black" : "#ccc"};
    border: 1px solid #ccc;
    border-radius: 0px 10px 10px 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;