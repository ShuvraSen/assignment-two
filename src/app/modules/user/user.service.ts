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

  //   await UserModel.findByIdAndUpdate(result._id, { $unset: ['password'] });

  const passwordFielfRemove = await UserModel.findById(result._id).select(
    '-password',
  );

  return passwordFielfRemove;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  const removingPasswordField = await Promise.all(
    result.map(async (users) => {
      //   await UserModel.findByIdAndUpdate(users._id, { $unset: ['password'] });
      return await UserModel.findById(users._id).select(
        ' username fullName age email address',
      );
    }),
  );

  return removingPasswordField;
};

const getAUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });

  if (result) {
    // await UserModel.findByIdAndUpdate(result._id, { $unset: ['password'] });

    const passwordFielfRemove = await UserModel.findById(result._id).select(
      '-password',
    );

    return passwordFielfRemove;
  } else {
    return null;
  }

  //PUT /api/users/:userId
};

export const UserServices = {
  createUserInDB,
  getAllUserFromDB,
  getAUserFromDB,
};
