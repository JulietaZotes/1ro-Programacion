/*Sueldo Actual      Sueldo con Aumento
0 - 15.000 $         20%
15.001 - 20.000 $    10%
20.001 - 25.000 $    5%
Más de 25.000 $      No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre*/

import * as rls from "readline-sync";

let sueldoActual: number = rls.questionInt("Ingrese su sueldo actual: $");
let aumento: number = 0 

if(sueldoActual <= 15000) {
    aumento = sueldoActual * 0.2
    console.log("Su aumento sera de: $", aumento)
}
else if(sueldoActual <= 20000) {
    aumento = sueldoActual * 0.1
    console.log("Su aumento sera de: $", aumento)
}
else if(sueldoActual <= 25000) {
    aumento = sueldoActual * 0.5
    console.log("Su aumento sera de: $", aumento)
}
else {
    console.log("No recibira aumento de suelto")
}