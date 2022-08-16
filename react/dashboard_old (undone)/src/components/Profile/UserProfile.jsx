import React from 'react';
import Button from '../UI/Button';
import userLogo from './../../imgs/man.png'

const UserProfile = ({user}) => {

    return (
        <div className="flex flex-col items-center text-white w-full h-full mt-6">
            <div className="flex rounded-full bg-gray-200 w-16 h-16">
                <img src={userLogo} alt="" />
            </div>
            <span className="text-lg mt-4 font-bold">Jack Grealish</span>
            <span className="text-xs">Private sector employee</span>
            <Button text="Edit Profile" styles="mt-6" />
            <span className="mt-6 font-bold">Working hours:</span>
            <div className="flex rounded-2xl bg-white bg-opacity-30 p-2 mt-3 text-black">
                <div className="flex flex-col py-2 px-5 rounded-2xl bg-white">
                    <span className="text-xs">Work End</span>
                    <span className="mt-1 font-bold">09:00 am</span>
                </div>
                <div className="flex flex-col py-2 px-5 rounded-2xl">
                    <span className="text-xs">Work End</span>
                    <span className="mt-1 font-bold">05:00 pm</span>
                </div>
            </div>
            <span className="text-4xl font-bold mt-10">Sukabumi City</span>
            <span className="text-xs mt-4">Sukabumi, Indonesia &bull; GMT+7</span>
        </div>
    );
}

export default UserProfile;
