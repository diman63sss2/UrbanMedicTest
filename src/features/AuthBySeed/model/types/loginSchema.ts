import { UserItem } from 'entities/user/model/types/user';

export interface LoginSchema {
  isAuth: boolean;
  seed: string;
  isLoading: boolean;
  users: UserItem[];
  _inited: boolean;
  error?: string;
}

export const initialStateLogin: LoginSchema = {
    isAuth: false,
    seed: '',
    isLoading: false,
    users: [],
    _inited: false,
};

export interface AuthUser {
  seed: string;
}
