import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import blogListRouter from './blogList';
import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);


router.use('/blogList', blogListRouter);
router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/classes', classesRouter);

/* router.use(tokenMiddleware);
router.use(isLoggedIn); */

router.use('/people', peopleRouter);
router.use('/users', usersRouter);


export default router;