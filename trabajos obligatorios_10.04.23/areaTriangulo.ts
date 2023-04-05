
import * as rls from "readline-sync";


let area = 0

function calcularAreaTriangulo (base: number, altura: number){
    area = (base * altura)/2
    return area;
} 

/*console.log(calcularAreaTriangulo(2,4))

let areaPar1 = (calcularAreaTriangulo(1,2))

console.log(areaPar1)*/

/*let base = 0
let altura = 0

while(base <= 7 && altura <= 14){
    base = rls.questionInt("ingrese base: ");
    altura = rls.questionInt("ingrese la altura");
   }*/
