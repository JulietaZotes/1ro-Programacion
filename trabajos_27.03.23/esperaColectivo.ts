import * as rls from "readline-sync";

let pregunta, esperar, subir: string;
pregunta = rls.question("Esta viniendo el colectivo? ") // el usuario solo puede ingresar S o N
esperar = "N"
subir = "S"

while(pregunta == "N") {
    console.log("Sigue esperando el colectivo");
    pregunta = rls.question("Ya vino el colectivo? ")
    if(pregunta == "S") {
        console.log("Llego el colectivo");
    } else {
        console.log("Ingrese una respuesta valida");
        pregunta = rls.question("cual es tu nueva respuesta? ")
    }
}
