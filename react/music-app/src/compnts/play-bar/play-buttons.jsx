import React from 'react';
import { Button } from 'react-bootstrap';

/* image import */
import { ReactComponent as PlayIcon } from './music-control.img/play.svg';
import { ReactComponent as PauseIcon } from './music-control.img/pause.svg';
import { ReactComponent as NextIcon } from './music-control.img/next.svg';
import { ReactComponent as PreviosIcon } from './music-control.img/previos.svg';

const PlayButtons = ({ isPlay, toggleHandler }) => {

    function togglePlayButton() {
        toggleHandler(!isPlay);
    }

    return (
        <div className='d-flex'>
            <Button><PreviosIcon width={30} height={30} title="Play previos song" /></Button>
            <Button>{toggleButton(isPlay, togglePlayButton)}</Button>
            <Button><NextIcon width={30} height={30} title="Play next song" /></Button>
        </div>
    );
}

function toggleButton(toggle, handler) {
    if (toggle)
        return <PlayIcon width={30} height={30} title="Play" onClick={handler} />
    else
        return <PauseIcon width={30} height={30} title="Pause" onClick={handler} />
}

export default PlayButtons;
