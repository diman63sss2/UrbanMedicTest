import { UserItem } from 'entities/user/model/types/user';
import { ADD_USER_ITEM, UserActionTypes } from '../types/userActionTypes';

export const addUserItem = (item: UserItem): UserActionTypes => ({
    type: ADD_USER_ITEM,
    payload: item,
});
