import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Write = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            date: new Date().toISOString().split('T')[0],
            author: '이름없음',
            comments: 0,
            content,
        };
        addPost(newPost);
        navigate('/');
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
                    <Button type="submit">올리기</Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
};

export default Write;

const Container = styled.div`
    padding: 20px;
    background-color: #f0f0f0;
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
    margin-top: 20px; /* 버튼 위치 조정을 위한 여백 추가 */
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
