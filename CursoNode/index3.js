//Ejemplo de servidor con solo con nodejs y algunos otros modulos de documentación

const colors = require('colors')
const os = require('os')
const fs = require('fs')
const http = require('http')

console.log(os.platform())
console.log(os.release())
console.log(os.totalmem())

fs.writeFile('./texto.txt', 'Linea uno', function(error){
    if(error){
        console.log(error)
    }else{
        console.log('Archivo creado')
    }
})

console.log('Ultima linea'.green)

fs.readFile('./texto.txt',function(error,datos){
    if(error){
        console.log(error);
    }else{
        console.log(datos.toString())
    }
})

http.createServer(function(req, res){ // req=request , petición. res=response, rspuesta
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('<h1>Hola Mundo</h1>')
    res.end();
}).listen(3001);