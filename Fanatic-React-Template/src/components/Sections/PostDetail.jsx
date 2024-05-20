import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import emptyHeart from '../../../src/assets/img/emptyheart.png';
import heart from '../../../src/assets/img/heart.png';
import watch from '../../../src/assets/img/watch.png';
import { useAuth } from '../Member/AuthContext';

const PostDetail = () => {
    const { postId } = useParams(); // URL에서 postId 가져옴
    const [post, setPost] = useState(null); // 게시글 상태
    const [comments, setComments] = useState([]); // 댓글 상태
    const [commentText, setCommentText] = useState(''); // 댓글 입력 상태
    const [likes, setLikes] = useState(0); // 좋아요 수 상태
    const [liked, setLiked] = useState(false); // 좋아요 눌렀는지 여부
    const { user } = useAuth(); // 로그인한 사용자 정보 가져오기
    const [views, setViews] = useState(0); // 조회수 상태

    useEffect(() => {
        const fetchPostData = async () => {
            console.log("Fetching post data with postId:", postId);
            try {
                const response = await fetch(`${process.env.REACT_APP_Server_IP}/content_view/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: postId }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                    setComments(data.comment); // 댓글 데이터 설정
                    setLikes(data.like); // 좋아요 수 설정
                    setViews(data.watch); // 조회수 설정
                    setLiked(data.like_check === 1); // 사용자가 좋아요를 눌렀는지 여부 설정
                } else {
                    console.error('Failed to fetch post data');
                }
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };

        fetchPostData();
    }, [postId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            try {
                const response = await fetch(`${process.env.REACT_APP_Server_IP}/comments/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content: commentText, post_id: postId, user_id: user.username }),
                });

                if (response.ok) {
                    const newComment = await response.json();
                    setComments([...comments, newComment]);
                    setCommentText('');
                } else {
                    console.error('Failed to submit comment');
                }
            } catch (error) {
                console.error('Error submitting comment:', error);
            }
        }
    };

    const handleLike = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/post_like/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: postId }),
            });

            if (response.ok) {
                const data = await response.json();
                setLikes(data.like);
                setLiked(true);
            } else {
                console.error('Failed to like post');
            }
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleDislike = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_Server_IP}/post_dislike/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: postId }),
            });

            if (response.ok) {
                const data = await response.json();
                setLikes(data.like);
                setLiked(false);
            } else {
                console.error('Failed to dislike post');
            }
        } catch (error) {
            console.error('Error disliking post:', error);
        }
    };

    if (!post) {
        return <Container>게시글을 찾을 수 없습니다.</Container>;
    }

    return (
        <Container>
            <PostHeader>
                <Title>{post.title}</Title>
                <PostInfo>
                    <AuthorInfo>
                        <AuthorAvatar src="/path/to/avatar.jpg" alt="Author Avatar" />
                        <Author>{post.author}</Author>
                    </AuthorInfo>
                    <DateTime>
                        {post.year}.{post.month}.{post.day} {post.hour}:{post.minute}
                    </DateTime>
                    <Icons>
                        <IconContainer>
                            <Icon src={watch} alt="views" />
                            <IconCount>{views}</IconCount>
                        </IconContainer>
                        <IconContainer onClick={liked ? handleDislike : handleLike}>
                            <Icon src={liked ? heart : emptyHeart} alt="likes" />
                            <IconCount>{likes}</IconCount>
                        </IconContainer>
                    </Icons>
                </PostInfo>
            </PostHeader>
            <Content dangerouslySetInnerHTML={{ __html: post.content }} />
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
                    {comments.map((comment, index) => (
                        <Comment key={index}>
                            <strong>{comment.user_id}</strong>: {comment.content}
                        </Comment>
                    ))}
                </CommentsList>
            </CommentSection>
        </Container>
    );
};

export default PostDetail;

// 스타일 정의는 이전 코드와 동일합니다.


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

const DateTime = styled.p`
    margin: 0;
    color: #999;
    font-size: 14px;
`;

const Icons = styled.div`
    display: flex;
    gap: 10px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

const IconCount = styled.span`
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
