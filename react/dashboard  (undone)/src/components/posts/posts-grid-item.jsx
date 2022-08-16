import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const PostsGridItem = ({ info }) => {
    return (
        <Grid item xs={1} lg={1}>
            <Card sx={{ flex: 1, height: 350 }}>
                <CardActionArea sx={{ height: 1 }}>
                    <CardContent>
                        <Typography>{info.title}</Typography>
                        <p>{info.body}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default PostsGridItem;
