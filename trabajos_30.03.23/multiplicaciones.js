"use strict";
/* • Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
   • Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/
exports.__esModule = true;
var rls = require("readline-sync");
var multiplicando = rls.questionInt("Ingrese el numero que quiere multiplicar: ");
var multiplicador = rls.questionInt("Ingrese hasta que numero desea multiplicar: ");
for (var i = 1; i <= multiplicador; i++) {
    var resultado = multiplicando * i;
    console.log("".concat(multiplicando, " x ").concat(i, " = ").concat(resultado));
}
