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

const MainMenu = ({ setHeader }) => {
    const [currentPage, setCurrentPage] = useState(1);

    function handleSettingCurrentPage(id) {
        setCurrentPage(id);
        setHeader(pages[id]);
    }

    return (
        <List>
            {/* TODO turn off slide down */}
            <ListSubheader sx={{ bgcolor: 'inherit', textTransform: 'uppercase', fontSize: 12, color: '#9EA0A5' }}>Menu</ListSubheader>
            {
                pages.map((page, index) =>
                    <ListItem key={index} sx={{ py: 0 }} disableGutters>
                        <MenuButton name={page} id={index} current={pages[currentPage] === page} click={handleSettingCurrentPage} />
                    </ListItem>)
            }
        </List>
    );
}

export default MainMenu;
