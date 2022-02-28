import React from 'react';
import { Card } from 'react-bootstrap';
import { writeArtists } from '../../helpers/song-helpers';

const SongCard = ({ info, click }) => {

    return (
        <Card className="song-card h-100" onClick={(event) => click(info.id, event.target)}>
            <Card.Img variant="top" src={info.images[1].url} />
            <Card.Body>
                <Card.Title className="fs-5 text-truncate" title={info.name}>{info.name}</Card.Title>
                <Card.Subtitle className="fs-6 text-truncate">{writeArtists(info.artists, 'link')}</Card.Subtitle>
            </Card.Body>
        </Card >
    );
}

export default SongCard;
