import { AuthUser } from 'features/AuthBySeed/model/types/loginSchema';
import { AuthBySeedActionTypes, SET_SEED } from 'features/AuthBySeed/model/types/loginActionTypes';

export const setSeed = (seed: string): AuthBySeedActionTypes => ({
    type: SET_SEED,
    payload: seed,
});
