import React from 'react';

const RecentItem = ({ file }) => {
    return (
        <div className="flex justify-between items-center mt-5">
            <div className="flex items-center">
                <div className='w-10 h-10 rounded-md bg-yellow-300'>
                    <img src="" alt="" />
                </div>
                <div className="flex flex-col justify-evenly ml-5">
                    <span>{file.name}</span>
                    <span>{file.date}</span>
                </div>
            </div>
            <span>{file.size}</span>
        </div>
    );
}

export default RecentItem;
