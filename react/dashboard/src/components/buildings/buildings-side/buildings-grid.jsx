import { Grid } from '@mui/material';
import React from 'react';
import BuildingsGridItem from './buildings-grid-item';

const BuildingsGrid = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <BuildingsGridItem />
            </Grid>
            <Grid item xs={6}>
                <BuildingsGridItem />
            </Grid>
            <Grid item xs={6}>
                <BuildingsGridItem />
            </Grid>
            <Grid item xs={6}>
                <BuildingsGridItem />
            </Grid>
            <Grid item xs={6}>
                <BuildingsGridItem />
            </Grid>
            <Grid item xs={6}>
                <BuildingsGridItem />
            </Grid>
        </Grid>
    );
}

export default BuildingsGrid;
