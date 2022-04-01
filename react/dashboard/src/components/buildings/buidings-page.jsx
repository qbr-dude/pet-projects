import { Box, Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import BuildingsHeader from './buildings-header/buildings-header';
import BuildingsSide from './buildings-side/buildings-side';
import BuildingsMainSection from './main-section/buildings-main-section';

/*  */
const BuildingsPage = () => {
    const currentItem = useSelector(state => state.current);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <BuildingsHeader />
            <Box display='flex'>
                <BuildingsSide />
                <Divider orientation='vertical' />
                <BuildingsMainSection />
            </Box>
        </Box>
    );
}

export default BuildingsPage;