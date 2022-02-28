import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SongCard from './song-card';


const SongsGrid = ({ songList, songChoice }) => {

    const [songs, setSongs] = useState([]);

    /* draw songs once */
    useEffect(() => {
        setSongs(songList.map(song =>
            <Col key={song.id} className='my-3'>
                <SongCard info={song} click={cardClick} />
            </Col>))
    }, [songList]);

    function cardClick(id, target) {
        if (!target.classList.contains('author-link')) {
            // if clicked on card currently
            songChoice(songList.filter((song) => id === song.id)[0]);
        }
    }

    return (
        <Row md="3" xl="4" xxl="6" className="mx-4 mt-4">
            {songs}
        </Row>
    );
}

export default SongsGrid;
