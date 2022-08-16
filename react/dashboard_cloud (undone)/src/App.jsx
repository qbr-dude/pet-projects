import React from 'react';
import Frame from './components/Frame';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

const App = () => {
    return (
        <div className="">
            <Header />
            <div className="flex w-screen h-screen">
                <Navigation />
                <Frame />
            </div>
        </div>
    );
}

export default App;
