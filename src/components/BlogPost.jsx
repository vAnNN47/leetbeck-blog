import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostData } from '../firebase/firebaseFunctions';

export const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const postData = await getPostData(slug);
            setPost(postData);
        };
        fetchPost();
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><em>{new Date(post.createdAt.seconds * 1000).toLocaleString()}</em></p>
        </div>
    );
};

