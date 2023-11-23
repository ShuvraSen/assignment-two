import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/', UserController.createUserController);
router.get('/', UserController.getAllUserController);
router.get('/:userId', UserController.getAUserController);
router.put('/:userId', UserController.updateAUserController);

export const UserRoute = router;
