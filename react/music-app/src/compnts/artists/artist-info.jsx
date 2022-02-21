import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ArtistInfo = ({ info }) => {
    return (
        <Row className='bg-sec align-items-center py-1'>
            <Col>
                <span className='fs-1 ps-5 main-label-color'>{info.name}</span>
            </Col>
            <Col md='3'>
                <Row><span className='fs-5 main-label-color'>Popularity - {info.popularity}</span></Row>
                <Row><span className='main-label-color'>Followers - {info.followers.total}</span></Row>
            </Col>
        </Row>
    );
}

export default ArtistInfo;
