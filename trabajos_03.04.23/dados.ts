/*• Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor
• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por el usuario)*/

import * as rls from "readline-sync";

let cantidadDados = rls.questionInt("Ingrese cuantos dados quiere tirar: ");
let probabilidad = Math.pow(6, cantidadDados)

console.log(`La probabilidad de sacar todas las caras 6 es de: 1/${probabilidad}`)