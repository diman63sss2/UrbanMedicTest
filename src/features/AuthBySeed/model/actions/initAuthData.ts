import { AuthBySeedActionTypes, INIT_AUTH_DATA } from '../types/loginActionTypes';

export const initAuthData = (): AuthBySeedActionTypes => ({
    type: INIT_AUTH_DATA,
});
