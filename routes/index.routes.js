import express from 'express';
import crearMessgesMiddleware from '../middleware/messages.middleware.js';
import leerMessgesMiddleware from '../middleware/messages.middleware.js';
import { validateCreateMessageMiddleware, notFoundMiddleware, errorHandlerMiddleware } from '../middleware/error.middleware.js';


const router = express.Router();

router.post('/messages', validateCreateMessageMiddleware, crearMessgesMiddleware.crearMessgesMiddleware);
router.get('/messages/:messageId', leerMessgesMiddleware.leerMessgesMiddleware, notFoundMiddleware);

router.use(errorHandlerMiddleware);

export default router;