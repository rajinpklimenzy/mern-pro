import express from 'express';
import { signin , signup , createUser , test } from '../controllers/users.js';
const router = express.Router();


router.post('/', createUser);
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/test', test);

export default router;