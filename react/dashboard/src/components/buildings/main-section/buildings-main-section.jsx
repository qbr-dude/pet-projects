import { Box, Card, CardContent, CardMedia, Grid, Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuildingsMainInfo from './buildings-main-info';
import BuildingsMainPhotos from './buildings-main-photos';
import BuildingsMainProps from './buildings-main-props';

const BuildingsMainSection = () => {

    const dispath = useDispatch();
    const currentItem = useSelector(state => state.current);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [currentItem]);

    return (
        <Box sx={{ maxHeight: '90vh', flexGrow: 1, top: 75, height: 1, overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none', }}> {/* hide scroll bar */}
            <Card sx={{ p: 2 }} variant="outlined">
                {(isLoading) ? <Skeleton variant='rectangle' animation="wave" sx={{ height: 150 }} /> : <CardMedia component='img' image='imgs/item-pic.png' sx={{ maxWidth: '730px', m: '0 auto 10px' }} />}
                <CardContent>
                    <Grid container columns={{ xs: 4, xl: 12 }} spacing={2}>
                        <Grid item xs={4} xl={9}>
                            {(isLoading) ? <Skeleton variant='rectangle' animation="wave" sx={{ height: 250 }} /> : <BuildingsMainInfo />}
                        </Grid>
                        <Grid item xs={4} xl={3}> {/* TODO needs to resolve situation with comments */}
                            <Grid container columns={{ xs: 4, xl: 4 }} spacing={2}>
                                <Grid item xs={2} xl={4}>
                                    {(isLoading) ? <Skeleton variant='rectangle' animation="wave" sx={{ height: 150 }} /> : <BuildingsMainProps />}
                                </Grid>
                                <Grid item xs={2} xl={4}>
                                    {(isLoading) ? <Skeleton variant='rectangle' animation="wave" sx={{ height: 150 }} /> : <BuildingsMainPhotos />}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box >
    );
}


export default BuildingsMainSection;
