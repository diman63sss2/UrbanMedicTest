export type Gender = 'male' | 'female';

export interface UserItem {
  name: {
    first: string,
    last: string,
  }
  gender: Gender,
  email: string,
  id: number,
}

export interface User {
  seed: string;
}

export interface UserSchema {
  authData: User;
  userItems: UserItem[];
  userItemsLoad: boolean;
  productsCount: number;
  _inited: boolean;
}

export const initialState: UserSchema = {
    authData: {
        seed: '',
    } as User,
    userItemsLoad: false,
    userItems: [],
    productsCount: 0,
    _inited: false,
};
