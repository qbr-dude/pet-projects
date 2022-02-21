import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Artists from './artists';
import NewReleases from './new-releases';

const AppRouter = ({ handleSongChoice }) => {
    return (
        <Routes>
            <Route exact path="/new-releases" element={<NewReleases handleSongChoice={handleSongChoice} />} />
            <Route exact path="/artists/:id" element={<Artists handleSongChoice={handleSongChoice} />} />
            <Route exact path="/" element={<Navigate exact to="new-releases" />} />
        </Routes>
    );
}

export default AppRouter;
