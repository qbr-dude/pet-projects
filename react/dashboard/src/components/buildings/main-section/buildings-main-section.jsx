import { Box, Card, CardContent, CardMedia, Divider, Grid, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomSearch from '../../ui/search';

const BuildingsMainSection = () => {
    return (
        <Box sx={{ maxHeight: '90vh', flexGrow: 1, top: 75, height: 1, overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none', }}> {/* hide scroll bar */}
            <Card sx={{ p: 2 }}>
                <CardMedia component='img' image='imgs/item-pic.png' sx={{ maxWidth: '730px', m: '0 auto' }} />
                <CardContent>
                    <Grid container>
                        <Grid item>
                            <Typography component='span' sx={{ fontSize: '12px', fontWeight: '500', color: '#9EA0A5', textTransform: 'uppercase' }}>Luxury Offices</Typography>
                            <Typography component='h6' variant='h6' sx={{ fontSize: '22px', fontWeight: 'regular' }}>Lotus Temple - Beautiful Offices</Typography>
                            <Typography component='span' sx={{ fontSize: '14px' }}>164 S. Carson Court Newport News, VA 23601</Typography>
                            <Typography component='p' sx={{ fontSize: '14px', color: '#6B6C6F', mt: 2 }}>Each unit will be constructed to a high standard and will benefit from minimum 10m eaves, a mix of dock and level loading doors and integral office accommodation, as well as generous loading yards.</Typography>
                            <Typography component='p' sx={{ fontSize: '14px', color: '#6B6C6F', my: 2 }}>The site is situated on Coldharbour Lane which is located to the south of the A13 dual carriageway in turn providing swift access proving to Junction 31 of motorway M25.</Typography>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                                <Typography component='span' sx={{ fontSize: '20px' }}>165 Ratings</Typography>
                                <Box><CustomSearch placeholder='Search ratings...' /></Box>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', mt: 2 }}>
                                <Stack spacing={1}>
                                    <Grid container>
                                        <Grid item md={6}><Typography component='span' sx={{ mr: '5px', fontSize: 14 }}>Accuracy</Typography></Grid>
                                        <Grid item md={6}><Rating defaultValue="4" /></Grid>
                                        <Grid item md={6}><Typography component='span' sx={{ mr: '5px', fontSize: 14 }}>Activity</Typography></Grid>
                                        <Grid item md={6}><Rating defaultValue="4" /></Grid>
                                        <Grid item md={6}><Typography component='span' sx={{ mr: '5px', fontSize: 14 }}>Cleanliness</Typography></Grid>
                                        <Grid item md={6}><Rating defaultValue="4" /></Grid>
                                    </Grid>
                                </Stack>
                                <Stack spacing={1}>
                                    <Grid container>
                                        <Grid item md={6}><Typography component='span' sx={{ mr: '5px', fontSize: 14 }}>Location</Typography></Grid>
                                        <Grid item md={6}><Rating defaultValue="4" /></Grid>
                                        <Grid item md={6}><Typography component='span' sx={{ mr: '5px', fontSize: 14 }}>Noice</Typography></Grid>
                                        <Grid item md={6}><Rating defaultValue="4" /></Grid>
                                        <Grid item md={6}><Typography component='span' sx={{ mr: '5px', fontSize: 14 }}>Value</Typography></Grid>
                                        <Grid item md={6}><Rating defaultValue="4" /></Grid>
                                    </Grid>
                                </Stack>
                            </Box>
                            <Divider />
                            <Box sx={{ pt: '15px', width: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Susie Chapman</span>
                                    <Rating defaultValue="4" />
                                </Box>
                                <p>
                                    You are empowered to make decisions and choose your own goals/tasks. Every day you meet so many amazing entrepreneurs as well as continuously build these relationships. Inspiring and fun meetings, all-hands & trips (Summer Camp & Summit). Support system! Everyone cares for your well-being and become family.
                                </p>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box></Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default BuildingsMainSection;
