import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TUser } from './user/user.interface';

const nameSchema = new Schema<TFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const addressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new Schema<TUser>({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  fullName: { type: nameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: ['active', 'inactive'],
  hobbies: { type: [String] },
  address: { type: addressSchema, required: true },
});

export const UserModel = model<TUser>('User', userSchema);
