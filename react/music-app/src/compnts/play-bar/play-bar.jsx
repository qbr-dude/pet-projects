import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Image, ProgressBar } from 'react-bootstrap';
import { writeArtists } from '../../helpers/song-helders';
import PlayButtons from './play-buttons';
import PlayInfo from './play-info';

const PlayBar = ({ song }) => {
    const [isShown, setIsShown] = useState(false);
    const [isPlays, setIsPlays] = useState(false);
    const [songTime, setSongTime] = useState(0); //temporary, for example
    const [currentSong, setCurrentSong] = useState('');

    useEffect(() => {
        let counter = null;
        if (song) {
            setCurrentSong(handleSongInfo(song));
            setIsShown(true);

            counter = setInterval(() => {
                setSongTime(time => time + 1);
            }, 1000);

            if (counter === 200) {
                clearInterval(counter);
            }
        }

        return () => clearInterval(counter);
    }, [song]);

    // console.log(currentSong);

    if (isShown) {
        return (
            <Container fluid className="fixed-bottom bg-main shadow py-2">
                <Row>
                    <Col className='p-0'>
                        <audio src='' />
                        <ProgressBar animated={(!isPlays) ? true : false} now={songTime} max='200' />
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center text-white mt-2">
                    <Col md='5'>
                        <PlayInfo currentSong={currentSong} />
                    </Col>
                    <Col md='auto'>
                        <div className="d-flex">
                            <PlayButtons isPlay={isPlays} toggleHandler={setIsPlays} />
                        </div>
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
    let temp = song;
    temp.authors = writeArtists(song.authors);
    return temp;
}

export default PlayBar;
