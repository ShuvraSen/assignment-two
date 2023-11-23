// import { UserModel } from '../user.model';
// import { TUser } from './user.interface';

// const createUserInDB = async (user: TUser) => {
//   const result = await UserModel.create(user);
//   return UserModel.findById(result.userId).select('password')
//   //return result;
// };
// export const UserServices = {
//   createUserInDB,
// };
import { UserModel } from '../user.model';
import { TUser } from './user.interface';

const createUserInDB = async (user: TUser) => {
  const result = await UserModel.create(user);

  await UserModel.findByIdAndUpdate(result._id, { $unset: ['password'] });

  const passwordFielfRemove = await UserModel.findById(result._id).select(
    '-password',
  );

  return passwordFielfRemove;
};

export const UserServices = {
  createUserInDB,
};
