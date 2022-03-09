import React, { useState, useEffect } from 'react';

const OtherInfo = ({ data }) => {
    const [infoData, setInfoData] = useState({});

    useEffect(() => {
        if (data.loading) return;
        setInfoData({
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
            clouds: data.clouds.all,
        });
    }, [data]);

    return (
        <div className="flex flex-col h-full items-center pt-1 border-l-2 border-white flex-grow-1 flex-6 pl-2 mr-2 text-white text-lg relative">
            <span className="font-bold 2xl:text-xl">Addition Information</span>
            <div className="flex flex-col w-11/12 h-1/2 justify-between m-3">
                <div><span className="underline">Clouds:</span><span> &nbsp;{infoData.clouds}%</span></div>
                <div><span className="underline">Wind speed:</span><span> &nbsp;{infoData.windSpeed} m/s</span></div>
                <div><span className="underline">Wind degree:</span><span> &nbsp;{infoData.windDeg}&deg;</span></div>
            </div>
        </div>
    );
}

export default OtherInfo;
