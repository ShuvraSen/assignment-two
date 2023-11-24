import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUserController);

router.get('/:userId', UserController.getAUserController);
router.put('/:userId', UserController.updateAUserController);
router.delete('/:userId', UserController.deletedAUserController);
router.get('/', UserController.getAllUserController);

export const UserRoute = router;
