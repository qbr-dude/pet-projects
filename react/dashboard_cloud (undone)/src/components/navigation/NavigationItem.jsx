import React from 'react';

const NavigationItem = ({ name, img, selected }) => {
    return (
        <div className="flex flex-col items-center w-2/5 mb-5">
            <button className={"flex h-14 w-14 rounded-2xl " + (selected ? "bg-purple-900 shadow-lg" : 'bg-gray-100')}>
                <img src="" alt="" />
            </button>
            <span className={"mt-3 " + (selected ? '' : 'font-normal')}>{name}</span>
        </div>
    );
}

export default NavigationItem;
