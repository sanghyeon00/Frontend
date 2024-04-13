import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";

export default function Header() {
  const navigate = useNavigate();

  const handleEnterClassroom = () => {
    navigate("/classroom");
    // 여기에 강의실 입장 로직 구현
  };
  
  const handleCreateQuestion = () => {
    navigate("/create_question");
    // 여기에 문제 생성 로직 구현
  };

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <ContentWrapper>
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">iSoda 학습실</h1>
            <HeaderP className="font13 semiBold">
              iSoda 학습실 설명
            </HeaderP>
            <QuoteWrapper>
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <p className="font15 whiteColor">
                <em style={{color:'black'}}>Friendsssssssssssss, such as wasasaddsssse desire, are dreams and fables. Friendship demands the ability to do without it.</em>
              </p>
              
            </QuoteWrapper>
          </div>
        </LeftSide>
        <BtnWrapper>
          <FullButton title="강의실" action={handleEnterClassroom} style={{ marginTop: '10px' }} />
          <FullButton title="+ 문제 생성" action={handleCreateQuestion} style={{ marginTop: '10px' }} />
        </BtnWrapper>
      </ContentWrapper>
      <RightSide>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  background:#EFF8F3;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; // 가운데 정렬을 유지합니다.
  flex-direction: column;
  margin-left: -300px; // 좌측으로 조금 이동하도록 마진을 조정합니다. 값은 조정 가능합니다.
  @media (max-width: 960px) {
    margin-left: 0; // 모바일 뷰에서는 마진을 제거합니다.
    text-align: center; // 모바일 뷰에서 텍스트를 중앙 정렬합니다.
    width: 100%;
  }
`;

const RightSide = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    margin-top: 31px;
  }
`;

const HeaderP = styled.p`
  max-width: 470px;
  padding: 15px 0 20px 0; // 조정됨
  line-height: 1.5rem;
  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  position: absolute;
  right: 400px; // 오른쪽 여백을 유지합니다.
  top: 300px; // 버튼이 상단에서 50픽셀 떨어지도록 설정합니다. 조정이 필요하다면 이 값을 변경하세요.
  display: flex;
  flex-direction: column;
  align-items: flex-end; // 버튼들을 오른쪽 끝으로 정렬합니다.
  gap: 10px; // 버튼들 사이의 간격입니다.
  @media (max-width: 960px) {
    top: 40px; // 모바일 뷰에서의 버튼 위치를 조정합니다.
    right: 0; // 모바일 뷰에서는 버튼을 화면 오른쪽 끝에 붙입니다.
    align-items: center; // 모바일 뷰에서 버튼들을 중앙으로 정렬합니다.
  }
`;



const QuoteWrapper = styled.div`
  max-width: 330px;
  z-index: 99;
  @media (max-width: 960px) {
    margin-top: 20px; // 조정됨
  }
`;

const QuotesWrapper = styled.div`
  position: relative; // 변경됨
  top: -10px;
  left: 0; // 변경됨
`;

