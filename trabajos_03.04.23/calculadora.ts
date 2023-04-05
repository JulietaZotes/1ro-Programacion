// crear funciones para evitar la repeticion de codigo

import * as rls from "readline-sync";

let i: number
let linea: string

let n1 = rls.questionInt("Ingrese el primer numero: ");
let n2 = rls.questionInt("Ingrese el segundo numero: ");
let opciones = rls.questionInt("Ingrese opcion 1 para sumar, opcion 2 para restar, presione cualquier tecla para salir: ");

function guiones (cantidad: number) {
    linea = "-";
    for(let i = 0; i <= cantidad; i++){
        linea = linea + "-"
    } 
    return linea; // devuelve el valor de la variable. Con el return no hace falta poner console.log, porque retorna solo el valor
} 
// al agregarle un parametro (cantidad: number), permite que cada vez que se llama a esta unica funcion pueda cambiarse el valor de la misma en ()

let guiones40 = guiones(40); // se declara una variable que ejecuta la funcion con el parametro que yo quiera

if(opciones == 1) {
    guiones(40);
    console.log("El resultado de la suma es: ", n1 + n2);
    console.log(guiones(40)); // se pone aca mismo el parametro
}else if(opciones == 2) {
    guiones(40);
    console.log("El resultado de la resta es: ", n1 - n2);
    guiones(40);
}