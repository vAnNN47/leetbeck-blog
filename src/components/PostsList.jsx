import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../firebase/firebaseFunctions';
import styled from 'styled-components';

const PostsWrapper = styled.div`
    text-align: left
`;

export const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const postsData = await fetchPosts();
            setPosts(postsData);
        };
        getPosts();
    }, []);

    return (
        <PostsWrapper>
            <h1>Leetbeck Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </PostsWrapper>
    );
};
