function otraFuncion () {
    console.log("Estoy en la primera funcion"); // se DECLARA la funcion
}

otraFuncion(); // se EJECUTA la funcion

let miFuncion = function (){
    console.log("Estoy en la segunda funcion");
}

miFuncion();

let arrowFunction = () => {   
    console.log("Estoy en la tercera funcion");
} // ()funcion => flecha. Es mas corta de escribir ya que no usa la palabra reservada function, solo () =>

arrowFunction();

