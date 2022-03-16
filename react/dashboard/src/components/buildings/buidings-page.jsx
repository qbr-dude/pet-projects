import { Box, Card, CardContent, CardMedia, Divider, Grid, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import Search from '../ui/search';
import BuildingsHeader from './buildings-header/buildings-header';
import BuildingsSide from './buildings-side/buildings-side';

/*  */
const BuildingsPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <BuildingsHeader />
            <Box display='flex'>
                <BuildingsSide />
                <Divider orientation='vertical' />
                <Box sx={{ position: 'sticky', maxHeight: '90vh', flexGrow: 1, top: 75, height: 1 }}> {/* should've been written in other way? */}
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
                                        <Box><Search placeholder='Search ratings...' /></Box>
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

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default BuildingsPage;