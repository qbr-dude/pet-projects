import React from 'react';

const NavigationInfo = () => {
    return (
        <div className="flex flex-col">
            <span className="mb-2"><span className="font-bold">25.32 GB</span> used</span>
            <span>79% used - 6.64 GB free</span>
            <div className="flex mt-5"></div>
            <button className="w-full py-2 mt-5 rounded-xl bg-purple-900 text-white">Add More Space</button>
        </div>
    );
}

export default NavigationInfo;
