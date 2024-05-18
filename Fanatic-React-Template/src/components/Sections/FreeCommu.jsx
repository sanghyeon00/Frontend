import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const FreeCommu = ({ posts, addPost }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [currentPosts, setCurrentPosts] = useState([]);

    useEffect(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
    }, [currentPage, posts, postsPerPage]);

    const handlePostClick = (postId) => {
        navigate(`/posts/${postId}`);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <Header>
                <Title>자유 게시판</Title>
                <WriteButton to="/write">글쓰기</WriteButton>
            </Header>
            <PostList>
                {currentPosts.map((post, index) => (
                    <PostCard key={post.id} onClick={() => handlePostClick(post.id)}>
                        <PostHeader>
                            <PostAuthorInfo>
                                <PostAuthorAvatar src="/path/to/avatar.jpg" alt="Author Avatar" />
                                <div>
                                    <PostAuthor>{post.author}</PostAuthor>
                                    <PostDate>{post.date}</PostDate>
                                </div>
                            </PostAuthorInfo>
                            <PostIndex>{(currentPage - 1) * postsPerPage + index + 1}</PostIndex>
                        </PostHeader>
                        <PostTitle>{post.title}</PostTitle>
                        <PostExcerpt>{(post.content || '').substring(0, 100)}...</PostExcerpt>
                        <PostFooter>
                            <CommentsCount>댓글수: {post.comments}</CommentsCount>
                        </PostFooter>
                    </PostCard>
                ))}
            </PostList>
            <Pagination>
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
                    <PageNumber key={i + 1} onClick={() => paginate(i + 1)} active={i + 1 === currentPage}>
                        {i + 1}
                    </PageNumber>
                ))}
            </Pagination>
        </Container>
    );
};

export default FreeCommu;

const Container = styled.div`
    padding: 20px;
    background-color: #EFF8F3;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center; /* 가운데 정렬 */
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px; /* 제목과 버튼을 포함하는 너비를 PostCard와 맞춤 */
    margin-bottom: 20px;
`;

const Title = styled.h1`
    color: #333;
    font-size: 2em;
`;

const WriteButton = styled(Link)`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

const PostList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center; /* 가운데 정렬 */
`;

const PostCard = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;
    width: 800px; /* 너비를 줄입니다. */
    &:hover {
        transform: translateY(-5px);
    }
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const PostAuthorInfo = styled.div`
    display: flex;
    align-items: center;
`;

const PostAuthorAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const PostAuthor = styled.p`
    margin: 0;
    font-weight: bold;
`;

const PostDate = styled.p`
    margin: 0;
    color: #999;
    font-size: 0.9em;
`;

const PostIndex = styled.span`
    font-size: 1.5em;
    color: #999;
`;

const PostTitle = styled.h2`
    margin: 0;
    font-size: 1.5em;
    font-weight: bold;
`;

const PostExcerpt = styled.p`
    margin: 10px 0;
    color: #666;
`;

const PostFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CommentsCount = styled.span`
    color: #4CAF50;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const PageNumber = styled.div`
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    background-color: ${({ active }) => (active ? '#4CAF50' : '#fff')};
    color: ${({ active }) => (active ? '#fff' : '#333')};
    border: 1px solid #ddd;
    border-radius: 5px;
    &:hover {
        background-color: ${({ active }) => (active ? '#45a049' : '#f0f0f0')};
    }
`;