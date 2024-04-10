import React from 'react';
import styled from "styled-components";

const Membership = () => {
    return (
        <Wrapper>
            <div>회원가입 페이지 입니다.</div>
        </Wrapper>
    );
  };
   
  export default Membership;



  const Wrapper = styled.section`
  margin-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  background:#EFF8F3;
`;