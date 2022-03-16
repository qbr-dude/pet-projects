import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import BuildingsGrid from './buildings-grid';
import BuildingsList from './buildings-list';
import BuildingsSideHeader from './buildings-side-header';

const StyledScrollBox = styled(Box)({
    height: '85vh',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
    scrollbarWidth: 'none',
})

const BuildingsSide = () => {
    const [displayType, setDisplayType] = useState('list');
    // TODO add styles for selected
    return (
        <Box maxWidth='350px' width='100%'>
            <BuildingsSideHeader displayType={displayType} handle={setDisplayType} />
            <StyledScrollBox>
                {displayType === 'list' ? <BuildingsList /> : <BuildingsGrid />}
            </StyledScrollBox>
        </Box>
    );
}

export default BuildingsSide;
