let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");


let taskFormHandler = function (event) {
    event.preventDefault();

    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
    let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);

}

let createTaskEl = function (taskDataObj) {
    // create list item
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add task to list
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
