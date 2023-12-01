
export const errorHandlerMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        status,
        message: err.message || 'Error interno del servidor',
    });
};
export const validateCreateMessageMiddleware = (req, res, next) => {
    try {
        const { text } = req.body;
        if (!text) {
            const error = new Error('El campo "text" es obligatorio para crear un mensaje.');
            error.status = 400;
            throw error;
        }
        next();
    } catch (error) {
        next(error);
    }
};
export const notFoundMiddleware = (req, res, next) => {
    try {
        const { data } = res.locals;
        if (!data) {
            const error = new Error(`Mensaje con ID ${req.params.messageId} no encontrado.`);
            error.status = 404;
            throw error;
        }
        next();
    } catch (error) {
        next(error);
    }
};