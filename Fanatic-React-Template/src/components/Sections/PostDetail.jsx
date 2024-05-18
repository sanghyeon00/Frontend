import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PostDetail = ({ posts }) => {
    const { postId } = useParams();
    const post = posts.find(p => p.id === parseInt(postId));
    const [comments, setComments] = useState(post.comments || []);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        // 댓글 가져오기
        const fetchComments = async () => {
            const response = await fetch(`/api/posts/${postId}/comments/`);
            const data = await response.json();
            setComments(data);
        };

        fetchComments();
    }, [postId]);

    if (!post) {
        return <Container>게시글을 찾을 수 없습니다.</Container>;
    }

    //comments 상태를 업데이트 하고 새로운 댓글 화면에 표시
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            const response = await fetch(`/api/posts/${postId}/comments/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: commentText }),
            });

            if (response.ok) {
                const newComment = await response.json();
                setComments([...comments, newComment]);
                setCommentText('');
            } else {
                // 에러 처리
                console.error('Failed to submit comment');
            }
        }
    };

    return (
        <Container>
            <PostHeader>
                <Title>{post.title}</Title>
                <PostInfo>
                    <AuthorInfo>
                        <AuthorAvatar src="/path/to/avatar.jpg" alt="Author Avatar" />
                        <Author>{post.author}</Author>
                    </AuthorInfo>
                    <Date>{post.date}</Date>
                </PostInfo>
            </PostHeader>
            <Content>{post.content}</Content>
            <CommentSection>
                <CommentForm onSubmit={handleCommentSubmit}>
                    <CommentInput
                        type="text"
                        placeholder="댓글을 입력하세요..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <CommentButton type="submit">작성</CommentButton>
                </CommentForm>
                <CommentsList>
                    {comments.map(comment => (
                        <Comment key={comment.id}>{comment.text}</Comment>
                    ))}
                </CommentsList>
            </CommentSection>
        </Container>
    );
};

export default PostDetail;

const Container = styled.div`
    padding: 40px;
    background-color: #fff;
    margin: 120px auto; /* 상단바에 가리지 않도록 조정 */
    max-width: 800px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const PostHeader = styled.div`
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
`;

const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
`;

const AuthorAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Author = styled.p`
    margin: 0;
    color: #555;
    font-weight: bold;
`;

const Date = styled.p`
    margin: 0;
    color: #999;
    font-size: 14px;
`;

const Content = styled.div`
    line-height: 1.6;
    color: #333;
    white-space: pre-wrap;
`;

const CommentSection = styled.div`
    margin-top: 40px;
`;

const CommentForm = styled.form`
    display: flex;
    margin-bottom: 20px;
`;

const CommentInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
`;

const CommentButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

const CommentsList = styled.div`
    border-top: 1px solid #ddd;
    padding-top: 20px;
`;

const Comment = styled.div`
    padding: 10px 0;
    background-color: #EFF8F3; /* 댓글 배경색을 연두색으로 설정 */
    border-bottom: 1px solid #eee;
    &:last-child {
        border-bottom: none;
    }
`;
