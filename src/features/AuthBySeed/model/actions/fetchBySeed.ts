import { Dispatch } from 'react';

import { $api } from 'shared/api/api';
import { SEED_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { setSeed } from 'features/AuthBySeed/model/actions/setSeed';
import { UserActionTypes } from 'entities/user/model/types/userActionTypes';
import { setUser } from 'entities/user/model/actions/setUser';
import {
    AuthBySeedActionTypes, LOGIN_BY_SEED_FAILURE,
    LOGIN_BY_SEED_REQUEST, LOGIN_BY_SEED_SUCCESS,
} from '../../model/types/loginActionTypes';

interface LoginByUsernameProps {
  seed: string;
}

export const fetchBySeed = (
    authData: LoginByUsernameProps,
    onSuccess: () => void,
) => async (dispatch: Dispatch<AuthBySeedActionTypes | UserActionTypes>) => {
    dispatch({
        type: LOGIN_BY_SEED_REQUEST,
    });
    try {
        const response = await $api.get(`https://randomuser.me/api/?seed=${authData.seed}&results=80`);
        if (!response.data) {
            throw new Error();
        }

        const data = await response.data;

        localStorage.setItem(SEED_LOCALSTORAGE_KEY, authData.seed);
        dispatch({
            type: LOGIN_BY_SEED_SUCCESS,
            payload: data.results,
        });
        dispatch(setUser(authData, data.results));
        dispatch(setSeed(authData.seed));
        onSuccess();
    } catch (error) {
        dispatch({
            type: LOGIN_BY_SEED_FAILURE,
            payload: error as string,
        });
    }
};
