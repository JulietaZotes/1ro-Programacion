"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var dividendo = 1;
var divisor = 1;
var resultado = 0;
function esMultiplo(dividendo, divisor) {
    resultado = dividendo % divisor;
}
function cantidadDeDivisores(dividendo) {
    var cantidad = 0;
    for (var i = 1; i <= dividendo; i++) {
        esMultiplo(dividendo, i);
        if (resultado === 0) {
            cantidad++;
        }
    }
    return cantidad;
}
if (dividendo >= 0) {
    var dividendo_1 = rls.questionInt("Ingrese el dividendo y conozca su cantidad de divisores: ");
    var cantidad = cantidadDeDivisores(dividendo_1);
    console.log("El numero ".concat(dividendo_1, " tiene ").concat(cantidad, " divisores"));
}
