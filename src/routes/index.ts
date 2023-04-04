import { Router } from 'express';

import users from './users.router';
import status from './status.router';

const router = Router();

router.use(users);
router.use(status);

export default router;
