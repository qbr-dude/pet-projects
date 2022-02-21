import React from 'react';
import { Image } from 'react-bootstrap';
import { getImageArrayFromSongData } from '../../helpers/song-helpers';

const PlayInfo = ({ currentSong }) => {

    return (
        <div className='d-flex align-items-center w-100'>
            <div>
                <Image src={getImageArrayFromSongData(currentSong)[2].url} width='50' height='50' />
            </div>
            <div className='d-flex flex-column mx-4'>
                <span className="fs-5 bar-song-label">{currentSong.name}</span>
                <span className="fs-6 text-truncate">{currentSong.artists}</span>
            </div>
        </div>
    );
}

export default PlayInfo;
