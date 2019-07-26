//Funcionalidad basica en nodejs con operaciones 

const Math = {}

function sumar(x1,x2){
    return console.log("La suma es: ",x1+x2);
}

function restar(x1,x2){
    return console.log("La resta es: ", x1-x2);
}

function multiplicar(x1,x2){
    return console.log("La multiplicación es: ",x1*x2);
}

function dividir(x1,x2){
    if(x2==0){
        console.log("No es posible dividir por 0");
    }else{
        return console.log("La División es", x1/x2);
        }
}

// Agrupamos y asignamos los valore para la exporación de los datos dentro de un 
//agrupador de objetos

Math.sumar = sumar
Math.restar = restar
Math.multiplicar = multiplicar
Math.dividir = dividir

//Puede exportar una función o demás
module.exports = Math;

/*
Exporta solo una propiedad de un objeto

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
*/