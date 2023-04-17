
import * as rls from "readline-sync";

let exponente = 1
let base = 1
let resultado = 0;

function calcularPotencia(exponente: number, base: number) {
 resultado = Math.pow(exponente,base)
    return resultado;
}


if (exponente >= 0){

    base = rls.questionInt("ingrese base: ")
    exponente = rls.questionInt("ingrese exp: ")
    
    if (exponente === 0){
        resultado = 1
        console.log(`El resultado es: ${resultado}`);
    }
    else if (exponente < 0){
      console.log("El exponente ingresado debe ser mayor o igual a 0");  
    }
    else {
        console.log(`El resultado es: ${calcularPotencia(exponente,base)}`)
    }
}