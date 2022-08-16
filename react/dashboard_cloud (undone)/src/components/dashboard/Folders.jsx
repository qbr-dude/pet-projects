import React from 'react';
import FolderItem from './FolderItem';

const Folders = () => {
    return (
        <div className="flex">
            <FolderItem name="Design" color="purple" />
            <FolderItem name="Documents" color="green" />
            <FolderItem name="Music" color="yellow" />
            <FolderItem name="Images" color="red" />
        </div>
    );
}

export default Folders;
