import { Grid } from '@mui/material';
import React from 'react';
import PostsGridItem from './posts-grid-item';

const posts = [
    { id: 1, title: 'some', body: 'nope' },
    { id: 2, title: 'some', body: 'nope' },
    { id: 3, title: 'some', body: 'nope' },
    { id: 4, title: 'some', body: 'nope' },
    { id: 5, title: 'some', body: 'nope' },
    { id: 6, title: 'some', body: 'nope' },
    { id: 7, title: 'some', body: 'nope' },
    { id: 8, title: 'some', body: 'nope' },
    { id: 9, title: 'some', body: 'nope' },
    { id: 10, title: 'some', body: 'nope' },
    { id: 11, title: 'some', body: 'nope' },
]

const PostsGrid = () => {
    return (
        <Grid container columns={{ xs: 4, xl: 8 }}>
            {posts.map((post) => (
                <PostsGridItem key={post.id} info={post} />
            ))}
        </Grid>
    );
}

export default PostsGrid;
