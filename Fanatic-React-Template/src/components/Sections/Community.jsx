import React, { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";

export default function Community() {
    const [isMapLoaded, setMapLoaded] = useState(false);
    const [activeGrade, setActiveGrade] = useState('grade1');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const termsData = {
        grade1: ['1. 길상현', '2. 자바', '3. 코테', '4. 프론트엔드', '5. 백엔드', '6. 쟝고', '7. 리액트', '8. 파이썬', '9. 공부 꿀팁', '10. 코딩 잘 하는 법'],
        grade2: ['Example 1', 'Example 2', 'Example 3'],
        grade3: ['Example 1', 'Example 2', 'Example 3'],
        grade4: ['Example 1', 'Example 2', 'Example 3']
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=your_app_key&autoload=false";
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                setMapLoaded(true);
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };
                new window.kakao.maps.Map(container, options);
            });
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setCurrentIndex(current => (current + 1) % termsData[activeGrade].length);
                setAnimating(false);
            }, 1000); // 1 second for animation
        }, 6000); // Additional 1 second for stay

        return () => clearInterval(interval);
    }, [activeGrade, termsData]);
    

    return (
        <Container>
            <CardTitle>인기 게시물</CardTitle>
            <CardsContainer>
                <Card>
                    <CardImage src="https://example.com/image1.jpg" alt="게시물 이미지 1" />
                    <CardContent>
                        <CardTitle>게시물 1</CardTitle>
                        <CardDescription>게시물 설명이 여기에 들어갑니다.</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardImage src="https://example.com/image2.jpg" alt="게시물 이미지 2" />
                    <CardContent>
                        <CardTitle>게시물 2</CardTitle>
                        <CardDescription>게시물 설명이 여기에 들어갑니다.</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardImage src="https://example.com/image3.jpg" alt="게시물 이미지 3" />
                    <CardContent>
                        <CardTitle>게시물 3</CardTitle>
                        <CardDescription>게시물 설명이 여기에 들어갑니다.</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardImage src="https://example.com/image4.jpg" alt="게시물 이미지 4" />
                    <CardContent>
                        <CardTitle>게시물 4</CardTitle>
                        <CardDescription>게시물 설명이 여기에 들어갑니다.</CardDescription>
                    </CardContent>
                </Card>
            </CardsContainer>
            <MainContent>
                <LeftColumn>
                    <Section>
                        <CardTitle>자유 게시판</CardTitle>
                        <Card>
                            <p>글 1</p>
                        </Card>
                        <Card>
                            <p>글 2</p>
                        </Card>
                        <Card>
                            <p>글 3</p>
                        </Card>
                    </Section>
                    <Section>
                        <CardTitle>지도</CardTitle>
                        <MapPlaceholder id="map" style={{ width: '100%', height: '200px', display: isMapLoaded ? 'block' : 'none' }}>
                            {!isMapLoaded && <p>Loading Map...</p>}
                        </MapPlaceholder>
                    </Section>
                </LeftColumn>
                <RightColumn>
                <Section>
                    <CardTitle>학년별 인기 검색어</CardTitle>
                    <Card>
                        <TermContainer>
                            <TermSlide key={currentIndex} animating={animating}>
                                {termsData[activeGrade][currentIndex]}
                            </TermSlide>
                        </TermContainer>
                    </Card>
                </Section>
                    <Section>
                        <CardTitle>채팅방</CardTitle>
                        <ChatRoomsContainer>
                            <ChatRoomCard>
                                <ChatRoomImage src="https://example.com/chatroom1.jpg" alt="채팅방 이미지 1" />
                            </ChatRoomCard>
                            <ChatRoomCard>
                                <ChatRoomImage src="https://example.com/chatroom2.jpg" alt="채팅방 이미지 2" />
                            </ChatRoomCard>
                            <ChatRoomCard>
                                <ChatRoomImage src="https://example.com/chatroom3.jpg" alt="채팅방 이미지 3" />
                            </ChatRoomCard>
                        </ChatRoomsContainer>
                    </Section>
                </RightColumn>
            </MainContent>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 100px;
    padding: 20px;
    background-color: #f4f4f4;
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex: 1 1 22%; // 약 25%에서 각 카드 사이의 간격을 고려
    background: #fff;
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 200px; // 이미지 높이를 늘려 정사각형 근사치 유지
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 10px;
    flex-grow: 1;
`;

const CardTitle = styled.h2`
    color: #333;
    padding: 0;
    margin: 0;
`;

const CardDescription = styled.p`
    color: #666;
`;

const MainContent = styled.div`
    display: flex;
`;

const LeftColumn = styled.div`
    flex: 2;
    margin-right: 20px;
`;

const RightColumn = styled.div`
    flex: 1;
`;

const MapPlaceholder = styled.div`
    height: 200px;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

const ChatRoomsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 20px;
`;

const ChatRoomCard = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

const ChatRoomImage = styled.img`
    width: 100%;
    height: 100px;  // 조절해야 할 수도 있음
    object-fit: cover;
`;

const Section = styled.section`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`;

const slideIn = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
`;

const slideOut = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
`;

const TermContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TermSlide = styled.div`
    animation: ${props => props.animating ? slideOut : slideIn} 1s forwards;
    width: 100%;
    text-align: center;
`;
