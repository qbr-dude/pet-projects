import { Box } from '@mui/material';
import React from 'react';
import BuildingsHeader from './buildings-header';

const BuildingsPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <BuildingsHeader />
        </Box>
    );
}

export default BuildingsPage;