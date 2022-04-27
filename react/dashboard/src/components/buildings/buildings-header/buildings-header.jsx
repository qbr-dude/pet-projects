import { AppBar, Divider, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import BuildingsSearch from './buildings-search';
import SelectionSort from './selection-sort';


const types = [
    'All Buildings',
    'First Type',
    'Second Type',
    'Third Type'
]

const languages = [
    'ENG',
    'RUS'
]

const BuildingsHeader = () => {
    const [buildType, setBuildType] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [language, setLanguage] = useState(0);

    function handleTypeChange(event) {
        setBuildType(event.target.value);
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleLanguageChange(event) {
        setLanguage(event.target.value);
    }

    return (
        <AppBar position='sticky' sx={{ width: 1, boxShadow: 'none', py: '5px', borderBottom: '1px solid #9ea0a57d', bgcolor: '#FFFFFF' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <SelectionSort src={types} onChange={handleTypeChange} value={buildType} />
                <Box sx={{ display: 'flex' }}>
                    <BuildingsSearch onChange={handleInputChange} value={inputValue} placeholder='Type to search...' />
                    <Divider orientation='vertical' flexItem sx={{ mr: 3 }} />
                    <SelectionSort src={languages} value={language} onChange={handleLanguageChange} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default BuildingsHeader;
