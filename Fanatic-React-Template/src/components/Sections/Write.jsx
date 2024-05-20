import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import { useAuth } from '../Member/AuthContext';

const Write = ({ addPost }) => {
    const { user, cookie } = useAuth(); // 로그인한 사용자 정보
    const [title, setTitle] = useState(''); //제목  
    const [content, setContent] = useState(''); // 내용
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // 빈칸 제출 안되게
        const newPost = {
            title, // 제목
            author: user || '이름없음', // 로그인한 사용자의 이름 사용
            content, // 내용
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/post_create/`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${cookie.access_token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });

            if (response.ok) {
                const savedPost = await response.json(); // 글 정보 받기
                addPost(savedPost); 
            } else {
                console.error('Failed to submit post');
            }
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };    

    const handleUploadClick = (e) => {
        handleSubmit(e); // 글 업로드
        navigate('/FreeCommu'); // FreeCommu 화면으로 이동
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label>제목</Label>
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <Label>내용</Label>
                <StyledReactQuill value={content} onChange={setContent} />
                <ButtonContainer>
                <Button type="submit" onClick={handleUploadClick}>업로드</Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
};

export default Write;

const Container = styled.div`
    padding: 20px;
    background-color: #EFF8F3;
    margin-top: 100px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
`;

const Input = styled.input`
    margin-bottom: 20px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const StyledReactQuill = styled(ReactQuill)`
    height: 400px; /* 고정된 높이 설정 */
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px; /* 버튼 위치 조정을 위한 여백 추가 */
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;
