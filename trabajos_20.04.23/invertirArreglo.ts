/*
Almacene en un arreglo de tamaño N los números ingresados por el usuario.
La dimensión N también es ingresada por el usuario.
Muestre los números del arreglo pero del último al primero.
*/
import * as rls from "readline-sync";

const dim: number = rls.questionInt("Dimension del arreglo: ");
let numArr: number [] = new Array (dim);
for (let i = 0; i < numArr.length; i ++){
    numArr[i] = rls.questionInt("Ingrese un numero: ");
}
for (let i = numArr.length - 1; i >= 0; i --){
    console.log(numArr[i]);
}