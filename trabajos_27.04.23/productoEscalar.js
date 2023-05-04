"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var dim = rls.questionInt("Ingrese la dimension de los arreglos");
var arrayNum1 = new Array(dim);
var arrayNum2 = new Array(dim);
function pedirNumerosArray(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = rls.questionInt("Ingrese un numero: ");
    }
    console.log(array);
}
function productoEscalar(array1, array2) {
    var resultado = 0;
    for (var i = 0; i < array1.length; i++) {
        resultado += array1[i] * array2[i];
    }
    console.log("El resultado del producto escalar entre los dos arreglos es: ".concat(resultado));
}
pedirNumerosArray(arrayNum1);
pedirNumerosArray(arrayNum2);
productoEscalar(arrayNum1, arrayNum2);
