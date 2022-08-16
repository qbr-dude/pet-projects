import { List, ListItem, ListSubheader } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    const currentPage = useSelector(state => state.pages.page); /* here's an error when reload, resets value to default */
    const dispatch = useDispatch();

    function handleSettingCurrentPage(id) {
        dispatch({ type: 'CHANGE_CURRENT_PAGE', payload: id });
        setHeader(pages[id]);
    }

    return (
        <List>
            <ListSubheader sx={{ bgcolor: 'inherit', textTransform: 'uppercase', fontSize: 12, color: '#9EA0A5' }} disableSticky>Menu</ListSubheader>
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