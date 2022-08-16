import React from 'react';
import Header from './Header';
import Productivity from './Productivity/Productivity';

const MainFrame = () => {
    return (
        <div className="flex h-full bg-gradient-to-b from-green-200 to-yellow-100 flex-1 py-12">
            <div className="flex flex-col w-full h-full bg-white p-8">
                <Header />
                <div className="flex mt-5">
                    <Productivity />
                </div>
            </div>
        </div>
    );
}

export default MainFrame;
