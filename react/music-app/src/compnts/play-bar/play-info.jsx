import React from 'react';
import { Image } from 'react-bootstrap';

const PlayInfo = ({ currentSong }) => {
    return (
        <div className='d-flex align-items-center w-100'>
            <div>
                <Image src={currentSong.images[2].url} width='50' height='50' />
            </div>
            <div className='d-flex flex-column mx-4'>
                <span className="fs-5 bar-song-label">{currentSong.name}</span>
                <span className="fs-6">{currentSong.authors} - 2 min</span>
            </div>
        </div>
    );
}

export default PlayInfo;
