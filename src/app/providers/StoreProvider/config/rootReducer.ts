import { combineReducers } from 'redux';
import { authBySeed } from 'features/AuthBySeed';
import { userReducer } from 'entities/user';

export const rootReducer = combineReducers({
    authBySeed,
    userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
