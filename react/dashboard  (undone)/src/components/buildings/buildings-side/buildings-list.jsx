import { List, ListItem } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuildingsListItem from './buildings-list-item';


const BuildingsList = ({ list }) => {

    const dispatch = useDispatch();
    const currentItem = useSelector(state => state.buildings.current);

    function changeCurrentItem(id) {
        dispatch({ type: 'CHANGE_BUILDING_ITEM', payload: id });
    }

    /* items are drawn as example */
    return (
        <List disablePadding>
            {list.map((item, id) =>
                <ListItem sx={{ p: 0 }} key={id}>
                    <BuildingsListItem info={{ ...item, id }} isCurrent={currentItem === id} cardClick={changeCurrentItem} />
                </ListItem>
            )}
        </List>
    );
}

export default BuildingsList;
