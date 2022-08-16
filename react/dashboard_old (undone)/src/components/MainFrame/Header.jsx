import React from 'react';
import Input from '../UI/Input';

const Header = () => {
    return (
        <div className="flex w-full justify-between">
            <div className="">
                <h1 className="text-3xl font-bold">Working Productivity</h1>
                <span className="text-sm">Let's check your progress</span>
            </div>
            <div className="flex">
                <Input placeholder="Search for anything ..."/>
            </div>
        </div>
    );
}

export default Header;
