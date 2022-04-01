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

const list = [
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' },
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' },
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' },
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' },
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' },
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' },
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' },
    { name: 'Bauhaus Archive', description: '7246 Woodland Rd. Waukesha, WI 53186', pricePerSqm: '75' }
]

const BuildingsSide = () => {
    const [displayType, setDisplayType] = useState('list');
    return (
        <Box maxWidth='350px' width='100%'>
            <BuildingsSideHeader displayType={displayType} handle={setDisplayType} />
            <StyledScrollBox>
                {displayType === 'list' ? <BuildingsList list={list} /> : <BuildingsGrid list={list} />}
            </StyledScrollBox>
        </Box>
    );
}

export default BuildingsSide;
