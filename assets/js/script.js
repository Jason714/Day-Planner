var todoInput = document.querySelector("#todo-text");
var todos = [];

function storeTodos() {

    localStorage.setItem("todo", JSON.stringify(todo));
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var todoText = todoInput.value.trim();
        if (todoText === "") {
            return;
        }
    });
}

