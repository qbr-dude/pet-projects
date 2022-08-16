import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const BuildingsListItem = ({ info, cardClick, buttonClick, isCurrent }) => {

    function handleCardClick() {
        cardClick(info.id);
    }

    function handleButtonClick() {
        // buttonClick();
    }

    return (
        <Card sx={{ height: '130px', position: 'relative', bgcolor: isCurrent ? '#EAEDF3' : '#FFF', boxShadow: 'none', borderTop: '1px solid #EAEDF3', borderRadius: 0 }}>
            <CardActionArea sx={{ display: 'flex', height: 1 }} onClick={handleCardClick}>
                <CardMedia image='imgs/pic.png' component='img' sx={{ width: '100px', px: 2 }} />
                <Box sx={{ mt: -3 }}>
                    <CardContent sx={{ pl: 1 }}>
                        <Typography vatiant='h6' component='h6' sx={{ fontSize: '16px', fontWeight: '500' }}>{info.name}</Typography>
                        <Typography sx={{ fontSize: '14px', color: '#9EA0A5', pt: '5px' }}>{info.description}</Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 0, right: 30, maxWidth: '195px', width: 1 }}>
                <CardActions>
                    <Button onClick={handleButtonClick}>For Rent</Button>
                </CardActions>
                <Typography sx={{ fontWeight: 'bold' }}>&pound;{info.pricePerSqm}/sqm</Typography>
            </Box>
        </Card >
    );
}

export default BuildingsListItem;
