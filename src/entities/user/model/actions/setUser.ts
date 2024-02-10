import { User, UserItem } from '../../model/types/user';
import { SET_USER, UserActionTypes } from '../types/userActionTypes';

export const setUser = (user: User, userItems: UserItem[]): UserActionTypes => ({
    type: SET_USER,
    payload: { user, userItems },
});
