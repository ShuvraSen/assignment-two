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
import { User } from '../user.model';
import { TUser } from './user.interface';

const createUserInDB = async (user: TUser) => {
  const result = await User.create(user);

  //   await UserModel.findByIdAndUpdate(result._id, { $unset: ['password'] });

  const passwordFielfRemove = await User.findById(result._id).select(
    '-password',
  );

  return passwordFielfRemove;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  const removingPasswordField = await Promise.all(
    result.map(async (users) => {
      //   await UserModel.findByIdAndUpdate(users._id, { $unset: ['password'] });
      return await User.findById(users._id).select(
        ' username fullName age email address',
      );
    }),
  );

  return removingPasswordField;
};

// const getAUserFromDB = async (userId: string) => {
//   const result = await UserModel.findOne({ userId });

//   if (result) {
//     // await UserModel.findByIdAndUpdate(result._id, { $unset: ['password'] });

//     const passwordFielfRemove = await UserModel.findById(result._id).select(
//       '-password',
//     );

//     return passwordFielfRemove;
//   } else {
//     return null;
//   }

//   //PUT /api/users/:userId
// };

const getAUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId });

  //   const userID=new User(userId);
  //   if(await userID.isAlreadyExists(userId)){
  //     throw new Error('already exists')
  //   }
  const userExists = await User.findOne({ userId });
  if (userExists) {
    throw new Error('Already exists');
  }

  if (result) {
    // await UserModel.findByIdAndUpdate(result._id, { $unset: ['password'] });

    const passwordFielfRemove = await User.findById(result._id).select(
      '-password',
    );

    return passwordFielfRemove;
  } else {
    return null;
  }
};

//const updateAUserInDB = async (userId: string, updatedData: Partial<TUser>) => {
const updateAUserInDB = async (userId: string, $set: TUser) => {
  const result = await User.findOneAndUpdate({ userId }, $set, {
    new: true,
    select: '-password',
  });

  return result;
};

export const UserServices = {
  createUserInDB,
  getAllUserFromDB,
  getAUserFromDB,
  updateAUserInDB,
};
