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

const selectGetUserItems = (state: RootState) => state.userReducer.userItems;

export const getUserItems = createSelector(
    selectGetUserItems,
    (userItems) => userItems,
);

const selectGetUserItemsLoad = (state: RootState) => state.userReducer.userItemsLoad;

export const getUserItemsLoad = createSelector(
    selectGetUserItemsLoad,
    (userItemsLoad) => userItemsLoad,
);

const selectGetUserItemsCount = (state: RootState) => state.userReducer.userItemsCount;

export const getUserItemsCount = createSelector(
    selectGetUserItemsCount,
    (userItemsCount) => userItemsCount,
);
