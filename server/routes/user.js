import express from 'express';
import { createUser , test } from '../controllers/users.js';
const router = express.Router();


router.post('/', createUser);
router.get('/test', test);

export default router;