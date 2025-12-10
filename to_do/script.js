document.addEventListener('DOMContentLoaded' , () => {
    const todoInput = document.getElementById("todo-input")
    const addTaskButton = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")



    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    tasks.forEach(task => renderTask(task));


    addTaskButton.addEventListener('click' , () => {
        const taskText = todoInput.value.trim()
        if(taskText === "") return

        const newTask = {
            id : Date.now(),
            text : taskText,
            completed :false
        }

        tasks.push(newTask)

        saveTasks()
        renderTask(newTask)

        todoInput.value = "" //clear input
        console.log(tasks);

    })

    function renderTask(task){
        const li = document.createElement('li')
        li.setAttribute('data-id' , task.id)
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `
        //event listener for target area other than the button 
        li.addEventListener("click" , (e) =>{
            if(e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks()
        })

        //event listener only for button 
        li.querySelector("button").addEventListener('click' , (e) => {
            e.stopPropagation //prevent togglr from firing
            tasks = tasks.filter(t => t.id != task.id)
            li.remove() 
            saveTasks()
        })
        todoList.appendChild(li)
    }

    //saving tasks in localstorage
    function saveTasks(){
        localStorage.setItem("tasks" , JSON.stringify(tasks)); //setItem takes parameter as key value(both in string , so array directly can't be stored)

    }
})

