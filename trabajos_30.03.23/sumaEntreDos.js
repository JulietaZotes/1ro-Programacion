"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese el primer numero entero: ");
var num2 = rls.questionInt("Ingrese el segundo numero entero: ");
var resultado = 0;
if (num1 > num2) { // ver como dar vuelta los numeros
    var temp = num1; // se intercambian los valores de las variables utilizando una variable temporal `temp`
    num1 = num2;
    num2 = temp;
}
for (var num = num1; num <= num2; num++) {
    resultado = resultado + num;
}
console.log("la suma de los numeros entre ".concat(num1, " y ").concat(num2, " es de = ").concat(resultado));
