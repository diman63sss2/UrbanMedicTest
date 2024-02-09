import { combineReducers } from 'redux';
import { authBySeed } from 'features/AuthBySeed';

export const rootReducer = combineReducers({
    authBySeed,
});

export type RootState = ReturnType<typeof rootReducer>;
