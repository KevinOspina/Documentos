//Codigo de servidor-framework

const express = require('express');
const cors = require('cors')
const app = express()

//Configuraciones
app.set('port', process.env.PORT ||'3000'); //Si existe un puerto en el servidor lo toma, si no toma el 3000

//Middlerwares
app.use(cors());//Enviar y recibir datos al servidor
app.use(express.json());

//Rutas
app.use('/apit/users', require('./routes/users'))

app.use('/apit/notes', require('./routes/notes'))




module.exports = app