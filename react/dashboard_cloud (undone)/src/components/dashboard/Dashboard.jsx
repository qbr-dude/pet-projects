import React from 'react';
import FileManager from './FileManager';
import Folders from './Folders';
import QuickAccess from './QuickAccess';
import Recent from './Recent';

const Dashboard = () => {
    return (
        <div>
            <Folders />
            <QuickAccess />
            <div className="flex mt-10">
                <Recent />
                <FileManager />
            </div>
        </div>
    );
}

export default Dashboard;
