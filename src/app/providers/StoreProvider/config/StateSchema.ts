import { LoginSchema } from 'features/AuthBySeed/model/types/loginSchema';
import { UserSchema } from 'entities/user';

export interface StateSchema {
  authBySeedReducer: LoginSchema;
  userReducer: UserSchema;
}
