import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';

const Temperature = ({ data }) => {
    const [temperature, setTemperature] = useState('');
    const [unit, setUnit] = useState('ºC');

    useEffect(() => {
        if (data.loading) return;
        setTemperature(Math.round(data.main.temp));
    }, [data]);

    function changeUnit() {
        if (unit === 'ºC') {
            setUnit('ºF');
            setTemperature(Math.round(temperature * (9 / 5) + 32));
        }
        else {
            setUnit('ºC');
            setTemperature(Math.round((temperature - 32) * (5 / 9)));
        }
    }

    function empty() { }

    return (
        <div className="flex flex-col items-center pt-1 mr-2 border-l-2 border-white flex-6 flex-grow-1 pl-2 h-full text-white text-lg relative">
            <span className="font-bold 2xl:text-xl">Temperature</span>
            <div className="p-2 mt-2 flex items-center text-2xl">
                <span>{temperature}</span>
                <Button text={unit} click={changeUnit} />
            </div>
            <div className="flex absolute bottom-2 justify-between w-11/12">
                <Button text="Today" click={empty} />
                <Button text="Tomorrow" click={empty} />
            </div>
        </div>
    );
}

export default Temperature;
