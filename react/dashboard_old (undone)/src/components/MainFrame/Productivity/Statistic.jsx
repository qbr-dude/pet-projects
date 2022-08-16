import React from 'react';
import CanvasJSReact from './canvasjs/canvasjs.react'

const Statistic = () => {

    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const doughnut = {
        interactivityEnabled: false,
        animationEnabled: true,
        animationDuration: 2000,
        height:175,
        data: [{
            type: "doughnut",
            innerRadius: 60,
            startAngle:270,
            dataPoints: [
                { y: 25, name: "Hours", color: "#fde68a" },
                { y: 40, name: "Tasks", color: "#10b981" },
                { y: 80, name: "Complete Works", color: "#064e3b" },
                { y: 55, name: "Other", color: "#d1d5db" },
            ]
        }]
    }

    return (
        <div className="flex flex-col flex-1">
            <span className="text-center text-green-900 font-bold text-2xl">Statistics on July</span>
            <div className="flex h-44">
                <CanvasJSChart options={doughnut} />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col mt-3">
                    <div className="flex justify-between">
                        <span className="text-sm">Tasks</span>
                        <span>40%</span>
                    </div>
                    <div className="inline-block h-1 w-full bg-green-500"></div>
                </div>
                <div className="flex flex-col mt-3">
                    <div className="flex justify-between">
                        <span className="text-sm">Complete works</span>
                        <span>80%</span>
                    </div>
                    <div className="inline-block h-1 w-full bg-green-900"></div>
                </div>
                <div className="flex flex-col mt-3">
                    <div className="flex justify-between">
                        <span className="text-sm">Hours</span>
                        <span>25%</span>
                    </div>
                    <div className="inline-block h-1 w-full bg-yellow-200"></div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;
