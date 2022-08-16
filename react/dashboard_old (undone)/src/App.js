import React from 'react';
import Control from './components/Control/Control';
import MainFrame from './components/MainFrame/MainFrame';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="flex w-screen h-screen font-basic">
      <Control />
      <MainFrame />
      <Profile />
    </div>
  );
}

export default App;
