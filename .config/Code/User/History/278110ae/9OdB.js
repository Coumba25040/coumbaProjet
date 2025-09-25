let taskInput = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")
let taskCounter = document.getElementById("taskCounter")

taskInput.addEventListener("keypress", function () {
    taskInput.value 
    taskList.textContent = taskInput.value
})
