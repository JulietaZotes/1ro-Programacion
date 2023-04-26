"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var textoIngresado = rls.question("Ingrese un texto: ");
function ordenarTextoAlfabeticamente(texto) {
    var textoLimpio = texto
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[ñ]/g, 'n')
        .replace(/\./g, '')
        .replace(/\%/g, '')
        .replace(/\,/g, '')
        .replace(/[0-9]/g, '');
    var textoMinuscula = textoLimpio.toLowerCase(); //Transforma todo el texto en minuscula
    var arregloDePalabras = textoMinuscula.split(" "); //Dividir la cadena de texto en un arreglo de palabras
    arregloDePalabras.sort(); //Ordenar el arreglo de palabras alfabéticamente
    var cadenaOrdenada = arregloDePalabras.join(" "); //Unir las palabras ordenadas en una nueva cadena de texto
    var arregloFinal = new Array(cadenaOrdenada);
    return arregloFinal;
}
/*"El oeste de Texas divide la frontera entre Mexico y Nuevo México. Es muy bella pero aspera, llena de cactus, en esta region se encuentran las Davis Mountains. Todo el terreno esta lleno de piedra caliza, torcidos arboles de mezquite y espinosos nopales. Para admirar la verdadera belleza desertica, visite el Parque Nacional de Big Bend, cerca de Brownsville. Es el lugar favorito para los excurcionistas, acampadores y entusiastas de las rocas. Pequeños pueblos y ranchos se encuentran a lo largo de las planicies y cañones de esta region. El area solo tiene dos estaciones, tibia y realmente caliente. La mejor epoca para visitarla es de Diciembre a Marzo cuando los dias son tibios, las noches son frescas y florecen las plantas del desierto con la humedad en el aire."*/
console.log(ordenarTextoAlfabeticamente(textoIngresado));
