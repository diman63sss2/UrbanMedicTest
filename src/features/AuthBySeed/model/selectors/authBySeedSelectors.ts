import { createSelector } from 'reselect';
import { RootState } from 'app/providers/StoreProvider';

const selectGetLoginIsLoading = (state: RootState) => state.authBySeed.isLoading;

export const getLoginIsLoading = createSelector(
    selectGetLoginIsLoading,
    (isLoading) => isLoading,
);

const selectGetLoginError = (state: RootState) => state.authBySeed.error;

export const getLoginError = createSelector(
    selectGetLoginError,
    (error) => error,
);

const selectIsAuth = (state: RootState) => state.authBySeed.isAuth;

export const getIsAuth = createSelector(
    selectIsAuth,
    (isAuth) => isAuth,
);

const selectSeedInited = (state: RootState) => state.authBySeed._inited;

export const getSeedInited = createSelector(
    selectSeedInited,
    (_inited) => _inited,
);

const selectSeed = (state: RootState) => state.authBySeed.seed;

export const getSeed = createSelector(
    selectSeed,
    (seed) => seed,
);
