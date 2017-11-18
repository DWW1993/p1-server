import { Router } from 'express';
import { all, create, destroy } from '../controllers/followers.ctrl';

const router: Router = Router();

router
    .get('/:followerId', all)
    .post('/', create)
    .delete('/:followerId', destroy)

export default router;