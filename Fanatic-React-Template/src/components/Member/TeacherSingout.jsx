import styled from "styled-components";
import logo from '../../assets/img/Loginout/greenlogo.png';
import React, { useState, useEffect } from 'react';
import Join from "../Buttons/Join";
import { useNavigate } from "react-router-dom";

const TeacherSingout = () => {

    const [id, setid] = useState('');
    const [password, setpassword] = useState('');
    const [passwordcheack, setpasswordcheack] = useState('');
    const [name, setname] = useState('');
    const [studentid, setstudentid] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [phoneid, setphoneid] = useState('');


    const idUpdate = (event) => {
        setid(event.target.value); // 입력한 아이디로 상태 업데이트
      };
    const passwordUpdate = (event) => {
        setpassword(event.target.value); // 입력한 아이디로 상태 업데이트
    };
    const passwordcheackUpdate = (event) => {
        setpasswordcheack(event.target.value); // 입력한 아이디로 상태 업데이트
    };
    const nameUpdate = (event) => {
        setname(event.target.value); // 입력한 아이디로 상태 업데이트
    };
    const studentidUpdate = (event) => {
        setstudentid(event.target.value); // 입력한 아이디로 상태 업데이트
    };
    const emailUpdate = (event) => {
        setemail(event.target.value); // 입력한 아이디로 상태 업데이트
    };
    const phoneUpdate = (event) => {
        setphone(event.target.value); // 입력한 아이디로 상태 업데이트
    };
    const phoneidUpdate = (event) => {
        setphoneid(event.target.value); // 입력한 아이디로 상태 업데이트
    };



    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };
    const handleDayChange = (event) => {
        setDay(event.target.value);
    };



    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const [agreement1, setAgreement1] = useState(false);

    const agreementChange1 = () => {
        setAgreement1(!agreement1);
    };

    const [agreement2, setAgreement2] = useState(false);

    const agreementChange2 = () => {
        setAgreement2(!agreement2);
    };

    const [agreement3, setAgreement3] = useState(false);

    const agreementChange3 = () => {
        setAgreement3(!agreement3);
    };

    const navigate = useNavigate();

    const Singout = () => {
        navigate("/");
    };

    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    const handlePasswordCheck = (event) => {
        const { value } = event.target;
        setpasswordcheack(value);
        setIsPasswordMatch(value === password);
    };

    const isAllAgreed = agreement1 && agreement2 && agreement3;

    // 입력 상태를 확인하는 상태 변수 추가
    const [isInputValid, setInputValid] = useState(false);

    // 각 입력 요소에 대한 입력 유효성 검사 함수 정의
    const validateInputs = () => {
        // 필수 입력 요소에 대한 상태를 확인하여 유효성 검사 수행
        const isValid = id !== '' && password !== '' && passwordcheack !== '' && name !== '' && studentid !== '' && email !== '' && phone !== '' && phoneid !== '' && year !== '' && month !== '' && day !== '' && gender !== '' && isAllAgreed && isPasswordMatch;
        // 입력 상태를 변경
        setInputValid(isValid);
    };

    useEffect(() => {
        validateInputs();
    }, [id, password, passwordcheack, name, studentid, email, phone, phoneid, year, month, day, gender, agreement1, agreement2, agreement3]);
    

    return (
        <Wrapper>
            <LoginBox>
                <img src={logo} alt="로고 이미지"  style={{marginLeft:"250px",marginTop:"20px",marginBottom:"15px", width:"100px", height:"40px"}}/>
                <h1 style={{ textAlign:"center", fontSize:"25px"}} className="font25 extraBold">회원가입 (교수)</h1>
                <Separator />

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">아이디</strong> 
                <InputBox3 
                    type="text" 
                    value={id} 
                    onChange={idUpdate} 
                    placeholder="아이디를 입력해주세요." 
                />
                <CheckButton>중복확인</CheckButton>
                </div>

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">비밀번호</strong> 
                <InputBox4 
                    type="password" 
                    value={password} 
                    onChange={passwordUpdate} 
                    placeholder="비밀번호를 입력해주세요." 
                />
                </div>

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">비밀번호 확인</strong> 
                <InputBox6 
                    type="password" 
                    value={passwordcheack} 
                    onChange={handlePasswordCheck} 
                    style={{borderColor: isPasswordMatch ? '#000' : 'red'}}
                    placeholder="비밀번호를 한번 더 입력해주세요." 
                />
                </div>

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">이름</strong> 
                <InputBox2 
                    type="text" 
                    value={name} 
                    onChange={nameUpdate} 
                    placeholder="이름을 입력해주세요." 
                />
                </div>

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">교번</strong> 
                <InputBox2 
                    type="text" 
                    value={studentid} 
                    onChange={studentidUpdate} 
                    placeholder="학번을 입력해주세요." 
                />
                </div>

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">이메일</strong> 
                <InputBox3 
                    type="text" 
                    value={email} 
                    onChange={emailUpdate} 
                    placeholder="ex.) rlftkdgus0621@hallym.ac.kr" 
                />
                </div>

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">휴대폰</strong> 
                <InputBox3
                    type="text" 
                    value={phone} 
                    onChange={phoneUpdate} 
                    placeholder="숫자만 입력해주세요." 
                />
                <CheckButton>인증번호 받기</CheckButton>
                </div>

                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">인증번호</strong> 
                <InputBox4 
                    type="text" 
                    value={phoneid} 
                    onChange={phoneidUpdate} 
                    placeholder="인증번호 4자리를 입력하세요." 
                />
                </div>

                <div style={{marginTop:"7px"}}> 
                    <GenderContainer>
                    <GenderLabel>성별</GenderLabel>
                        <div>
                            <GenderCheckbox
                                type="radio"
                                id="male"
                                value="male"
                                checked={gender === "male"}
                                onChange={handleGenderChange}
                            />
                            <GenderCheckboxLabel htmlFor="male">남자</GenderCheckboxLabel>
                        </div>
                        <div>
                            <GenderCheckbox
                                type="radio"
                                id="female"
                                value="female"
                                checked={gender === "female"}
                                onChange={handleGenderChange}
                            />
                            <GenderCheckboxLabel htmlFor="female">여자</GenderCheckboxLabel>
                        </div>
                    </GenderContainer>
                </div>

                <BirthDateContainer>
                    <BirthDateLabel>생년월일</BirthDateLabel>
                    <BirthDateInput
                        type="text"
                        placeholder="YYYY"
                        value={year}
                        onChange={handleYearChange}
                    />
                    <Separatorr>/</Separatorr>
                    <BirthDateInput
                        type="text"
                        placeholder="MM"
                        value={month}
                        onChange={handleMonthChange}
                    />
                    <Separatorr>/</Separatorr>
                    <BirthDateInput
                        type="text"
                        placeholder="DD"
                        value={day}
                        onChange={handleDayChange}
                    />
                </BirthDateContainer>
                <Separator />
                <div style={{marginBottom:"7px"}}>
                    <strong style={{ fontSize:"15px", fontWeight:"bold", marginLeft:"25px"}} className="font15 extraBold">이용약관 동의</strong> 
                    <Checkbox2 type="checkbox" checked={agreement1} onChange={() => agreementChange1(!agreement1)}/> <strong style={{fontSize:"20px"}}>개인정보 수집 동의</strong>
                    <div><Checkbox type="checkbox" checked={agreement2} onChange={() => agreementChange2(!agreement2)}/> <strong style={{fontSize:"20px"}}>개인정보 이용 동의</strong></div>
                    <div><Checkbox type="checkbox" checked={agreement3} onChange={() => agreementChange3(!agreement3)}/> <strong style={{fontSize:"20px"}}>GPS 사용 동의</strong></div>
                </div>
                <Join title="가입하기" action={Singout} margin_left={true} margin_top={true} disabled={!isInputValid}/>
            </LoginBox>
        </Wrapper>
    );
  };
   
  export default TeacherSingout;



  const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 1300px;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  background:#EFF8F3;
