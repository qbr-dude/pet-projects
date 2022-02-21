import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { fancyTimeFormat } from '../../helpers/time';

const SongStrip = ({ info, click }) => {

    function handleClickOnStrip() {
        click(info.id);
    }

    return (
        <Row className='bg-sec align-items-center my-2 song-strip' onClick={handleClickOnStrip}>
            <Col className='p-2' md='1' >
                <Image src={info.album.images[2].url} width={info.album.images[2].width} height={info.album.images[2].height} />
            </Col >
            <Col><span className='main-label-color'>{info.name}</span></Col>
            <Col md='1'><span className='main-label-color'>{fancyTimeFormat(info.duration_ms)}</span></Col>
            {/* addition functionnality */}
            <Col md='1'>Add</Col>
        </Row >
    );
}

export default SongStrip;
