import React from 'react';
import RecentItem from './RecentItem';

const Recent = () => {
    return (
        <div className="flex flex-col flex-1">
            <span className="text-xl">Recently Uploaded</span>
            <div className="flex flex-col">
                <RecentItem file={{ name: "Marcus Family.jpg", date: "10 oct, 10:23pm", size: "12 MB" }} />
                <RecentItem file={{ name: "Marcus Family.jpg", date: "10 oct, 10:23pm", size: "12 MB" }} />
                <RecentItem file={{ name: "Marcus Family.jpg", date: "10 oct, 10:23pm", size: "12 MB" }} />
                <RecentItem file={{ name: "Marcus Family.jpg", date: "10 oct, 10:23pm", size: "12 MB" }} />
                <RecentItem file={{ name: "Marcus Family.jpg", date: "10 oct, 10:23pm", size: "12 MB" }} />
            </div>
        </div>
    );
}

export default Recent;
