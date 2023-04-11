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

import * as rls from "readline-sync";

let nombreAlumno: string  = " ";
let notaPractica = 1
let notaProblemas = 1
let notaTeoria = 1
let resultado = 0

function validarNota(nota: number): boolean {
    return nota >= 0 && nota <= 10;
}

while(true) {
    let nombreAlumno: string  = rls.question("Ingresa tu nombre: ");
    if(nombreAlumno === ""){
        console.log("No hay mas alumnos para mostrar.");
        break;
    }
    let notaPractica = rls.questionInt("Ingresa tu nota de practica: ");
    let notaProblemas = rls.questionInt("Ingresa tu nota de problemas: ");
    let notaTeoria = rls.questionInt("Ingresa tu nota de teoria: "); 
    resultado = notaPractica*0.1 + notaProblemas*0.5 + notaTeoria*0.4;
    if(validarNota(notaPractica) && validarNota(notaProblemas) && validarNota(notaTeoria)) {
        console.log(`Tu calificacion ${nombreAlumno} es de: ${resultado}`);
    } else {
      console.log("ERROR! Las notas ingresadas deben estar entre 0-10")
    }
}