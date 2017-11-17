import { Router } from 'express';
import { all, read, create, update, destroy } from '../controllers/users.ctrl';

const router: Router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .post('/', create)
    .put('/:id', update)
    .delete('/:id', destroy)

export default router;