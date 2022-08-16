import React from 'react';

const cardStatus = [
    'Working on',
    'Delayed'
]

const ScheduleCard = ({status, name, time}) => {


    return (
        <div className="flex items-center mt-6">
            <div className="w-10 h-10 rounded-full bg-green-900 mr-2 flex-shrink-0">
                <img src="" alt="" />
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col">
                    <a href="#"><span className="text-lg text-green-900 font-bold">{name}</span></a>
                    <span className="text-sm text-gray-400">{cardStatus[status]}</span>
                </div>
                <span className="text-sm text-gray-400">{time}</span>
            </div>
        </div>
    );
}

export default ScheduleCard;
