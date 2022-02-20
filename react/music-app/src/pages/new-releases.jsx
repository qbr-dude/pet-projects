import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import SpotifyService from '../API/spotify/spotify-api';
import SongGrid from '../compnts/songs-table/song-grid';
import SideNavigation from '../compnts/side-nav/Side-Navigation';

const NewReleases = ({ token, handleSongChoice }) => {
    const [songList, setSongList] = useState([]);

    useEffect(() => {
        if (token) {
            fetchTracks();
        }
    }, [token]);

    async function fetchTracks() {
        const tracks = await SpotifyService.getNewReleases(token);
        setSongList(tracks);
    }

    return (
        <Row className="h-100">
            <Col md="2" className="px-0">
                <SideNavigation />
            </Col>
            <Col>
                <SongGrid songList={songList} songChoice={handleSongChoice} />
            </Col>
        </Row>
    );
}

export default NewReleases;