`;

const LoginBox = styled.div`
margin-top: 300px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:600px;
height:1080px;
background: #FFFFFF;
bottom: 0;
border-radius: 3px;
`;

const Separator = styled.div`
  width: 550px;
  height: 1px;
  background-color: #000;
  margin-top: 40px; /* 구분선 위 간격 조정 */
  margin-bottom: 20px; /* 구분선 아래 간격 조정 */
  margin-left:25px;
`;

const InputBox2 = styled.input`
margin-top:10px;
margin-left:105px;
width:280px;
height:40px;
border: 1px solid #000000;
padding-left: 10px;
border-radius: 3px;
margin-right:10px;
`;

const InputBox3 = styled.input`
margin-top:10px;
margin-left:90px;
width:280px;
height:40px;
border: 1px solid #000000;
padding-left: 10px;
border-radius: 3px;
margin-right:10px;
`;

const InputBox4 = styled.input`
margin-top:10px;
margin-left:76px;
width:280px;
height:40px;
border: 1px solid #000000;
padding-left: 10px;
border-radius: 3px;
margin-right:10px;
`;

const InputBox6 = styled.input`
margin-top:10px;
margin-left:42px;
width:280px;
height:40px;
border: 1px solid #000000;
padding-left: 10px;
border-radius: 3px;
margin-right:10px;
`;

const CheckButton = styled.button`
  background-color: #fff;
  color: #20C075;
  fontWeight:"bold";
  border: 3px solid #20C075;
  border-radius: 3px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    border-width:4px;
  }
`;

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 25px;
`;

const GenderLabel = styled.label`
  margin-right: 30px;
  font-size: 15px;
  font-weight: bold;
`;

const GenderCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GenderCheckbox = styled.input`
  margin-right: 5px;
  margin-left: 10px;
  width: 17px;
  height: 17px;
  appearance: none;
  border: 2px solid #20C075;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-left:80px;


  &:checked {
    background-color: #20C075;
  }
`;

const GenderCheckboxLabel = styled.span`
  font-size: 15px;
`;

const BirthDateContainer = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  display: flex;
  align-items: center;
`;

const BirthDateLabel = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-right: 76px;
`;

const BirthDateInput = styled.input`
  width: 60px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
  margin-right: 5px;
  
`;

const Separatorr = styled.span`
  font-size: 15px;
  margin-right: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid #20C075;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-left:140px;


  &:checked {
    background-color: #20C075;
  }
`;

const Checkbox2 = styled.input`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid #20C075;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-left:20.5px;

  &:checked {
    background-color: #20C075;
  }
`;