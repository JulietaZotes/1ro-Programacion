import * as rls from "readline-sync";

let num: number = rls.questionInt("Ingrese un numero positivo o negativo: ");
let max = 0
while (num != 0) {
    if (max <= num){
    max = num
    }
num = rls.questionInt("Ingrese otro numero: ") 
} 
console.log(`El numero maximo es: ${max}`);