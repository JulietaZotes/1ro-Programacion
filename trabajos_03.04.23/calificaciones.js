"use strict";
/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/
exports.__esModule = true;
var rls = require("readline-sync");
var nombreAlumno = " ";
var notaPractica = 1;
var notaProblemas = 1;
var notaTeoria = 1;
var resultado = 0;
function validarNota(nota) {
    return nota >= 0 && nota <= 10;
}
while (true) {
    var nombreAlumno_1 = rls.question("Ingrese su nombre: ");
    if (nombreAlumno_1 === "") {
        console.log("No hay mas alumnos para mostrar.");
        break;
    }
    var notaPractica_1 = rls.questionInt("Ingrese su nota de practica: ");
    var notaProblemas_1 = rls.questionInt("Ingrese su nota de problemas: ");
    var notaTeoria_1 = rls.questionInt("Ingrese su nota de teoria: ");
    resultado = notaPractica_1 * 0.1 + notaProblemas_1 * 0.5 + notaTeoria_1 * 0.4;
    if (validarNota(notaPractica_1) && validarNota(notaProblemas_1) && validarNota(notaTeoria_1)) {
        console.log("Tu promedio ".concat(nombreAlumno_1, " es de: ").concat(resultado));
    }
    else {
        console.log("ERROR! Las notas ingresadas deben estar entre 0-10");
    }
}
