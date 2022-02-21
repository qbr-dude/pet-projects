import React, { useState, useEffect } from 'react';
import { Row, Container, Col, ProgressBar } from 'react-bootstrap';
import { writeArtists } from '../../helpers/song-helpers';
import PlayButtons from './play-buttons';
import PlayInfo from './play-info';

const PlayBar = ({ song }) => {
    const [isShown, setIsShown] = useState(false);
    const [isPlays, setIsPlays] = useState(false);
    const [currentSong, setCurrentSong] = useState('');

    useEffect(() => {
        if (song) {
            setCurrentSong(handleSongInfo(song));
            setIsShown(true);
        }
    }, [song]);

    if (isShown) {
        return (
            <Container fluid className="fixed-bottom bg-main shadow py-2">
                <Row>
                    <Col className='p-0'>
                        <audio src='' />
                        <ProgressBar animated={(!isPlays) ? true : false} now='50' max='200' />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-white mt-2">
                    <Col md='5'>
                        <PlayInfo currentSong={currentSong} />
                    </Col>
                    <Col md='auto'>
                        <PlayButtons isPlay={isPlays} toggleHandler={setIsPlays} />
                    </Col>
                    <Col>
                        <div>
                            addition options
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return null;
    }
}

function handleSongInfo(song) {
    let artists = writeArtists(song.artists, 'text');
    return { ...song, artists }; //make 'song' immutable
}

export default PlayBar;
