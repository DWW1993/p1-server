import { Router } from 'express';
import { all, userAll, create, destroy, read, update } from '../controllers/chirps.ctrl';

const router = Router();

router
//     .use(isAuthenticated)
        .get('/', all)
        .get('/:userId', userAll)
        .put('/:id', update)
        .post('/', create)
        .get('/:id', read)
        .delete('/:id', destroy);

export default router;