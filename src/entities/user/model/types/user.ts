export interface UserItem {
  id: number,
  count: number,
}

export interface User {
  seed: string;
}

export interface UserSchema {
  authData: User;
  UserItems: UserItem[];
  UserItemsLoad: boolean;
  productsCount: number;
  _inited: boolean;
}

export const initialState: UserSchema = {
    authData: {
        seed: '',
    } as User,
    UserItemsLoad: false,
    UserItems: [],
    productsCount: 0,
    _inited: false,
};
