import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Button, Image } from 'react-bootstrap';

/* image import */
import { ReactComponent as PlayIcon } from './music-control.img/play.svg';
import { ReactComponent as PauseIcon } from './music-control.img/pause.svg';
import { ReactComponent as NextIcon } from './music-control.img/next.svg';
import { ReactComponent as PreviosIcon } from './music-control.img/previos.svg';

const PlayBar = ({ song }) => {
    const [isShown, setIsShown] = useState(false);
    const [isPlays, setIsPlays] = useState(false);
    const [currentSong, setCurrentSong] = useState('');

    useEffect(() => {
        if (!song)
            return;
        setCurrentSong(song);
        setIsShown(true);
    }, [song]);

    if (isShown) {
        return (
            <Container fluid className="fixed-bottom bg-main shadow py-2">
                <Row className="justify-content-center align-items-center text-white" md="4" xl="6">
                    <Col>
                        <div className='d-flex justify-content-evenly'>
                            <div>
                                <Image src="https://via.placeholder.com/50x70" />
                            </div>
                            <div className='d-flex flex-column'>
                                <span className="fs-3">{currentSong.name}</span>
                                <span className="fs-5">{currentSong.author} - 2 min</span>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <Button><PreviosIcon width={30} height={30} title="Play previos song" /></Button>
                        <Button><PlayIcon width={30} height={30} title="Play" /></Button>
                        <Button><NextIcon width={30} height={30} title="Play next song" /></Button>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return null;
    }
}

export default PlayBar;
