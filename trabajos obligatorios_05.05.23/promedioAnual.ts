// Algoritmo que permita cargar nombre de alumno y sus notas en los tres trimestres.
// Calcular el promedio anual del alumno y mostrarlo en pantalla.

import * as rls from "readline-sync";

let nombreAlumno: string = rls.question("Ingrese su nombre: ");
const arrayNotas: number [] = new Array (3);

function cargarNotas (nota: number[]): void {
    for (let i: number = 1; i <= 3; i ++){
        nota [i] = rls.questionInt(`Ingrese su nota del trimestre ${i}: `);
    }
}

let promedio = 0
let suma = 0

function promedioAnual (array: number[]): number {
for (let i: number = 1; i <= 3; i ++){
    suma = suma + array[i];
}
promedio = suma / 3;
return promedio;
}

cargarNotas(arrayNotas);
promedioAnual(arrayNotas);
console.log(`${nombreAlumno}, tu promedio anual es: ${promedio}`)