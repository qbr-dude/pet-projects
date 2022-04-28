import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchAllPosts } from '../API/fetchPosts';
import PostsGrid from '../components/posts/posts-grid';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    async function fetching() {
        setPosts(await fetchAllPosts());
    }

    useEffect(() => {
        fetching();
    }, []);

    return (
        <Box sx={{ width: 1, px: 2, textAlign: 'center' }}>
            <h1>Current posts</h1>
            <PostsGrid posts={posts} />
        </Box>
    );
}

export default PostsPage;
