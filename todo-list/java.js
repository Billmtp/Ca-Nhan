const todolist = [];

function show() {
  let todolisthtml = "";
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const name = todo.name;
    const date = todo.date;
    const html = `
    <div class="output">
        <div>
        ${name}
        </div>
        
        <div>${date}</div>
        <div><button class="outputbutton" onclick="
        todolist.splice(${i}, 1);
        show();
        ">Delete</button> </div>
    </div>`;

    todolisthtml += html;
  }
  console.log(todolisthtml);
  document.querySelector(".jstodolist").innerHTML = todolisthtml;
}
function addlist() {
  const name = document.querySelector(".todolistjs").value;
  const date = document.querySelector(".datejs").value;
  todolist.push({ name, date });
  console.log(todolist);
  document.querySelector(".todolistjs").value = "";
  show();
}
