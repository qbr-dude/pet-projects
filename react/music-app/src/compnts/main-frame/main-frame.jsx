import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SongCard from './song-card';


const MainFrame = ({ songList, songChoice }) => {

    function cardClick(id, target) {
        if (target.classList.contains('author-link'))
            console.log(id); // if click on author
        else {
            // if clicked on card currently
            songChoice(id);
        }
    }

    return (
        <Row md="3" xl="6" className="mx-4 mt-4">
            {songList.map(song =>
                <Col key={song.id} className='my-3'>
                    <SongCard info={song} click={cardClick} />
                </Col>)}
        </Row>
    );
}

export default MainFrame;
