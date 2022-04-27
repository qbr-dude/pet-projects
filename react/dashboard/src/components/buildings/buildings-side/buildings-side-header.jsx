import ViewListIcon from '@mui/icons-material/ViewList';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import { Box, Divider, styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React from 'react';

const StyledToggleButton = styled(ToggleButton)({
    '&.MuiToggleButton-root': {
        border: 'none',
        padding: '5px 10px'
    },
    '&.Mui-selected': {
        backgroundColor: 'transparent',
    }
})

const BuildingsSideHeader = ({ displayType, handle }) => {

    function handleDisplaySwitch(event, type) {
        if (type !== null) {
            handle(type);
        }
    }

    return (
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <Typography variant='h6' component='h6' fontSize='18px'>45 Buildings</Typography>
            <Box>
                <ToggleButtonGroup
                    aria-label='display switch'
                    value={displayType}
                    exclusive
                    color='primary'
                    onChange={handleDisplaySwitch}
                >
                    <StyledToggleButton value='list'>
                        {displayType === 'list' ? <ViewListIcon /> : <ViewListOutlinedIcon />}
                    </StyledToggleButton>
                    {/* <Divider orientation='vertical' flexItem sx={{ bgcolor: 'rgba(0, 0, 0, .12)' }} />            it works, but gives the error constantly  */}
                    <StyledToggleButton value='grid'>
                        {displayType === 'grid' ? <ViewModuleIcon /> : <ViewModuleOutlinedIcon />}
                    </StyledToggleButton>
                </ToggleButtonGroup>
            </Box>
        </Box>
    );
}

export default BuildingsSideHeader;
