import express from 'express';
import crearMessgesMiddleware from '../middleware/messages.middleware.js';

const router = express.Router();

router.post('/messages', crearMessgesMiddleware);

export default router;