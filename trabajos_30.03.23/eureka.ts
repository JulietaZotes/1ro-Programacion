/*• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa*/

import * as rls from "readline-sync";

const claveCorrecta = "eureka";
let intentos = 3;

while (intentos > 0) {
  let claveIngresada = rls.question("Ingrese la clave:");

  if (claveIngresada === claveCorrecta) {
    console.log("¡Ha ingresado correctamente!.");
    break; // es la declaración para salir del bucle
  } else {
    intentos-1;
    if (intentos === 0) {
      console.log("Se agotaron todas las oportunidades.");
    } else {
      console.log("Clave incorrecta. Te quedan", intentos, "intentos.");
    }
  }
}