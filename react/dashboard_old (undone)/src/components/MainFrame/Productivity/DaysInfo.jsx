import React from 'react';

const DayInfoCard = ({day, productivity, time, workt, styles}) => {
    return (
        <div className={"flex w-full " + styles.bg + " rounded-2xl p-3 font-bold mt-2"}>
            <div className="flex flex-col bg-white rounded-2xl py-3 px-2">
                <span className="text-sm">{day.name}</span>
                <span className="font-bold text-xl">{day.day}</span>
            </div>
            <div className={"flex border-r border-white py-4 flex-2 mx-2 text-" + styles.text}>
                <span className="text-sm mt-1">Productive</span>
            </div>
            <div className={"flex flex-col py-3 flex-1 mx-2 text-" + styles.text}>
                <span className="text-sm">Productive Time</span>
                <span className="font-bold text-lg mt-1">5h 12m</span>
            </div>
            <div className={"flex flex-col py-3 flex-1 mx-2 text-" + styles.text}>
                <span className="text-sm">Time at Work</span>
                <span className="font-bold text-lg mt-1">5h 45m</span>
            </div>
        </div>
    )
}

const DaysInfo = () => {
    return (
        <div className="flex flex-col justify-between flex-2 mr-5">
            <DayInfoCard day={{name:'Mon', day: 18}} styles={{bg:"bg-yellow-200", text:"black"}} />
            <DayInfoCard day={{name:'Tue', day: 19}} styles={{bg:"bg-green-500", text:"white"}} />
            <DayInfoCard day={{name:'Wed', day: 20}} styles={{bg:"bg-green-900", text:"white"}} />
        </div>
    );
}

export default DaysInfo;
