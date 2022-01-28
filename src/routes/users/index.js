import { Router } from 'express';
import UserController from './user.controller';

const router = Router();

router.get('/', UserController.getAll());

export default router;
