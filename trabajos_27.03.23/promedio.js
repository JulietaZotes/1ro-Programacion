"use strict";
exports.__esModule = true;
// iteraciones, sumar 10 notas y mostrar promedio
var rls = require("readline-sync");
var nota, suma, promedio, contador; // para no hacer muchas lineas, se escriben variables de un mismo tipo juntas
contador = 1;
suma = 0;
while (contador <= 10) {
    nota = rls.question("Ingrese una nota: ");
    suma = suma + nota;
    contador = contador + 1; // variable de control
}
promedio = suma / 10;
console.log("El promedio de notas es: ", promedio);
