import SearchIcon from '@mui/icons-material/Search';
import { InputBase, styled } from '@mui/material';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
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
        [theme.breakpoints.up('md')]: {
            width: '300px'
        }
    }
}))

const BuildingsSearch = (props) => {
    return (
        <Search sx={{ mr: 3 }}>
            <SearchIconWrapper>
                <SearchIcon color='disabled' />
            </SearchIconWrapper>
            <StyledInput placeholder='Type to search...' inputProps={{ 'aria-label': 'search' }} {...props} />
        </Search>
    );
}

export default BuildingsSearch;
