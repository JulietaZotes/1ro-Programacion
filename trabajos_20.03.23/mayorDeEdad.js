"use strict";
// Ejercicio de secuencia
exports.__esModule = true;
var rls = require("readline-sync");
var edadUsuario = rls.questionInt("Por favor indique su edad: ");
if (edadUsuario >= 18) {
    console.log("el usuario es mayor de edad");
}
else {
    console.log("el usuario es menor de edad");
}
