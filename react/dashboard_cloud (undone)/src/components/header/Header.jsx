import React from 'react';
import HeaderSearch from './HeaderSearch';
import UserInterface from './UserInterface';

const Header = () => {
    return (
        <div className="flex items-center py-5 px-10 border-b">
            <div className="flex items-center pl-14 xlx:pl-2">
                <div className="flex rounded-full w-12 h-12 items-center justify-center bg-purple-900">
                    <span className="font-bold text-2xl text-white">M</span>
                </div>
                <span className="ml-2 font-bold text-2xl text-purple-900">MY CLOUD</span>
            </div>
            <HeaderSearch />
            <UserInterface />
        </div>
    );
}

export default Header;
