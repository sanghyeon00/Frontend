import React, { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReactImage from '../../../src/assets/img/soda.png';
import heart from '../../../src/assets/img/heart.png';
import view from '../../../src/assets/img/watch.png';
import { Link } from 'react-router-dom';

const center = {
    lat: 37.886381,
    lng: 127.736857
};

const markers = [
    { id: 1, position: { lat: 37.886447, lng: 127.735785 }, chatRooms: ['채팅방 1', '채팅방 2', '채팅방 3'] },
    { id: 2, position: { lat: 37.885800, lng: 127.736848 }, chatRooms: ['채팅방 4', '채팅방 5'] },
    { id: 3, position: { lat: 37.886369, lng: 127.737402 }, chatRooms: ['채팅방 6'] }
];


const MapComponent = ({ apiKey, setActiveChatRooms }) => {
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={{ width: '500px', height: '400px' }}
                center={center}
                zoom={17}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => setActiveChatRooms(marker.chatRooms)}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default function Community() {
    const [activeGrade, setActiveGrade] = useState('grade1');
    const [activeChatRooms, setActiveChatRooms] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);

    const searchTerms = {
        grade1: ['길상현', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6', 'ex7', 'ex8', 'ex9', 'ex10'],
        grade2: ['Example 1', 'Example 2', 'Example 3', 'Example 4', 'Example 5', 'Example 6', 'Example 7', 'Example 8', 'Example 9', 'Example 10'],
        grade3: ['Exam 1', 'Exam 2', 'Exam 3', 'Exam 4', 'Exam 5', 'Exam 6', 'Exam 7', 'Exam 8', 'Exam 9', 'Exam 10'],
        grade4: ['Example 1', 'Example 2', 'Example 3', 'Example 4', 'Example 5', 'Example 6', 'Example 7', 'Example 8', 'Example 9', 'Example 10']
    };

    const handleGradeChange = grade => setActiveGrade(grade);
    
    useEffect(() => {
        const fetchPopularPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_Server_IP}/post_view/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setPopularPosts(data.popular);
                } else {
                    console.error('Failed to fetch popular posts');
                }
            } catch (error) {
                console.error('Error fetching popular posts:', error);
            }
        };

        fetchPopularPosts();
    }, []); 

    return (
        <Container>
            <CardTitle>인기 게시물</CardTitle>
            <CardsContainer>
                {popularPosts.map(post => (
                    <PopularPostCard
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        preview={post.content}
                        image={ReactImage}
                        like={post.like}
                        watch={post.watch}
                        date={`${post.year}.${post.month}.${post.day}`}
                        comments={post.comment_number}
                    />
                ))}
            </CardsContainer>
            <HorizontalRule />
            <MainContent>
                <LeftColumn>
                    <StyledSection>
                        <CardTitle>자유 게시판</CardTitle>
                        <Button to="/freeCommu">자유게시판 바로가기 →</Button>
                        <FreedomPostCard>
                            <p>글 1</p>
                        </FreedomPostCard>
                        <FreedomPostCard>
                            <p>글 2</p>
                        </FreedomPostCard>
                        <FreedomPostCard>
                            <p>글 3</p>
                        </FreedomPostCard>
                    </StyledSection>
                </LeftColumn>
                <RightColumn>
                    <GradeTabs>
                        {Object.keys(searchTerms).map(grade => (
                            <GradeTab key={grade} active={activeGrade === grade} onClick={() => handleGradeChange(grade)}>
                                {grade.replace('grade', '')}학년
                            </GradeTab>
                        ))}
                    </GradeTabs>
                    <SearchList>
                        {searchTerms[activeGrade].map((term, index) => <SearchItem key={index}>{`${index + 1}. ${term}`}</SearchItem>)}
                    </SearchList>
                </RightColumn>
            </MainContent>
            <HorizontalRule />
            <StyledSection>
            <CardTitle>지도 및 채팅방</CardTitle>
            <MapAndChatContainer>
                        
                        <MapComponent apiKey="AIzaSyA6YxyGqgTTzQPYmjqBq5am4Q-KsyFDV3Y" setActiveChatRooms={setActiveChatRooms} />
                        <ChatRoomsContainer>                       
                        {activeChatRooms.map((room, index) => (
    <ChatRoomCard key={index}>{room}</ChatRoomCard>
))}

                </ChatRoomsContainer>
            </MapAndChatContainer>
            </StyledSection>
        </Container>
    );
}

