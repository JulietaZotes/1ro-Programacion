"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var arrayDim = rls.questionInt("Ingrese la dimension del arreglo: ");
var arrayNum = new Array(arrayDim);
function pedirNumerosArray(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = rls.questionInt("Ingrese un numero: ");
    }
    console.log(array);
}
function sumaPositivosArray(array) {
    var contadorPositivos = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            contadorPositivos++;
        }
    }
    console.log("".concat(contadorPositivos, " son positivos"));
}
function sumaNegativosArray(array) {
    var contadorNegativos = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            contadorNegativos++;
        }
    }
    console.log("".concat(contadorNegativos, " son negativos"));
}
function sumaCerosArray(array) {
    var contadorCeros = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            contadorCeros++;
        }
    }
    console.log("".concat(contadorCeros, " son cero"));
}
pedirNumerosArray(arrayNum);
sumaPositivosArray(arrayNum);
sumaNegativosArray(arrayNum);
sumaCerosArray(arrayNum);
