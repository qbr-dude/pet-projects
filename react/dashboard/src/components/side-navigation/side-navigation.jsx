import { Box, Divider } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import MainMenu from './main-menu';
import UserInfo from './user-info';
import SupportMenu from './support-menu';

const StyledHeaderSpan = styled.span`
    font-size: 18px;
    margin: 10px 0;
`;

const StyledP = styled.p`
    text-align: justify;
    font-size: 12px;
`


const SideNavigation = () => {

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column',
            height: 1, minHeight: '100vh',
            width: 1, maxWidth: 250,
            bgcolor: '#2E2E33', color: 'white'
        }}>
            <Box sx={{ p: 2 }}>
                <StyledHeaderSpan>Buildings</StyledHeaderSpan>
            </Box>
            <Divider light={true} />
            <Box sx={{ flexGrow: 1 }} px={2}>
                <MainMenu />
                <Divider light={true} />
                <SupportMenu />
            </Box>
            <Divider light={true} />
            <UserInfo />
            <Divider light={true} />
            <Box sx={{ p: 2 }}>
                <span>&copy; Buildings Ltd. 2018</span>
                <StyledP>Created with love for the environment. By designers and developers who love to work together in offices!</StyledP>
            </Box>
        </Box>
    );
}

export default SideNavigation;
