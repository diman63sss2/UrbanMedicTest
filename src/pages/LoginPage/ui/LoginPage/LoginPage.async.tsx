import { lazy } from 'react';

export const LoginPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // В РЕАЛЬНОМ ПРОЕКТЕ ЭТО НУЖНО УБРАТЬ!!!!!!!!!!!!!!!!!!!!!!!
    setTimeout(() => resolve(import('./LoginPage')), 1500);
}));
