import React from 'react';
import ControlPanel from './ControlPanel';
import logo from './../../imgs/logo.png';

const Control = () => {
    return (
        <div className="py-12 pl-12 bg-gradient-to-b from-green-200 to-yellow-100">
            <div className="flex flex-col h-full bg-white border-r">
                <div className="flex justify-center items-center mt-5">
                    <img src={logo} alt="logo" width="50" height="50" />
                </div>
                <ControlPanel />
            </div>
        </div>
    );
}

export default Control;
