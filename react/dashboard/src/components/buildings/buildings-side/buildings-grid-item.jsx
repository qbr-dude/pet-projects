import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const BuildingsGridItem = ({ info, cardClick }) => {

    function handleCardClick() {
        cardClick(info.id)
    }

    return (
        <Card>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }} onClick={handleCardClick}>
                <CardMedia
                    component='img'
                    image='imgs/pic.png'
                    alt='pic'
                    sx={{ width: '100px' }}
                />
                <CardContent>
                    <Typography vatiant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: '500' }}>Bauhaus Archive</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BuildingsGridItem;
