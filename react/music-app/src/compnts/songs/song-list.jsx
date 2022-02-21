import React from 'react';
import { Row } from 'react-bootstrap';
import SongStrip from './song-strip';

const SongList = ({ tracks, songChoice, children }) => {
    function handleClick(id) {
        songChoice(tracks.filter((song) => id === song.id)[0]);
    }

    return (
        <Row className='mt-5'>
            {children}
            {tracks.map(track => <SongStrip key={track.id} info={track} click={handleClick} />)}
        </Row>
    );
}

export default SongList;
