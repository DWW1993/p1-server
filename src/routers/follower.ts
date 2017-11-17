import { Router } from 'express';
import { all, create, destroy } from '../controllers/followers.ctrl';

const router: Router = Router();

router
    .get('/', all)
    .post('/', create)
    .delete('/:followingId', destroy)

export default router;