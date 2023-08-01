import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import { authRoutes } from '../routes';
import { publicRoutes } from '../routes';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
        </Routes>
    );
};

export default AppRouter;