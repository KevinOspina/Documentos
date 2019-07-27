//Ejecución del programa
require('dotenv').config()

const app = require('./app')
require('./database')


//Inicia el programa
async function main(){
    await app.listen(app.get('port'));
    console.log('Server in port', app.get('port'))
}

main();