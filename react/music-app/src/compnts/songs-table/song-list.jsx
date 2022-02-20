import React from 'react';
import { Row } from 'react-bootstrap';
import SongStrip from './song-strip';

const SongList = ({ tracks, songChoice }) => {
    function handleClick(id) {
        songChoice(tracks.filter((song) => id === song.id)[0]);
    }

    return (
        <Row className='mt-5'>
            <span className='second-label-color fs-5'>Popularity (top-10)</span>
            {tracks.map(track => <SongStrip key={track.id} info={track} click={handleClick} />)}
        </Row>
    );
}

export default SongList;
