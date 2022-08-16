import React from 'react';

const ProfileControl = ({ minimaze, options }) => {
    return (
        <div className="flex justify-between w-full">
            <button className="w-8 h-8 bg-white bg-opacity-30 text-lg rounded-full" onClick={(e) => minimaze(e)}>&gt;</button>
            <button className="w-8 h-8 bg-white bg-opacity-30 text-lg rounded-full">&hellip;</button>
        </div>
    );
}

export default ProfileControl;
