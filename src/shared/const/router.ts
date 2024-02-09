export enum AppRoutes {
  NOT_FOUND = 'not_found',
  LOGIN = 'login',
  MAIN = 'main',
}

export const getRouteMain = () => '/';
export const getRouteLogin = () => '/login';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteLogin()]: AppRoutes.LOGIN,
};
