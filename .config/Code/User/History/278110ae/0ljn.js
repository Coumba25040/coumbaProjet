let taskInput = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")
let taskCounter = document.getElementById("taskCounter")

let tabList = []

taskInput.addEventListener("keypress", function (e) {

    if(e.key === "Enter" && ){
    let valeur = taskInput.value
    tabList.push(valeur)
    taskList.textContent = tabList 

    }else{
        tabList.textContent = " "
    }
    
   

})
