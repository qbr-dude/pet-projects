import React from 'react';
import Activity from './Activity';
import DaysInfo from './DaysInfo';
import Schedule from './Schedule';
import Statistic from './Statistic';

const Productivity = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full">
                <DaysInfo />
                <Statistic />
            </div>
            <div className="flex mt-10">
                <Activity />
                <Schedule />
            </div>
        </div>
    );
}

export default Productivity;
