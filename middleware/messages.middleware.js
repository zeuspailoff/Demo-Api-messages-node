
import { newMessageRegistry, } from '../controllers/messages.controller.js';
import { getMessageById } from '../controllers/messages.controller.js';




const crearMessgesMiddleware = async (req, res, next) => {

    await newMessageRegistry(req.body);

    res.send({
        status: 200,
        message: 'Mensaje registrado correctamente😁'
    })
};

export const leerMessgesMiddleware = async (req, res, next) => {
    try {
        const messageId = req.params.messageId;

        if (!messageId) {
            const error = new Error('ID del mensaje no proporcionado en la URL.');
            error.status = 400;
            throw error;
        }

        const message = await getMessageById(messageId);

        if (!message) {
            const error = new Error(`Mensaje con ID ${messageId} no encontrado.`);
            error.status = 404;
            throw error;
        }

        res.json({
            status: 200,
            message: 'Mensaje leído correctamente 😁',
            data: message,
        });
    } catch (error) {
        console.error('Error en leerMessgesMiddleware:', error);
        next(error);
    }
};



export default {
    crearMessgesMiddleware,
    leerMessgesMiddleware

};
