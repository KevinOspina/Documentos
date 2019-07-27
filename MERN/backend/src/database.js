//Codigo Data base
const mongoose = require('mongoose')

//Crea la DB
const URI = process.env.MONGODB_URI  
? process.env.MONGODB_URI // el '?' es como un if, lo siguientes es que usa si existe, y que usa si no en la DB
: 'mongodb://localhost/databasetest'

//Conexion a DB
mongoose.connect(URI, {
    useNewUrlParser :true,
    useCreateIndex:true
})

const connection = mongoose.connection

connection.once('open' ,function(){
    console.log('DB conected')
})