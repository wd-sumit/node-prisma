import { Router } from 'express';
import PostController from './post.controller';

const router = Router();

router.get('/', PostController.getAll());

export default router;
