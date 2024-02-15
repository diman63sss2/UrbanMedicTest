import { UserItem } from 'entities/user/model/types/user';
import { CHANGE_USER_ITEM, UserActionTypes } from '../types/userActionTypes';

export const changeUserItem = (item: UserItem): UserActionTypes => ({
    type: CHANGE_USER_ITEM,
    payload: item,
});
