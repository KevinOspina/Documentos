//Ejemplo de servidor con express

const colors = require('colors')
const express = require('express')
const server = express()

server.get('/', function(req,res){
    res.send('Hola Mundo')
    res.end()
})

server.listen(3001, function(){
    console.log('Server on port 3001'.red)
})