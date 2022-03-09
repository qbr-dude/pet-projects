import React, { useState, useEffect } from 'react';

const Info = ({ data }) => {
    const [cityInfo, setCityInfo] = useState({});

    useEffect(() => {
        if (data.loading) return;

        setCityInfo({
            name: data.name,
            lon: data.coord.lon,
            lat: data.coord.lat,
            time: data.dt,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            weather: data.weather[0].main,
        });
    }, [data]);

    function convertTime(unix) {
        let date = new Date(unix * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime;
    }

    return (
        <div className="flex flex-col items-center pt-1 flex-grow-2 flex-15 h-full text-white text-lg" id="field-info">
            <span className="font-bold 2xl:text-xl">Information - <span className="underline">{cityInfo.name}</span></span>
            <div className="flex flex-col w-11/12 h-4/6 justify-between mt-3">
                <div className="flex justify-between">
                    <div className="w-1/2"><span className="underline">City Time:</span><span> &nbsp;{convertTime(cityInfo.time)}</span></div>
                    <div className="w-1/2"><span className="underline">Weather:</span><span> &nbsp;{cityInfo.weather}</span></div>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/2"><span className="underline">Sunrise at:</span><span> &nbsp;{convertTime(cityInfo.sunrise)}</span></div>
                    <div className="w-1/2"><span className="underline">Sunset at:</span><span> &nbsp;{convertTime(cityInfo.sunset)}</span></div>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/2"><span className="underline">Longitude:</span><span> &nbsp;{cityInfo.lon}</span></div>
                    <div className="w-1/2"><span className="underline">Latitude:</span><span> &nbsp;{cityInfo.lat}</span></div>
                </div>
            </div>
        </div>
    );
}

export default Info;
