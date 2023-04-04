import { Router } from 'express';
import User from '../controllers/user.controller';

const router = Router();

router.get('/user-list', User.getUser);
router.post('/user-add', User.addUser);

export default router;
