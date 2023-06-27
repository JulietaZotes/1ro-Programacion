// capturar elementos del form
const form = document.querySelector("form"); // selecciona el primer elemento con ese nombre en el documento

// escucha el evento submit dentro del formulario en vez de al boton enviar
form.addEventListener("submit", handleEnviar); 

function handleEnviar(e) {
    e.preventDefault(); //para evitar que recargue la pagina y se borren los datos
    const formDataObjet = { //creacion objeto literal para almacenar los datos ingresados
        nombre: e.target.nombre.value, // captura desde el evento los valores de cada campo logrando un código más declarativo y facil de entender por otros
        email: e.target.email.value,
        mensaje: e.target.mensaje.value,
    };
    console.log(formDataObjet);
}