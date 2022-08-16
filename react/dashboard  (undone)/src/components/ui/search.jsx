import SearchIcon from '@mui/icons-material/Search';
import { InputBase, styled } from '@mui/material';
import React from 'react';

const StyledSearch = styled('div')(({ theme }) => ({
    fontSize: '14px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    boxShadow: `inset ${theme.shadows[1]}`
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    right: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        width: '100%',
    }
}))

const CustomSearch = (props) => {
    return (
        <StyledSearch>
            <SearchIconWrapper>
                <SearchIcon color='disabled' />
            </SearchIconWrapper>
            <StyledInput inputProps={{ 'aria-label': 'search' }} {...props} />
        </StyledSearch>
    );
}

export default CustomSearch;
