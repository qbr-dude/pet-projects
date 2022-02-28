import React, { useContext, useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import SpotifyService from '../API/spotify/spotify-api';
import ArtistInfo from '../compnts/artists/artist-info';
import SongList from '../compnts/songs/song-list';
import { AccessTokenContext } from '../context';

const Artists = ({ handleSongChoice }) => {

    const params = useParams();
    const [info, setInfo] = useState(null);
    const [topTracks, setTopTracks] = useState([]);
    const { accessToken } = useContext(AccessTokenContext);

    useEffect(() => {
        fetchArtistInfo();
        fetchTopTracks();
    }, [accessToken]);

    async function fetchArtistInfo() {
        const info = await SpotifyService.getArtistById(accessToken, params.id);
        setInfo(info);
    }

    async function fetchTopTracks() { // implying the use of data paging
        const tracks = await SpotifyService.getArtistTopTracks(accessToken, params.id);
        setTopTracks(tracks);
    }

    if (info) {
        return (
            <Row className='h-100 min-vh-100 justify-content-md-evenly py-5'>
                <Col md='auto'>
                    <Image src={info.images[1].url} width={info.images[1].width} height={info.images[1].height + 25} />
                </Col>
                <Col md='8'>
                    <ArtistInfo info={info} />
                    <SongList tracks={topTracks} songChoice={handleSongChoice}>
                        <span className='second-label-color fs-5'>Popularity (top-10)</span>
                    </SongList>
                </Col>
            </Row>
        );
    } else {
        return null;
    }
}

export default Artists;
