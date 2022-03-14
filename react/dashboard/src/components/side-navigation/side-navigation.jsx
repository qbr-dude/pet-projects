import { Box, Container, Divider } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import MainMenu from './main-menu';
import SupportMenu from './support-menu';
import UserInfo from './user-info';

const StyledHeaderSpan = styled.span`
    font-size: 18px;
    margin: 10px 0;
`;

const StyledP = styled.p`
    text-align: justify;
    color: #6B6C6F;
    font-size: 12px;
`


const SideNavigation = () => {
    const [currentPage, setCurrentPage] = useState('Buildings');

    return (
        // TODO fixed
        <Box sx={{
            display: 'block', flexDirection: 'column',
            height: 1, minHeight: '100vh',
            width: 1, maxWidth: 270,
            bgcolor: '#2E2E33', color: 'white'
        }}>
            <Box sx={{ p: 2 }}>
                <StyledHeaderSpan>{currentPage}</StyledHeaderSpan>
            </Box>
            <Divider light={true} />
            <Box sx={{ flexGrow: 1 }} px={2}>
                <MainMenu setHeader={setCurrentPage} />
                <Divider light={true} />
                <SupportMenu />
            </Box>
            <Divider light={true} />
            <UserInfo />
            <Divider light={true} />
            <Box sx={{ p: 2 }}>
                <span style={{ fontSize: 14 }}>&copy; Buildings Ltd. 2018</span>
                <StyledP>Created with love for the environment. By designers and developers who love to work together in offices!</StyledP>
            </Box>
        </Box>
    );
}

export default SideNavigation;
