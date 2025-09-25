let taskInput = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")
let taskCounter = document.getElementById("taskCounter")

taskList = []

taskInput.addEventListener("keypress", function () {
    
   let valeur = taskInput.value
    taskList.push(valeur)
})
