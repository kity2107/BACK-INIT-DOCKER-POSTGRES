import { Router } from 'express';

import status from './src/routes/status.router';
import user from './src/routes/users.router';

const router = Router();

router.use(status);
router.use(user);

export default router;
