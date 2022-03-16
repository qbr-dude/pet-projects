import { List, ListItem } from '@mui/material';
import React from 'react';
import BuildingsListItem from './buildings-list-item';

const BuildingsList = () => {
    /* items are drawn as example */
    return (
        <List disablePadding >
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
    );
}

export default BuildingsList;
