import React, { useEffect, useState } from 'react';

const TimeField = () => {
    const [currentTime, setCurrentTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    function getHumanTime() {
        let date = new Date(currentTime);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

    return (
        <div className="fixed top-5 right-5 p-3 text-4xl text-white bg-black backdrop-filter backdrop-blur-sm bg-opacity-50">
            <span>{getHumanTime()}</span>
        </div>
    );
}

export default TimeField;
