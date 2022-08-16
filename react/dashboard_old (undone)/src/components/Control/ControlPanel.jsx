import React, { useState } from 'react';
import ControlButton from './../UI/ControlButton';

const ControlPanel = () => {
    const [currentPage, setCurrentPage] = useState('Productivity');

    function generalHandler(name) {
        controlButtons.forEach((button) => {
            if(button.name === name) {
                setCurrentPage(button.name);
            }
        });

    };

    const controlButtons = [
        {name: 'Productivity', img: 'https://via.placeholder.com/30x30'},
        {name: 'Schedule', img: 'https://via.placeholder.com/30x30'},
        {name: 'Docs', img: 'https://via.placeholder.com/30x30'},
        {name: '1', img: 'https://via.placeholder.com/30x30'},
        {name: 'Discuss', img: 'https://via.placeholder.com/30x30'},
        {name: '2',  img: 'https://via.placeholder.com/30x30'},
        {name: 'Settings', img: 'https://via.placeholder.com/30x30'},
    ];

    return (
        <div className="relative flex h-full flex-col justify-center">
            {controlButtons.map((button) =>
                (<ControlButton key={button.name} name={button.name} selected={button.name === currentPage} click={generalHandler} title={button.name}>
                    <img src={button.img} alt="" width="30" height="30"/>
                </ControlButton>)
            )}
        </div>
    );
}

export default ControlPanel;
