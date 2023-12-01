import connecJson from '../services/connec.Json.services.js';

export const newMessageRegistry = async (body) => {
    const { text } = body;
    const message = await connecJson.saveMessage(text);

    return message;
};

