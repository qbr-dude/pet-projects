import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import BuildingsHeader from './../components/buildings/buildings-header/buildings-header';
import BuildingsSide from './../components/buildings/buildings-side/buildings-side';
import BuildingsMainSection from './../components/buildings/main-section/buildings-main-section';

/*  */
const BuildingsPage = () => {
    const currentItem = useSelector(state => state.current);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <BuildingsHeader />
            <Box display='flex'>
                <BuildingsSide />
                <BuildingsMainSection />
            </Box>
        </Box >
    );
}

export default BuildingsPage;