document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", function(event){
    event.preventDefault();
    // rightId = form.getElementById("new-task-description")
    // buildToDo(document.getElementById("new-task-description").value);
    let val = document.getElementById("new-task-description").value;
    buildToDo(val);
    form.reset();
    // console.log(document.getElementById("new-task-description").value)
    // console.log(event.target["new-task-description"].value)
  }
)
});

function buildToDo(todo){
  let li = document.createElement("li");
  // li.innerHTML = `${todo} <button>x</button>`
  // let btn = document.createElement("button");
  // btn.addEventListener("click", deleteToDo);
  // btn.textContent = ' x '
  // li.append(btn);
  li.textContent = todo;
  document.getElementById("tasks").append(li);
}

function deleteToDo(event){
  event.target.parentNode.remove();
}
