import { ListItemButton, ListItemText } from '@mui/material';
import styled from 'styled-components';
import React from 'react';

const StyledListItemButton = styled(ListItemButton)`
    border-radius: 5px;
    padding-top: 6px;
    padding-bottom: 6px;

    &.Mui-selected {
        background-color: #1665D8;
    }
`

const MenuButton = ({ name, id, current, click }) => {

    function handleButtonClick(event) {
        click(id)
    }

    return (
        <StyledListItemButton selected={current} onClick={handleButtonClick}>
            <ListItemText primary={name} sx={{ fontSize: 14 }} disableTypography />
        </StyledListItemButton>
    );
}

export default MenuButton;
