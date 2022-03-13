import { PersonAdd } from '@mui/icons-material';
import { AppBar, FormControl, MenuItem, Select, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const BuildingsHeader = () => {
    const [buildType, setBuildType] = useState(0);

    function handleChange(event) {
        setBuildType(event.target.value);
    }

    return (
        <AppBar position='sticky' sx={{ width: 1 }} color='transparent'>
            <Toolbar>
                <FormControl fullWidth sx={{ maxWidth: 180 }}>
                    <Select
                        id='sort-select'
                        value={buildType}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'Without label' }}
                        sx={{ height: 40 }}
                    >
                        <MenuItem value={0}>
                            <PersonAdd />
                            <span style={{ marginLeft: '5px' }}>All Buildings</span>
                        </MenuItem>
                        <MenuItem value={1}>First Type</MenuItem>
                        <MenuItem value={2}>Second Type</MenuItem>
                        <MenuItem value={3}>Third Type</MenuItem>
                    </Select>
                </FormControl>
                <Box>

                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default BuildingsHeader;
