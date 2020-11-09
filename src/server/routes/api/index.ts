import * as express from 'express';
import reviewsRouter from './reviews';
import tagsRouter from './tags';
// import usersRouter from './users';

const router = express.Router();

router.use('/reviews', reviewsRouter);
router.use('/tags', tagsRouter);
// router.use('/users', usersRouter);

export default router;