"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var dividendo = 1;
var divisor = 1;
var resultado = 0;
function esMultiplo(dividendo, divisor) {
    resultado = dividendo % divisor;
    if (resultado === 0) {
        return true;
    }
    else {
        return false;
    }
}
if (dividendo >= 0) {
    var dividendo_1 = rls.questionInt("Ingrese el dividendo: ");
    var divisor_1 = rls.questionInt("Ingrese el divisor: ");
    if (dividendo_1 < 0 || divisor_1 < 0) {
        console.log("Error. Ingrese solamente numeros positivos.");
    }
    else {
        console.log(esMultiplo(dividendo_1, divisor_1));
    }
}
