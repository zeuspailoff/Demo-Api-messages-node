import express from 'express';
import crearMessgesMiddleware from '../middleware/messages.middleware.js';
import leerMessgesMiddleware from '../middleware/messages.middleware.js';

const router = express.Router();

router.post('/messages', crearMessgesMiddleware.crearMessgesMiddleware);
router.get('/messages/:messageId', leerMessgesMiddleware.leerMessgesMiddleware);

export default router;