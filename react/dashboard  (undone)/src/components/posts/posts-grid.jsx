import { Grid } from '@mui/material';
import React from 'react';
import PostsGridItem from './posts-grid-item';


const PostsGrid = ({ posts }) => {
    console.log(posts);

    if (!posts)
        return (null);
    return (
        <Grid container columns={{ xs: 3, xl: 6 }} spacing={3} sx={{ width: 1 }}>
            {posts.map((post) => (
                <PostsGridItem key={post.id} info={post} />
            ))}
        </Grid>
    );
}

export default PostsGrid;
