import { User, UserItem } from '../../model/types/user';

export const SET_USER = 'SET_USER';
export const INIT_AUTH_DATA = 'INIT_AUTH_DATA';
export const FETCH_USER_ITEMS = 'FETCH_USER_ITEMS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const ADD_USER_ITEM_SUCCESS = 'ADD_USER_ITEM_SUCCESS';
export const UPDATE_USER_ITEMS = 'UPDATE_USER_ITEMS';
export const UPDATE_USER_ITEMS_COUNT = 'UPDATE_USER_ITEMS_COUNT';

type SetUserActionPayload = {
  user: User,
  userItems: UserItem[],
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: SetUserActionPayload;
}

interface InitAuthDataAction {
  type: typeof INIT_AUTH_DATA;
}

interface FetchUserCartAction {
  type: typeof FETCH_USER_ITEMS;
  payload: UserItem[];
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

interface AddUserItemAction {
  type: typeof ADD_USER_ITEM_SUCCESS;
}

interface UpdateUserItemsAction {
  type: typeof UPDATE_USER_ITEMS;
  payload: UserItem;
}

interface UpdateUserItemsCountAction {
  type: typeof UPDATE_USER_ITEMS_COUNT;
}

export type UserActionTypes =
  | SetUserAction
  | InitAuthDataAction
  | FetchUserCartAction
  | UserLogoutAction
  | AddUserItemAction
  | UpdateUserItemsAction
  | UpdateUserItemsCountAction;
