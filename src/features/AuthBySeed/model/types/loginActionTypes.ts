export const SET_SEED = 'SET_SEED';
export const LOGIN_BY_SEED_REQUEST = 'LOGIN_BY_SEED_REQUEST';
export const LOGIN_BY_SEED_SUCCESS = 'LOGIN_BY_SEED_SUCCESS';
export const LOGIN_BY_SEED_FAILURE = 'LOGIN_BY_SEED_FAILURE';
export const INIT_AUTH_DATA = 'INIT_AUTH_DATA';

interface SetSeedAction {
  type: typeof SET_SEED;
  payload: string;
}

interface LoginBySeedRequestAction {
  type: typeof LOGIN_BY_SEED_REQUEST;
}

interface LoginBySeedSuccessAction {
  type: typeof LOGIN_BY_SEED_SUCCESS;
  payload: [];
}

interface LoginBySeedFailureAction {
  type: typeof LOGIN_BY_SEED_FAILURE;
  payload: string;
}

interface InitAuthDataAction {
  type: typeof INIT_AUTH_DATA;
}

export type AuthBySeedActionTypes =
  | SetSeedAction
  | LoginBySeedRequestAction
  | LoginBySeedSuccessAction
  | LoginBySeedFailureAction
  | InitAuthDataAction;
