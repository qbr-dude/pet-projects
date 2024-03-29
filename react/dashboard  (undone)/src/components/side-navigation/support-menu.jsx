import { List, ListItem, ListSubheader } from '@mui/material';
import React from 'react';
import MenuButton from './menu-button';

const pages = [
    'Need Help?',
    'Contact Us',
    'Knowledge Base'
]

const SupportMenu = () => {
    return (
        <div>
            <List>
                <ListSubheader sx={{ bgcolor: 'inherit', textTransform: 'uppercase', fontSize: 12, color: '#9EA0A5' }} disableSticky>Support</ListSubheader>
                {
                    pages.map((page, index) =>
                        <ListItem key={index} sx={{ py: 0 }} disableGutters>
                            <MenuButton name={page} id={index} />
                        </ListItem>)
                }
            </List>
        </div>
    );
}

export default SupportMenu;
