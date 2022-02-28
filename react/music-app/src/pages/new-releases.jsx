import React, { useContext, useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SpotifyService from '../API/spotify/spotify-api';
import SideNavigation from '../compnts/side-nav/Side-Navigation';
import SongGrid from '../compnts/songs/song-grid';
import { AccessTokenContext } from '../context';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';

const NewReleases = ({ handleSongChoice }) => {
    const [songList, setSongList] = useState([]);
    const [offset, setOffset] = useState(0);
    const { accessToken } = useContext(AccessTokenContext);
    const lastElement = useRef();

    const [fetchTracks, isLoading, error] = useFetching(async () => {
        const tracks = await SpotifyService.getNewReleases(accessToken, offset);
        setSongList([...songList, ...tracks]);
    });

    /* song upload if already drawn some */
    useObserver(lastElement, songList.length !== 0 && offset < 100, isLoading, () => {
        setOffset(offset + 20);
    });

    useEffect(() => {
        if (accessToken) {
            fetchTracks();
        }
    }, [accessToken, offset]);


    return (
        <Row className={"h-100 min-vh-100 releases " + (isLoading ? 'loading' : '')}>
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
