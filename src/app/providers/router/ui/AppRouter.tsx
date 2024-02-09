import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'features/AuthBySeed/model/selectors/authBySeedSelectors';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    const isAuth = useSelector(getIsAuth);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.auth === isAuth || route.path === '*') {
            return true;
        }
        return false;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={element}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
