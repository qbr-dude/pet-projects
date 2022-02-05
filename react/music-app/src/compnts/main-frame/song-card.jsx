import React from 'react';
import { Card } from 'react-bootstrap';

const SongCard = ({ info, click }) => {
    return (
        <Card className="bg-song-card text-white h-100" onClick={(event) => click(info.id, event.target)}>
            <Card.Img variant="top" src={info.images[1].url} />
            <Card.Body>
                <Card.Title className="fs-5 text-truncate" title={info.name}>{info.name}</Card.Title>
                <Card.Subtitle className="fs-6">{writeArtists(info.authors)}</Card.Subtitle>
            </Card.Body>
        </Card >
    );
}

function writeArtists(list) {
    let temp = list.map((artist) => `${artist}, `);
    temp[temp.length - 1] = temp[temp.length - 1].slice(0, -2);
    return (temp.map((item) => <a className='author-link' key={item}>{item}</a>));
}

export default SongCard;
