import { Box } from '@mui/material';
import React, { useState } from 'react';
import BuildingsGrid from './buildings-grid';
import BuildingsList from './buildings-list';
import BuildingsSideHeader from './buildings-side-header';

const BuildingsSide = () => {
    const [displayType, setDisplayType] = useState('list');

    return (
        <Box maxWidth='350px' width='100%'>
            <BuildingsSideHeader displayType={displayType} handle={setDisplayType} />
            {displayType === 'list' ? <BuildingsList /> : <BuildingsGrid />}
        </Box>
    );
}

export default BuildingsSide;
