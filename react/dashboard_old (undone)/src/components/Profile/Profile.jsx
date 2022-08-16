import React, { useState } from 'react';
import ProfileField from './ProfileField';

const Profile = () => {
    const [profileStyles, setProfileStyles] = useState('w-1/4 ');
    const [isMinimazed, setIsMinimazed] = useState(false);

    function minimazeClick(e) {
        if (!isMinimazed) {
            setProfileStyles('w-0');
            setIsMinimazed(true);
        } else {
            setProfileStyles('w-1/4 ');
            setIsMinimazed(false);
        }
    }

    return (
        <div className={'relative bg-right-bg h-full ' + profileStyles + ' transition-all duration-200'} id="profile">
            <ProfileField controlClick={{ minimaze: minimazeClick }} />
        </div>
    );
}

export default Profile;
