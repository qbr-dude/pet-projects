import { Box, Divider } from '@mui/material';
import React from 'react';
import BuildingsHeader from './buildings-header/buildings-header';
import BuildingsList from './buildings-list/buildings-list';

const BuildingsPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <BuildingsHeader />
            <Box flex>
                <BuildingsList />
            </Box>
        </Box>
    );
}

export default BuildingsPage;