import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SongCard from './song-card';
import { useState, useEffect } from 'react';


const MainFrame = ({ songList, songChoice }) => {

    const [songs, setSongs] = useState([]);

    /* draw songs once */
    useEffect(() => {
        setSongs(songList.map(song =>
            <Col key={song.id} className='my-3'>
                <SongCard info={song} click={cardClick} />
            </Col>))
    }, [songList]);

    function cardClick(id, target) {
        if (target.classList.contains('author-link'))
            console.log(id); // if click on author
        else {
            // if clicked on card currently
            songChoice(id);
        }
    }

    return (
        <Row md="3" xl="4" xxl="6" className="mx-4 mt-4">
            {songs}
        </Row>
    );
}

export default MainFrame;
