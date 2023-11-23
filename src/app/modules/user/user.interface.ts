// import { Schema, model, connect } from 'mongoose';

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TFullName = {
  firstName: string;
  lastName: string;
};
export type TUser = {
  userId: string;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: 'active' | 'inactive';
  hobbies: [string];
  address: TAddress;
};
