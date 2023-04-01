
let resultado: string = ""
for(let num = 1; num <=100; num++) {
   if(num % 2 === 0 || num % 3 === 0) // += es lo mismo que poner resultado = resultado
    if(num < 100) {
     resultado += `${num}, `;
    }else {
     resultado += `${num}.`;
    }  
}
console.log(resultado);
