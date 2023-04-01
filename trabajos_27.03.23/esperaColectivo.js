"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var pregunta, esperar, subir;
pregunta = rls.question("¿Esta viniendo el colectivo?"); // el usuario solo puede ingresar S o N
esperar = "N";
subir = "S";
while (pregunta == "N") {
    console.log("Sigue esperando el colectivo");
    pregunta = rls.question("¿Seguis esperando?");
}
console.log("Llego el colectivo");
