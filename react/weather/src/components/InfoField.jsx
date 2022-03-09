import React, { useEffect, useState } from 'react';
import PostService from '../API/FetchWeather';
import AddInfo from './Info/AddInfo';
import Info from './Info/Info';
import OtherInfo from './Info/OtherInfo';
import Temperature from './Info/Temperature';
import SearchField from './SearchField';

const InfoField = () => {
    const [currentData, setCurrentData] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData(selectedCity) {
        const city = selectedCity ? selectedCity : 'Moscow';
        const _data = await PostService.getData({ city });
        setCurrentData(_data);
    }

    return (
        <div className="flex flex-col absolute bottom-0 w-full h-1/4
                        xl:h-1/5">
            <SearchField fetch={fetchData} />
            <div className="flex w-full h-full justify-between bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex-wrap">
                <Info data={currentData ? currentData : { loading: true }} />
                <Temperature data={currentData ? currentData : { loading: true }} />
                <AddInfo data={currentData ? currentData : { loading: true }} />
                <OtherInfo data={currentData ? currentData : { loading: true }} />
            </div>
        </div>
    );
}

export default InfoField;
