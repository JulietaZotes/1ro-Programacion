const idABorrar = 2;

const todos = [
    { id: 1, description: "comprar cosas", isCompleted: false },
    { id: 2, description: "vender las cosas que compre", isCompleted: false },
    { id: 3, description: "comprar más cosas", isCompleted: false },
]

const filterTodos = todos.filter((todo) => todo.id !== idABorrar);

console.log(filterTodos);
