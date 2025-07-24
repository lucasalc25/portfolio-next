// Seleção de elementos
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const editForm = document.querySelector("#edit-form");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const removeBtn = document.querySelector(".remove-task");
const editInput = document.querySelector("#edit-input");
const editBtn = document.querySelector("#edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-btn");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

// Funções
const saveTask = (taskTitle, done = 0, save = 1) => {
     const task = document.createElement('div');
     task.classList.add("task");
     
     const title = document.createElement('h3');
     title.innerText = taskTitle;
     task.appendChild(title);

     const finishBtn = document.createElement('button');
     finishBtn.classList.add("finish-task");
     finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
     task.appendChild(finishBtn);

     const editBtn = document.createElement('button');
     editBtn.classList.add("edit-task");
     editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
     task.appendChild(editBtn);

     const removeBtn = document.createElement('button');
     removeBtn.classList.add("remove-task");
     removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
     task.appendChild(removeBtn);

    // Utilizando dados da LocalStorage
    if(done) {
        task.classList.add("done")
    }

    if(save) {
        saveTaskLocalStorage({ taskTitle, done });
    }

     taskList.appendChild(task);

     saveTaskLocalStorage (task);

     taskInput.value = "";
     taskInput.focus();
}

const toggleForms = () => {
    taskForm.classList.toggle("hide");
    editForm.classList.toggle("hide");
    taskList.classList.toggle("hide");
}

const updateTask = (taskTitle) => {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach((task) => {
        let newtaskTitle = task.querySelector("h3");

        if(newtaskTitle.innerText === oldInputValue) {
            newtaskTitle.innerText = taskTitle;
        }
    })
}

const getSearchTasks = (search) => {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach((task) => {
        let taskTitle = task.querySelector("h3").innerText.toLowerCase();

        const normalizeSearch = search.toLowerCase();

        task.style.display = "flex";

        if(!taskTitle.includes(search)) {
            task.style.display = "none";
        }

    })
};

const filterTaks = (filterValue) => {
    const tasks = document.querySelectorAll(".task");

    switch(filterValue) {
        case "all":
            tasks.forEach((task) => task.style.display = "flex");
            break;
        case "done":
            tasks.forEach((task) => task.classList.contains("done") ? task.style.display = "flex" : task.style.display = "none");
            break;
        case "pending":
            tasks.forEach((task) => !task.classList.contains("done") ? task.style.display = "flex" : task.style.display = "none");
            break; 
    
        default:
            break;        
    }
}

// Eventos
// Tarefas
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = taskInput.value;

    if(inputValue) {
        // Salvar a tarefa
        saveTask(inputValue);
    }
})

// Cliques em elementos da página
document.addEventListener("click", (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest("div");
    let taskTitle;

    if(parentElement && parentElement.querySelector("h3")) {
        taskTitle = parentElement.querySelector("h3").innerText;
    }

    if(targetElement.classList.contains("finish-task")) { parentElement.classList.toggle("done"); }

    if(targetElement.classList.contains("remove-task")) { parentElement.remove(); }

    if(targetElement.classList.contains("edit-task")) { 
        toggleForms();
        editInput.value = taskTitle;
        oldInputValue = taskTitle;
    }
})

// Cancelar edição
cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})

// Confirmar edição
editBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newEditInput = editInput.value;

    if(newEditInput) {
        // Atualizar
        updateTask(newEditInput);
    }

    toggleForms();
})

// Pesquisa
searchInput.addEventListener("keyup", (e) => {

    const search = e.target.value;

    getSearchTasks(search);
})

// Limpar pesquisa
eraseBtn.addEventListener("click", (e) => {
    e.preventDefault();

    searchInput.value = "";

    searchInput.dispatchEvent(new Event("keyup"));
})

// Filtro
filterBtn.addEventListener("change", (e)=> {
    const filterValue = e.target.value;

    filterTaks(filterValue);
})

// Local Storage
const getTasksLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
};

const saveTaskLocalStorage = (task) => {

    // Pegar todas as tarefas
    const tasks = getTasksLocalStorage();

    // Adicionar nova tarefa no array
    tasks.push(task);

    //Salvar tudo na LocalStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
};