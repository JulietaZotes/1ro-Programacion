// Ejercicio de secuencia

import * as rls from "readline-sync";

let edadUsuario: number = rls.questionInt("Por favor indique su edad: ")

if (edadUsuario >= 18) {
    console.log("el usuario es mayor de edad")
} else {
    console.log("el usuario es menor de edad")
}
