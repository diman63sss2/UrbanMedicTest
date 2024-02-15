import { SEED_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { initialState, UserItem, UserSchema } from '../../model/types/user';
import {
    ADD_USER_ITEM, CHANGE_USER_ITEM, DELETE_USER_ITEM,
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
        return {
            ...state,
            authData: action.payload.user,
            userItems: action.payload.userItems,
            userItemsCount: action.payload.userItems.length,
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
    case USER_LOGOUT:
        localStorage.removeItem(SEED_LOCALSTORAGE_KEY);
        return {
            ...state,
            authData: {
                seed: '',
            },
            userItems: [],
            userItemsLoad: false,
        };
    case ADD_USER_ITEM: {
        const newItems = [
            ...state.userItems,
            { ...action.payload, id: state.userItems[state.userItems.length - 1].id + 1 },
        ];

        return {
            ...state,
            userItems: newItems,
            productsCount: newItems.length,
        };
    }
    case CHANGE_USER_ITEM: {
        const newArray = state.userItems.map(
            (item: UserItem) => (item.id === action.payload.id ? action.payload : item),
        );
        return {
            ...state,
            userItems: newArray,
        };
    }
    case DELETE_USER_ITEM: {
        const newItems = state.userItems.filter((item:UserItem) => item.id !== action.payload.id);
        return {
            ...state,
            userItems: newItems,
            userItemsCount: newItems.length,
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
     */

    default:
        return { ...state };
    }
};

export default userReducer;
