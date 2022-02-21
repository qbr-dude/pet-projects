import React, { useState, useEffect, useContext, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import SpotifyService from '../API/spotify/spotify-api';
import SongGrid from '../compnts/songs/song-grid';
import SideNavigation from '../compnts/side-nav/Side-Navigation';
import { AccessTokenContext } from '../context';
import { useObserver } from '../hooks/useObserver';
import { useFetching } from '../hooks/useFetching';

const NewReleases = ({ handleSongChoice }) => {
    const [songList, setSongList] = useState([]);
    const [offset, setOffset] = useState(-20);
    const { accessToken } = useContext(AccessTokenContext);
    const [fetchTracks, isLoading, error] = useFetching(async () => {
        const tracks = await SpotifyService.getNewReleases(accessToken, offset);
        setSongList([...songList, ...tracks]);
    });
    const lastElement = useRef();

    useObserver(lastElement, offset < 100, isLoading, () => {
        setOffset(offset + 20);
    });

    useEffect(() => {
        if (accessToken) {
            fetchTracks();
        }
    }, [accessToken, offset]);


    return (
        <Row className="h-100 min-vh-100">
            <Col md="2" className="px-0">
                <SideNavigation />
            </Col>
            <Col>
                <SongGrid songList={songList} songChoice={handleSongChoice} />
                <div ref={lastElement} style={{ height: 85 }} />
            </Col>
        </Row>
    );
}

export default NewReleases;
