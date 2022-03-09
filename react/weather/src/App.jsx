import React from 'react';
import InfoField from './components/InfoField';
import TimeField from './components/TimeField';

const App = () => {

    return (
        <div className={"bg-mountain w-screen h-screen relative bg-center bg-cover"}>
            <TimeField />
            <InfoField />
        </div>
    );
}

export default App;
