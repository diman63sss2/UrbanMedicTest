import { SEED_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserItem } from 'entities/user/model/types/user';
import { initialStateLogin, LoginSchema } from '../types/loginSchema';
import {
    AuthBySeedActionTypes, INIT_AUTH_DATA, LOGIN_BY_SEED_FAILURE, LOGIN_BY_SEED_REQUEST, LOGIN_BY_SEED_SUCCESS,
    SET_SEED,
} from '../../model/types/loginActionTypes';

const authBySeed = (
    // eslint-disable-next-line default-param-last
    state: LoginSchema = initialStateLogin,
    action: AuthBySeedActionTypes,
) => {
    switch (action.type) {
    case INIT_AUTH_DATA: {
        const seed = localStorage.getItem(SEED_LOCALSTORAGE_KEY);
        console.log(seed);
        if (seed) {
            return {
                ...state, _inited: true, seed, isAuth: true,
            };
        }
        return {
            ...state, _inited: true,
        };
    }
    case SET_SEED: {
        return {
            ...state,
            seed: action.payload,
        };
    }
    case LOGIN_BY_SEED_REQUEST: {
        return {
            ...state,
            isLoading: true,
        };
    }
    case LOGIN_BY_SEED_SUCCESS: {
        const modifiedUsers = action.payload.map((userItem: UserItem, id) => ({
            name: {
                first: userItem.name.first,
                last: userItem.name.last,
            },
            gender: userItem.gender,
            email: userItem.email,
            id: id + 1,
        }));
        console.log(modifiedUsers);
        return {
            ...state,
            isLoading: false,
            users: modifiedUsers,
            isAuth: true,
        };
    }
    case LOGIN_BY_SEED_FAILURE: {
        return {
            ...state,
            isLoading: false,
            error: 'ошибка',
        };
    }
    default:
        return state;
    }
};

export default authBySeed;
