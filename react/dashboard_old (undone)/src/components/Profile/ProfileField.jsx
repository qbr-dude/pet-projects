import React from 'react';
import ProfileControl from './ProfileControl';
import UserProfile from './UserProfile';

const ProfileField = ({controlClick}) => {
    return (
        <div className="flex flex-col w-full h-full p-6 border-r-50 border-t-50 border-b-50 border-white border-opacity-30">
            <ProfileControl minimaze={controlClick.minimaze}/>
            <UserProfile />
        </div>
    );
}

export default ProfileField;
