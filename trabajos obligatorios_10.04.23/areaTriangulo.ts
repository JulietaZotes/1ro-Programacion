
import * as rls from "readline-sync";


let area = 0

function calcularAreaTriangulo (base: number, altura: number){
    area = (base * altura)/2
    return area;
} 

for (let n:number = 1; n<=7; n ++){
    let base = n;
    let altura = n * 2;
    let resultado = calcularAreaTriangulo(base,altura);
    console.log(`El area de un triangulo cuya base es ${base} y altura ${altura} es: ${resultado}`);
}