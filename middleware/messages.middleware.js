
import { newMessageRegistry } from '../controllers/messages.controller.js';



const crearMessgesMiddleware = async (req, res, next) => {

    await newMessageRegistry(req.body);

    res.send({
        status: 200,
        message: 'Mensaje registrado correctamente😁'
    })
};

export default crearMessgesMiddleware;
