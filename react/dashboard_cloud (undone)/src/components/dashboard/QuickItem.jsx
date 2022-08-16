import React from 'react';

const QuickItem = ({ name, type, img }) => {
    return (
        <div className="flex flex-col justify-evenly items-center rounded-xl mr-5 w-1/3 h-40 bg-gray-100">
            <div className="w-full h-full rounded-t-lg">
                <img src={"imgs/" + img + ".png"} alt={name} className="w-full h-full" />
            </div>
            <div className="z-10">
                <span>{name}.</span><span className="text-sm font-normal">{type}</span>
            </div>
        </div>
    );
}

export default QuickItem;
