/* Crea un API que haga uso de los siguientes endpoints:

POST a / messages: permite crear un mensaje.

GET a / messages /: messageId: retorna información de un mensaje contreto.

A mayores ha de tener un middleware de ruta no encontrada.Los mensajes se almacenarán en el fichero messages.json dentro de la carpeta data que se encontrará en la raíz del servidor.Utiliza el módulo fs / promises para leer y actualizar la información del fichero cuando consideres oportuno.Para crear un mensaje el cliente deberá enviar a través del body el texto del mensaje.

Por ejemplo, si en messages.json hubiera 3 mensajes debería verse tal que así: */

import express from 'express';
import router from './routes/index.routes.js';
import { json } from 'express';


const app = express();
app.use(json());
app.use(router);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
