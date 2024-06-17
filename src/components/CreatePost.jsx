import React, { useState } from 'react';
import { createPost } from '../firebase/firebaseFunctions';

export const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = title.toLowerCase().replace(/ /g, '-');
        const post = { title, content, slug, createdAt: new Date() };
        await createPost(post);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

