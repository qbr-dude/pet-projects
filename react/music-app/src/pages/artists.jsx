import React, { useState, useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import SpotifyService from '../API/spotify/spotify-api';
import SongList from '../compnts/songs-table/song-list';
import SongStrip from '../compnts/songs-table/song-strip';

const Artists = ({ token, handleSongChoice }) => {

    const params = useParams();
    const [info, setInfo] = useState(null);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        fetchArtistInfo();
        fetchTopTracks();
    }, []);

    async function fetchArtistInfo() {
        const info = await SpotifyService.getArtistById(token, params.id);
        setInfo(info);
    }

    async function fetchTopTracks() { // implying the use of data paging
        const tracks = await SpotifyService.getArtistTopTracks(token, params.id);
        setTopTracks(tracks);
    }

    if (info) {
        document.title = info.name; //temporary stub

        return (
            <Row className='h-100 justify-content-md-evenly py-5'>
                <Col md='auto'>
                    <Image src={info.images[1].url} width={info.images[1].width} height={info.images[1].height} />
                </Col>
                <Col md='8'>
                    <Row className='bg-sec align-items-center'>
                        <Col>
                            <span className='fs-1 ps-5 main-label-color'>{info.name}</span>
                        </Col>
                        <Col md='3'>
                            <Row><span className='fs-5 main-label-color'>Popularity - {info.popularity}</span></Row>
                            <Row><span className='main-label-color'>Followers - {info.followers.total}</span></Row>
                        </Col>
                    </Row>
                    <SongList tracks={topTracks} songChoice={handleSongChoice} />
                </Col>
            </Row>
        );
    } else {
        return null;
    }
}

export default Artists;
