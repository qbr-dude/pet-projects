import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';

const SelectionSort = ({ src, ...props }) => {

    return (
        <FormControl fullWidth sx={{ maxWidth: 180, border: 'none', minWidth: 110 }}>
            <Select
                id='sort-select'
                {...props}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ height: 40 }}
            >
                {src.map((type, index) =>
                    <MenuItem value={index} key={index}>{type}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default SelectionSort;
