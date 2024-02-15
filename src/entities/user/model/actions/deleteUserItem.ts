import { UserItem } from 'entities/user/model/types/user';
import { DELETE_USER_ITEM, UserActionTypes } from '../types/userActionTypes';

export const deleteUserItem = (item: UserItem): UserActionTypes => ({
    type: DELETE_USER_ITEM,
    payload: item,
});
