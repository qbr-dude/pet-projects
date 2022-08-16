import React from 'react';
import NavigationInfo from './NavigationInfo';
import NavigationItem from './NavigationItem';

const Navigation = () => {
    return (
        <div className="flex flex-col justify-between w-1/5 h-9/10 border-r">
            <div className="flex relative items-center px-6 flex-col pt-7">
                <div className="flex flex-wrap justify-evenly">
                    <NavigationItem name="Dashboard" selected={true} />
                    <NavigationItem name="All Files" />
                    <NavigationItem name="Shared" />
                    <NavigationItem name="Favorites" />
                    <NavigationItem name="Recent" />
                    <NavigationItem name="Request" />
                </div>
                <div className="flex flex-wrap justify-evenly mt-14 w-full">
                    <NavigationItem name="Pictures" />
                    <NavigationItem name="Videos" />
                    <NavigationItem name="Documents" />
                    <NavigationItem name="Signed" />
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <NavigationInfo />
            </div>
        </div>
    );
}

export default Navigation;
