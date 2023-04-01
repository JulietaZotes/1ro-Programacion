/* • Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
   • Para definir hasta qué número desea que muestre la tabla de 
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as rls from "readline-sync";

let multiplicando: number = rls.questionInt("Ingrese el numero a multiplicar: ");
let multiplicador: number = rls.questionInt("Ingrese hasta que numero multiplicar: ");

for(let i: number = 1; i <= multiplicador; i++) {
    let resultado = multiplicando * i;
    console.log(`${multiplicando} x ${i} = ${resultado}`);
}
