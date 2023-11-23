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
    if (result) {
      // If the user is found, send a successful response with the user data
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'User not found',
      error: {
        code: 500,
        description: 'User not found!',
      },
    });
  }
};

const updateAUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedData = req.body;
    const result = await UserServices.updateAUserInDB(userId, updatedData);

    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
export const UserController = {
  createUserController,
  getAllUserController,
  getAUserController,
  updateAUserController,
};
