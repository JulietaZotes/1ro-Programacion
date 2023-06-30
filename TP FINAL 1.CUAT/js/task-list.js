const btnAddTask = document.getElementById("add-task");

btnAddTask.addEventListener("click", addTask);

document.getElementById("list").addEventListener("change", changeAction);

var taskID = 1;

// funcion agregar tarea 

function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if(taskText === "") {
        alert("Ingrese un objeto válido");
        return;
    }

    var listItem = document.createElement("li"); // define el tipo de elemento a crear
    listItem.setAttribute("id","task-"+taskID); // setea un nuevo atributo id, clave: id y valor: task- + taskID+1 por cada tarea
    listItem.classList.add("task"); // se le agrega la clase task para dar estilo
    // listItem.classList.add("mantener"); // se le agrega la clase .mantener como default 
    listItem.innerHTML = `<span class="task-text">${taskText}</span>
                          <select class="mantener">  
                          <option value="mantener">Mantener</option>
                          <option value="renovar">Renovar</option>
                          <option value="eliminar">Eliminar</option>
                          </select>`;
    document.getElementById("list").appendChild(listItem);
    taskInput.value = "";
    taskID++;
}

// funcion cambiar acción del list item 

function changeAction (event) {
    var taskItem = event.target;
    console.log(`Task item: ${taskItem}`);

    // var taskID = taskItem.getAttribute(id);
    // console.log(`task id: ${taskID}`);
    
    var taskAction = event.target.value;
    console.log(`Task action: ${taskAction}`);

    taskItem.classList.remove("mantener", "renovar", "eliminar");
    taskItem.classList.add(taskAction);
}