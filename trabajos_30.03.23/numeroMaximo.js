"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num = rls.questionInt("Ingrese un numero positivo o negativo: ");
var max = 0;
while (num != 0) {
    if (max <= num)
        max = num;
    num = rls.questionInt("Ingrese otro numero: ");
}
console.log("El numero maximo es: ".concat(max));
