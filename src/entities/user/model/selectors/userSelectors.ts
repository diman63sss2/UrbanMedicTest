import { createSelector } from 'reselect';
import { RootState } from 'app/providers/StoreProvider';

const selectGetUserAuthData = (state: RootState) => state.userReducer.authData;

export const getUserAuthData = createSelector(
    selectGetUserAuthData,
    (authData) => authData,
);

const selectGetUserInited = (state: RootState) => state.userReducer._inited;

export const getUserInited = createSelector(
    selectGetUserInited,
    (_inited) => _inited,
);

const selectGetUserItems = (state: RootState) => state.userReducer.UserItems;

export const getUserItems = createSelector(
    selectGetUserItems,
    (UserItems) => UserItems,
);

const selectGetUserItemsLoad = (state: RootState) => state.userReducer.UserItemsLoad;

export const getUserItemsLoad = createSelector(
    selectGetUserItemsLoad,
    (UserItemsLoad) => UserItemsLoad,
);
