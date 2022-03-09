import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';

const AddInfo = ({ data }) => {
    const [currentValue, setCurrentValue] = useState('Pressure');
    const [infoData, setInfoData] = useState({ 'pressure': "" });

    useEffect(() => {
        if (data.loading) return;

        setInfoData({
            Pressure: data.main.pressure + " hPa",
            Humidity: data.main.humidity + "%",
        });
    }, [data]);

    function changeValue(value) {
        if (currentValue === value) return;

        setCurrentValue(value);
    }

    return (
        <div className="flex flex-col h-full items-center pt-1 border-l-2 border-white flex-grow-1 flex-6 pl-2 mr-2 text-white text-lg relative">
            <span className="font-bold 2xl:text-xl">{currentValue}</span>
            <div className="p-2 mt-2 flex items-center text-2xl">
                <span>{infoData[currentValue]}</span>
            </div>
            <div className="flex absolute bottom-2">
                <Button text="Pressure" click={changeValue} />
                <Button text="Humidity" click={changeValue} />
            </div>
        </div>
    );
}

export default AddInfo;
