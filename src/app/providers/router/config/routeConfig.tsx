import {
    AppRoutes, getRouteLogin, getRouteMain,
} from 'shared/const/router';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AppRoutesProps } from 'shared/types/router';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
    [AppRoutes.LOGIN]: {
        path: getRouteLogin(),
        element: <LoginPage />,
        auth: false,
    },
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        auth: true,
    },
};
