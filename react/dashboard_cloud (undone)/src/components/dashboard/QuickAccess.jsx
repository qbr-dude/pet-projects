import React from 'react';
import QuickItem from './QuickItem';

const QuickAccess = () => {
    return (
        <div className="flex flex-col mt-14 w-full">
            <span className="text-xl">Quick Access</span>
            <div className="flex mt-5">
                <QuickItem name="Building Image" type="jpeg" img="" />
                <QuickItem name="Product Video" type="mp4" img="" />
                <QuickItem name="Customers" type="pdf" img="" />
            </div>
        </div>
    );
}

export default QuickAccess;
