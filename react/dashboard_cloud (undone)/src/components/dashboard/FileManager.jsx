import React from 'react';
import FileItem from './FileItem';

const FileManager = () => {
    return (
        <div className='flex flex-1 ml-24 flex-col'>
            <span className="text-xl">File Manager</span>
            <div>
                <FileItem name="My Folder" info="Created Jun 23, 2021" type="folder" />
                <FileItem name="Aggreement.pdf" info="Created Jun 23, 2021" type="doc" />
                <FileItem name="Other Folder" info="Created Jun 23, 2021" type="folder" />
                <FileItem name="Blueprints" info="Created Jun 23, 2021" type="doc" />
            </div>
            <button className='w-full py-2 mt-5 rounded-xl bg-purple-900 text-white'>Open File Manager</button>
        </div>
    );
}

export default FileManager;
