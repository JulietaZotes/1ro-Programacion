
/* • Almacene en un arreglo de dimension N numeros.
   • Muestre cuantos numeros son positivos, cuantos negativos y cuantos ceros hay */

import * as rls from "readline-sync";

const arrayDim: number = rls.questionInt("Ingrese la dimension del arreglo: ");
const arrayNum: number [] = new Array (arrayDim);

for (let i = 0; i < arrayNum.length; i ++){
    arrayNum[i] = rls.questionInt("Ingrese un numero: ");
}
console.log (arrayNum);

let sumaPositivos = 0
let sumaNegativos = 0
let sumaCeros = 0

for(let i = 0; i < arrayNum.length; i ++){

   if(arrayNum[i] > 0){
     sumaPositivos ++
   } else if(arrayNum[i] < 0){
     sumaNegativos ++ 
   } else{
     sumaCeros ++
   }
}
console.log (`${sumaPositivos} son positivos, ${sumaNegativos} son negativos y ${sumaCeros} ceros`);