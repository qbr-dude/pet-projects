import React from 'react';

const FolderItem = ({ name, color }) => {

    return (
        <div className={"flex relative shadow-lg flex-col justify-between mr-7 w-48 h-36 p-5 rounded-xl bg-" + color + "-50 filter " + getDropShadowColor(color) + " cursor-pointer transform hover:scale-105 transition-all duration-300"}>
            <div className={"w-10 h-10 bg-" + color + "-700"} style={{ maskImage: 'url(imgs/folder.svg)', WebkitMaskImage: 'url(imgs/folder.svg)' }}>
            </div>
            <span className="text-lg mt-2">{name}</span>
            <div className="flex justify-between">
                <span className="font-normal text-sm">17 files</span>
                <span className="font-normal text-sm">12 GB</span>
            </div>
            <button className="absolute w-7 h-7 top-3 right-3" >
                <img src="imgs/dots.svg" alt="" />
            </button>
        </div>
    );
}

function getDropShadowColor(color) {
    switch (color) {
        case 'purple':
            return 'drop-shadow-folder-p';
        case 'green':
            return 'drop-shadow-folder-g';
        case 'yellow':
            return 'drop-shadow-folder-y';
        case 'red':
            return 'drop-shadow-folder-r';

        default:
            break;
    }
}

export default FolderItem;
