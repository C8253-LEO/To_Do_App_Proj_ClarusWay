const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const deleteAll = document.querySelector(".delete-btn");

// add task
addBtn.addEventListener("click", function () {
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = input.value + '<button class="delete-item"><i class="fas fa-trash-alt"></i></button>';
    document.querySelector("ul").appendChild(li);
    input.value = "";
});

// delete all task
deleteAll.addEventListener("click", function (event) {
    document.querySelector("ul").remove();
    input.value = "";
});

// delete a task
const ul = document.querySelector("ul");
ul.addEventListener("click", (event) => {
    if (event.target.className === "fas fa-trash-alt") {
        event.target.parentElement.parentElement.classList.add("delete-task");
    }
});