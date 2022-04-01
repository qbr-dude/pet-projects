import { Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BuildingsGridItem from './buildings-grid-item';

const BuildingsGrid = ({ list }) => {

    const dispatch = useDispatch();
    const currentItem = useSelector(state => state.current);

    function changeCurrentItem(id) {
        dispatch({ type: 'CHANGE_BUILDING_ITEM', payload: id });
    }

    return (
        <Grid container spacing={1}>
            {list.map((item, id) =>
                <Grid item xs={6}>
                    <BuildingsGridItem info={{ ...item, id }} cardClick={changeCurrentItem} />
                </Grid>
            )}
        </Grid>
    );
}

export default BuildingsGrid;
