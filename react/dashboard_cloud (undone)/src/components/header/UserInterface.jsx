import React from 'react';

const UserInterface = () => {
    return (
        <div className="flex flex-1 justify-center items-center">
            <button className="inline-block rounded-full bg w-7 h-7 p-1 mr-5 bg-purple-900 hover:bg-purple-400 transition-all" style={{ maskImage: 'url(imgs/bell.svg)', WebkitMaskImage: 'url(imgs/bell.svg)' }}>
            </button>
            <div className="flex pr-4">
                <div className="flex w-14 h-14 mr-2">
                    <img src="imgs/user-logo.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="font-bold">Spider Man</span>
                    <span className="text-sm">toby@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default UserInterface;
