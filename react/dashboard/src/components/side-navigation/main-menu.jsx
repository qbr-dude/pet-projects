import { List, ListItem, ListSubheader } from '@mui/material';
import React, { useState } from 'react';
import MenuButton from './menu-button';

const pages = [
    'Dashboard',
    'Buildings',
    'Posts',
    'Conversations',
    'Amenities',
    'Tenants',
    'Performance',
    'Users'
]

const MainMenu = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <List>
            <ListSubheader sx={{ bgcolor: 'inherit', color: 'white', textTransform: 'uppercase', fontSize: 12 }}>Menu</ListSubheader>
            {
                pages.map((page, index) =>
                    <ListItem key={index} sx={{ py: 0 }} disableGutters>
                        <MenuButton name={page} id={index} current={pages[currentPage] === page} click={setCurrentPage} />
                    </ListItem>)
            }
        </List>
    );
}

export default MainMenu;
