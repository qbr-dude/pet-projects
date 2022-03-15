import { Box, Divider } from '@mui/material';
import React from 'react';
import BuildingsHeader from './buildings-header/buildings-header';
import BuildingsSide from './buildings-side/buildings-side';

const BuildingsPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <BuildingsHeader />
            <Box display='flex'>
                <BuildingsSide />
                <Divider orientation='vertical' itemFlex />
            </Box>
        </Box>
    );
}

export default BuildingsPage;