"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var n = rls.questionInt("Ingrese un numero: ");
if (n % 2 == 0) {
    console.log("El numero", n, "es par");
}
else {
    console.log("El numero", n, "es impar");
}
