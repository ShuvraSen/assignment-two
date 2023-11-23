import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createUserController = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UserServices.createUserInDB(userData);

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllUserController = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getAUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    //
    // {
    //     "success": false,
    //     "message": "User not found",
    //     "error": {
    //         "code": 404,
    //         "description": "User not found!"
    //     }
    // }
    //
  }
};

export const UserController = {
  createUserController,
  getAllUserController,
  getAUserController,
};
