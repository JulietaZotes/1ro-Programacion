
import * as rls from "readline-sync";
let dividendo: number = 1
let divisor: number = 1
let resultado: number = 0

function esMultiplo (dividendo: number, divisor: number) {
    resultado = dividendo%divisor;
    if(resultado === 0){
      return true;
    } else {
      return false;
    }
}


if(dividendo >= 0){
    let dividendo=rls.questionInt("Ingrese el dividendo: ");
    let divisor=rls.questionInt("Ingrese el divisor: ");
    if (dividendo < 0 || divisor < 0){
        console.log("Error. Ingrese solamente numeros positivos.");
    }else{
    console.log(esMultiplo(dividendo,divisor));
    }
}