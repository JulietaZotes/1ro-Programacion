"use strict";
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
exports.__esModule = true;
var rls = require("readline-sync");
var claveCorrecta = "eureka";
var ingresoClave = rls.question("Ingrese su clave: ");
var intentos = 0;
for (intentos = 3; intentos > 0; intentos - 1) {
    if (ingresoClave === claveCorrecta) {
        console.log("¡Ha ingresado correctamente!");
        break;
    }
    else {
        intentos - 1;
        if (intentos === 0) {
            console.log("Ha agotado todos los intentos para acceder.");
        }
        else {
            console.log("Clave incorrecta. Quedan", intentos, "intentos.");
        }
    }
}
