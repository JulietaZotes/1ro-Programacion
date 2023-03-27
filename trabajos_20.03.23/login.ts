import * as rls from "readline-sync";

let usuario: string = "Juan"
let contraseña: string = "claveJuan"

let ingresoUsuario: string = rls.question("Ingrese su nombre de usuario: ");
let ingresoContraseña: string = rls.question("Ingrese su contraseña: ");

if ((usuario == ingresoUsuario) && (contraseña == ingresoContraseña)) {
   console.log("Ha ingresado correctamente")
}
else {
    console.log("El usuario y/o contraseña son incorrectos")
}
