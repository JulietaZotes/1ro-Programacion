// aplicar descuento del 10% en comprar mayores a $1000
import * as rls from "readline-sync";
let precioFinal : number = 0;
let precioProducto1 : number = 200;
let precioProducto2 : number = 350;
let subtotal: number = 0;
let valorDescuento: number = 0;

let cantidadProducto1: number = rls.questionInt("cantidad de producto 1 que se compro: ")
let cantidadProducto2: number = rls.questionInt("cantidad de producto 2 que se compro: ")

subtotal = (cantidadProducto1 * precioProducto1) + (cantidadProducto2 * precioProducto2);

console.log("el usuario compro:", cantidadProducto1, "del producto 1", "\nel usuario compro:", cantidadProducto2, "del producto 2", "\nsubtotal $", subtotal);

if (subtotal > 1000) {
    valorDescuento = subtotal * 0.1;
    precioFinal = subtotal - valorDescuento;
    console.log("ud. ahorra $", valorDescuento, "por haber gastado mas de $1000", "\nel precio final es $", precioFinal, "\n¡Gracias por su compra!");
} else {
    precioFinal = subtotal;
    console.log("¡gracias por comprar aqui!", "\nel precio final es $", precioFinal);
}

