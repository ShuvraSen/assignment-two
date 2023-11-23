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

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getAUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });
  return result;

  //PUT /api/users/:userId
};

export const UserServices = {
  createUserInDB,
  getAllUserFromDB,
  getAUserFromDB,
};
