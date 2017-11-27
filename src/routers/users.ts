import { Router } from 'express';
import { all, read, create, update, destroy, login } from '../controllers/users.ctrl';

const router: Router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .post('/', create)
    .put('/:id', update)
    .delete('/:id', destroy)
    .post('/login', login)

export default router;