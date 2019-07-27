//Ejecución del programa
require('dotenv').config()

const app = require('./app')
require('./database')


//Inicia el programa
async function main(){
    await app.listen(3000);
    console.log('Server in port 3000')
}

main();