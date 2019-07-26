const express = require('express');
const app = express()
const morgan = require('morgan')


//Settings, definir 'variables'
app.set('NombreApp', 'Tutorial');
app.set('port',3000)
app.set('view engine', 'ejs');



//Middlewer
/*function logger(req,res,next){
    console.log(`Ruta recibida:${req.protocol}: //${req.get('host')}${req.originalUrl}`)
    next()
}*/
app.use(morgan('dev'));
app.use(express.json());// Entender el codigo en consola
//app.use(logger);



//Routes

app.get('/', (req, res) => {
    const data = [{name:'Kevin'},{name:'Jefferson'},{name:'Evelyn'}]
    res.render('index.ejs', {people: data});
});


app.listen(app.get('port'), () => {
    console.log(app.get('NombreApp'))
    console.log(`Server started on port`, app.get('port'));
});

//Sirve para que todas las rutas antes de ejecutarse pasen por all
app.all('/usuario', (req, res,next) => {
    console.log('Pasó')
    next()
});

//Ruta '/' => por defecto
app.get('/usuario', (req, res) => {
    res.json({
        nombre: 'Kevin',
        apellido:'Ospina',
    });
});

//Envío de datos
app.post('/usuario/:id', (req, res) => {
    console.log(req.body)//Permite tomar la peticion del cleinte, nombre, apellido
    console.log(req.params)//Más información de los añadido, :id
    res.send('Petición post recibido')
});


//Actualización
app.put('/usuario/:id', (req, res) => {
   console.log(req.body)
   res.send(`Usuario ${req.params.id} actualizado`);
});


app.delete('/usuario/:id', (req, res) => {
    res.send(`Usuario ${req.params.id} eliminado`);
});

app.use(express.static('public'));