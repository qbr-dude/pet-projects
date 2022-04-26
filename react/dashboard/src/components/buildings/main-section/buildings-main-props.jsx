import BackupTableIcon from '@mui/icons-material/BackupTable';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const BuildingsMainProps = () => {
    return (
        <div>
            <Typography component='span' sx={{ fontSize: '12px', fontWeight: '500', color: '#9EA0A5', textTransform: 'uppercase' }}>Property features</Typography>
            <Box sx={{ mt: '15px' }}>
                <Box>
                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between', mt: '12px' }}><span style={{ color: '#6B6C6F' }}>Property Type</span><span>Open Space</span></Box>
                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between', mt: '12px' }}><span style={{ color: '#6B6C6F' }}>Office Size</span><span>1400 m2</span></Box>
                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between', mt: '12px' }}><span style={{ color: '#6B6C6F' }}>Suitable for</span><span>16-25 People</span></Box>
                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between', mt: '12px' }}><span style={{ color: '#6B6C6F' }}>Meeting Rooms</span><span>2</span></Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: '20px' }}><Button variant='outlined' startIcon={<BackupTableIcon />}>View a Floor Plan</Button></Box>
            </Box>
        </div>
    );
}

export default BuildingsMainProps;
