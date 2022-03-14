import { Box, Button, Divider, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import { styled } from '@mui/material';
import React, { useState } from 'react';

const StyledToggleButton = styled(ToggleButton)({
    '&.MuiToggleButton-root': {
        border: 'none'
    },
    '&.Mui-selected': {
        backgroundColor: 'transparent',
    }
})

const BuildingsListHeader = () => {
    const [displayType, setDisplayType] = useState('list');

    function handleDisplaySwitch(event, type) {
        if (type !== null) {
            setDisplayType(type);
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
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: 'rgba(0, 0, 0, .12)' }} />
                    <StyledToggleButton value='tile'>
                        {displayType === 'tile' ? <ViewModuleIcon /> : <ViewModuleOutlinedIcon />}
                    </StyledToggleButton>
                </ToggleButtonGroup>
            </Box>
        </Box>
    );
}

export default BuildingsListHeader;
