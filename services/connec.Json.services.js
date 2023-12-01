import fs from 'fs';
import path from 'path';
import { v4 } from 'uuid';
import { fileURLToPath } from 'url';
import { isUtf8 } from 'buffer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const messagesFilePath = '../data/messages.json';
const initialMessages = [];

const createFileIfNotExist = () => {

    if (!fs.existsSync(messagesFilePath)) {
        createMessagesFile();
    } else {
        console.error('File already exists.');
    }
};



async function createMessagesFile() {
    try {
        await fs.promises.writeFile(messagesFilePath, JSON.stringify(initialMessages, null, 2));
        console.log(`File ${messagesFilePath} created`);
    } catch (error) {
        console.error(`Error al crear el archivo ${messagesFilePath}:`, error);
    }
}


const fullPath = path.join(__dirname, messagesFilePath);



const saveMessage = async (message) => {
    const finalMessage = {
        id: v4(),
        text: message,
    }

    createFileIfNotExist();
    try {
        const messagesContent = await fs.promises.readFile(fullPath, 'utf-8');
        const messagesParsed = JSON.parse(messagesContent);
        messagesParsed.push(finalMessage);
        const messagesByJSON = JSON.stringify(messagesParsed);
        await fs.promises.writeFile(fullPath, messagesByJSON);
    } catch (err) {
        console.error(err);
    }
}

const getMessageById = async (messageId) => {
    try {
        const messages = await fs.promises.readFile(fullPath, 'utf-8');
        const messagesParsed = JSON.parse(messages);
        const message = messagesParsed.find(message => message.id === messageId);
        return message;
    } catch (err) {
        console.error(err);
    }
}

const getAllMessages = async () => {
    try {
        const messages = await fs.promises.readFile(fullPath, 'utf-8');
        const messagesParsed = JSON.parse(messages);
        return messagesParsed;
    } catch (err) {
        console.error(err);
    }
}



export default {
    saveMessage,
    getMessageById,
    getAllMessages
}
