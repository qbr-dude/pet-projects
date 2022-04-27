import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import BuildingsPage from './buidings-page';
import DefaultPage from './default-page';
import PostsPage from './posts-page';


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate exact to="buildings" />} />
            <Route path="buildings" element={<BuildingsPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="*" element={<DefaultPage />} />
        </Routes>
    );
}

export default AppRouter;
