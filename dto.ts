import {User} from './types';

export type UserDTO = {
  user: User;
  role: string;
};

export type CreateCollectionDTO = {
  name: string;
  installmentAmount: number;
  recurringType: string;
  users: User[];
};
