//•Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine si el cliente tiene descuento del 15% o no

import * as rls from "readline-sync";
let precioUnitario: number = rls.questionInt("Ingrese el precio unitario: $");
let cantidad: number = rls.questionInt("Ingrese la cantidad de producto: ");
let ingresoMes: string = rls.question("Ingrese el mes de la compra: ");
let mes: string = "octubre"

if(ingresoMes == mes) {
    console.log("¡Felicitaciones, ud recibira un 15% de descuento en su compra!")
} else {
    console.log("Gracias por su compra")
}


