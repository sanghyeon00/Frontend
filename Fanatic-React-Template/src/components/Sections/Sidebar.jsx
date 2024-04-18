import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: calc(100vh - 60px); /* 상단바의 높이만큼 높이 조정 */
  position: fixed;
  left: 0;
  top: 60px; /* 상단바 높이에 맞춰 사이드바 위치 조정 */
  background-color: #66FF99; /* 연한 회색 배경 */
  padding: 20px;
  box-shadow: 2px 0px 5px rgba(0,0,0,0.1);
  overflow-y: auto; /* 내용이 많을 경우 스크롤바 생성 */
`;

const Sidebar = ({ children }) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};

export default Sidebar;
