import React from 'react';
import ScheduleCard from './ScheduleCard';
import Button from './../../UI/Button';

const Schedule = () => {
    return (
        <div className="flex flex-1 flex-col">
            <span className="text-green-900 font-bold text-2xl">Upcoming schedule</span>
            <div className="flex flex-col">
                <ScheduleCard status={0} name="Desk Time Redesing" time="09:30 AM"/>
                <ScheduleCard status={0} name="New Landing Page" time="10:40 AM"/>
                <ScheduleCard status={0} name="Create Animation for App" time="11:50 AM"/>
            </div>
            <div className="flex justify-center mt-10">
                <Button text="See All Activity" handler={() => 1}/>
            </div>
        </div>
    );
}

export default Schedule;
