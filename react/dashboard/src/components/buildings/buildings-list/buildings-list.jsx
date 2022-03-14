import { Box, List, ListItem } from '@mui/material';
import React from 'react';
import BuildingsListHeader from './buildings-list-header';
import BuildingsListItem from './buildings-list-item';

const BuildingsList = () => {
    return (
        <Box maxWidth='350px' width='100%'>
            <BuildingsListHeader />
            <List>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                    <BuildingsListItem />
                </ListItem>
            </List>
        </Box>
    );
}

export default BuildingsList;