/* 섹션 스타일 */
const Section = styled.section`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`;

const StyledSection = styled(Section)`
    position: relative; // 이를 기준으로 Button을 배치
    background-color: #DFF8D8; // 연두색 배경
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`;

/* 컨테이너 기본 설정 */
const Container = styled.div`
    padding: 20px;
    margin-top: 80px;
    background-color: #EFF8F3;
    display: flex;
    flex-direction: column;
`;

/* 카드 컨테이너 */
const CardsContainer = styled.div`
    display: flex;
    justify-content: center; // 카드들을 가운데 정렬합니다.
    flex-wrap: wrap;
    margin: 0; // 외부 마진 제거
    padding: 0 10px; // 양쪽 패딩을 추가하여 카드들 사이의 간격을 조정합니다.
`;

const MapAndChatContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MapContainer = styled.div`
    flex: 3; // 지도가 채팅방보다 넓게 설정
    padding: 20px;
    background: #f0f0f0; // 배경 색상 설정
`;


const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 255, 0, 0.5); // 반투명 남색 오버레이
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  padding: 10px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: translateY(100%);
  opacity: 0;
`;

const OverlayTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 255, 0, 0.5); // 남색 반투명 배경
  color: white;
  text-align: center;
  padding: 10px;
  transition: opacity 0.5s ease; // 페이드 아웃 효과
  opacity: 1; // 기본적으로 표시
`;

/* 각 카드 스타일 */
const Card = styled.div`
  position: relative;
  width: 300px;
  height: 180px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background-color: white; /* 여기에 흰색 배경을 지정합니다 */
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    ${Overlay} {
      transform: translateY(0);
      opacity: 1;
    }
    ${OverlayTitle} {
      opacity: 0;
    }
  }
`;

const FreedomPostCard = styled(Card)`
  width: 1000px; // 너비를 300px로 늘림
  background-color: white; // 배경색을 흰색으로 지정
`;

const FreedomLink = styled(Link)`
  position: absolute;
  right: 20px; // 우측에서 20px
  top: 20px; // 상단에서 20px
  color: #4CAF50; // 초록색 텍스트
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease; // 색상 변경 애니메이션

  &:hover {
    color: #45a049; // 호버 시 색상 변경
  }
`;

const Title = styled.h2`
  font-size: 16px;
  text-align: center;
`;

const Author = styled.div`
  font-size: 14px;
`;

const ContentPreview = styled.p`
  font-size: 12px;
  padding: 5px;
  text-align: center;
`;

const PopularPostCard = ({ title, author, preview, image, like, watch, date, comments }) => {
    const [hover, setHover] = useState(false);

    return (
        <Card bgImage={image} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <CardOverlayTitle style={{ backgroundColor: 'rgba(0, 255, 0, 0.5)', position: 'absolute', bottom: 0, width: '100%', opacity: hover ? 0 : 1 }}>
                <Title>{title}</Title>
                <Icons>
                    <IconContainer>
                        <Icon src={heart} alt="likes" />
                        <IconCount>{like}</IconCount>
                    </IconContainer>
                    <IconContainer>
                        <Icon src={view} alt="views" />
                        <IconCount>{watch}</IconCount>
                    </IconContainer>
                </Icons>
            </CardOverlayTitle>
            <Overlay style={{ transform: hover ? 'translateY(0)' : 'translateY(100%)', opacity: hover ? 1 : 0 }}>
                <Title>{title}</Title>
                <Author>{author}</Author>
                <ContentPreview>{preview}</ContentPreview>
                <PostDetails>
                    <PostDate>{date}</PostDate>
                    <CommentsCount>댓글수: {comments}</CommentsCount>
                </PostDetails>
            </Overlay>
        </Card>
    );
};



const CardOverlayTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 255, 0, 0.5);
  position: absolute;
  bottom: 0;
  width: 100%;
`;


const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const IconCount = styled.span`
  font-size: 14px;
`;

const PostDate = styled.div`
  font-size: 14px;
  color: #999;
`;

const CommentsCount = styled.div`
  font-size: 14px;
  color: #4CAF50;
`;

/* 카드 이미지 */
const CardImage = styled.img`
    width: 100%;
    height: 200px; // 이미지 높이를 늘려 정사각형 근사치 유지
    object-fit: cover;
`;

/* 카드 내용 */
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

/* 카드 타이틀 */
const CardTitle = styled.h2`
    margin-bottom: 20px;
`;

const CardAuthor = styled.div`
  font-size: 14px;
  text-align: center;
`;

/* 카드 설명 */
const CardDescription = styled.p`
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 0 10px; // 좌우 패딩 추가
`;

/* 메인 콘텐츠 */
const MainContent = styled.div`
    display: flex;
`;

/* 왼쪽 컬럼 */
const LeftColumn = styled.div`
    flex: 2;
    margin-right: 20px;
`;

/* 오른쪽 컬럼 */
const RightColumn = styled.div`
    flex: 1;
    background-color: #DFF8D8; /* 연두색 배경 추가 */
    padding: 20px; /* 패딩 추가 */
    border-radius: 10px; /* 모서리 둥글게 처리 */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 그림자 효과 추가 */
    height: 650px;
`;

/* 지도 플레이스홀더 */
const MapPlaceholder = styled.div`
    width: 200px;
    height: 200px;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

/* 채팅방 컨테이너 */
const ChatRoomsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    flex: 1;
`;


/* 채팅방 카드 */
const ChatRoomCard = styled.div`
    height: 150px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

/* 채팅방 이미지 */
const ChatRoomImage = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
`;

/* 애니메이션 키프레임 */
const slideIn = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
`;

const slideOut = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
`;

/* 용어 슬라이드 컨테이너 */
const TermContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/* 용어 슬라이드 */
const TermSlide = styled.div`
    animation: ${props => props.animating ? slideOut : slideIn} 1s forwards;
    width: 100%;
    text-align: center;
`;

/* 지도 컨테이너 스타일 */
const containerStyle = {
    width: '500px',
    height: '400px'
};

const GradeTabs = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const GradeTab = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: ${props => props.active ? '#FFD700' : 'transparent'};
    color: ${props => props.active ? 'white' : 'black'};
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #FFD700;
        color: white;
    }
`;

const SearchList = styled.div`
    list-style: none;
    background-color: #DFF8D8; /* 연두색 배경 추가 */
    padding: 10px; /* 내부 패딩 변경 */
    margin-bottom: 20px; /* 아래 마진 추가 */
    border-radius: 8px; /* 모서리 둥글게 처리 */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 그림자 효과 추가 */
    height: auto; /* 높이 자동 조절 */
`;


const SearchItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

const Button = styled(Link)`
    position: absolute;
    right: 20px; // 우측에서 20px
    top: 20px; // 상단에서 20px
    color: #4CAF50; // 초록색 텍스트
    font-weight: bold;
    text-decoration: none;
    &:hover {
        text-decoration: underline; // 호버 시 밑줄 효과
        color: #45a049; // 호버 시 색상 변경
    }
`;

const HorizontalRule = styled.hr`
    border: none;
    height: 2px;
    background-color: #ccc; // 회색 톤으로 설정
    margin: 20px 0; // 상하 마진 추가
`;