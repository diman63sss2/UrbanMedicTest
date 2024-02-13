import { SEED_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { initialState, UserItem, UserSchema } from '../../model/types/user';
import {
    ADD_USER_ITEM,
    FETCH_USER_ITEMS,
    INIT_AUTH_DATA,
    SET_USER,
    UPDATE_USER_ITEMS,
    UPDATE_USER_ITEMS_COUNT,
    USER_LOGOUT,
    UserActionTypes,
} from '../types/userActionTypes';

// eslint-disable-next-line default-param-last
const userReducer = (state: UserSchema = initialState, action: UserActionTypes) => {
    switch (action.type) {
    case SET_USER: {
        console.log(action.payload);
        return {
            ...state, authData: action.payload.user, userItems: action.payload.userItems,
        };
    }

    case INIT_AUTH_DATA: {
        const user = localStorage.getItem(SEED_LOCALSTORAGE_KEY);
        if (user) {
            return {
                ...state, _inited: true, authData: { seed: user },
            };
        }
        return {
            ...state, _inited: true,
        };
    }
    case FETCH_USER_ITEMS: {
        return {
            ...state,
            products: action.payload,
        };
    }

    case USER_LOGOUT:
        localStorage.removeItem(SEED_LOCALSTORAGE_KEY);
        return {
            ...state,
            authData: {
                seed: '',
            },
            userItems: [],
            productsCount: 0,
            userItemsLoad: false,
        };
    case ADD_USER_ITEM: {
        console.log('ADD_USER_ITEM');
        console.log(action.payload);
        console.log(
            [
                ...state.userItems,
                { ...action.payload, id: state.userItems[state.userItems.length - 1].id + 1 },
            ],
        );
        return {
            ...state,
            userItems: [
                ...state.userItems,
                { ...action.payload, id: state.userItems[state.userItems.length - 1].id + 1 },
            ],
        };
    }
    /*

    case UPDATE_USER_ITEMS: {
        const index = state.UserItems.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
        // Объект с указанным id найден, заменяем его
            return {
                ...state,
                products: state.UserItems.map((item: UserItem) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                }),
            };
        }
        return {
            ...state,
            products: [...state.UserItems, action.payload],
        };
    }
    case UPDATE_USER_ITEMS_COUNT: {
        return {
            ...state,
            productsCount: state.UserItems.reduce((total, item) => total + item.count, 0),
        };
    } */

    default:
        return { ...state };
    }
};

export default userReducer;
