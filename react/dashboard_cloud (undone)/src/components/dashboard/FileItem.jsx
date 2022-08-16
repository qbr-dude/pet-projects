import React from 'react';

const FileItem = ({ name, info, type }) => {
    return (
        <div className='flex w-3'>
            <div>
                {GetImageByType(type)}
            </div>
            <span>{name}</span>
            <span>{info}</span>
        </div>
    );
}

function GetImageByType(type) {
    if (type === 'folder')
        return;
    else if (type === 'doc')
        return;
}

export default FileItem;
