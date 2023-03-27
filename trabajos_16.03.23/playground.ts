import * as rls from "readline-sync";
const vuelta1: number = rls.questionFloat ("ingrese el tiempo de la 1era vuelta");
const vuelta2: number = rls.questionFloat ("ingrese el tiempo de la 2da vuelta");
const vuelta3: number = rls.questionFloat ("ingrese el tiempo de la 3era vuelta");
const vuelta4: number = rls.questionFloat ("ingrese el tiempo de la 4ta vuelta");

const tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
const promedio: number = tiempoTotal / 4;
console.log("el tiempo total es de: ", tiempoTotal)
console.log("el promedio es de: ", promedio)
