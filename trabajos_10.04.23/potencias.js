"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var exponente = 1;
var base = 1;
var resultado = 0;
function calcularPotencia(base, exponente) {
    resultado = Math.pow(base, exponente);
    return resultado;
}
if (exponente >= 0) {
    base = rls.questionInt("ingrese base: ");
    exponente = rls.questionInt("ingrese exp: ");
    if (exponente === 0) {
        resultado = 1;
        console.log("El resultado es: ".concat(resultado));
    }
    else if (exponente < 0) {
        console.log("El exponente ingresado debe ser mayor o igual a 0");
    }
    else {
        console.log("El resultado es: ".concat(calcularPotencia(base, exponente)));
    }
}
