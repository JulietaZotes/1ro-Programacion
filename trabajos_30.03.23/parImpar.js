"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num = 0;
while (num <= 0) {
    num = rls.questionInt("Ingrese un numero mayor que cero: ");
}
if (num % 2 == 0) {
    console.log("El numero", num, "es par");
}
else {
    console.log("El numero", num, "es impar");
}
