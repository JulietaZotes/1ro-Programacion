import * as rls from "readline-sync"
let num1: number = rls.questionInt("Primer numero: ");
let num2: number = rls.questionInt("Segundo numero: ");
let num3: number = rls.questionInt("Tercer numero: ");


if (num1 === num2 && num2 === num3 && num1 === num3) {
    console.log("Todos los numeros son iguales")
}
else if(num1 >= num2 && num1 >= num3) {
    console.log("El mayor es: ", num1)
} 
else if(num2 >= num1 && num2 >= num3) {
    console.log("El mayor es: ", num2)
} 
else {
    console.log("El mayor es: ", num3)
} 
