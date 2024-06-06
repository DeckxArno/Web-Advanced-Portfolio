let ToDo = [];

function addNote() {
  const ToDoInput = document.getElementById('ToDo-input');
  const ToDoText = ToDoInput.value.trim();

  if (ToDoText !== '') {
    ToDo.push(ToDoText);
    updateToDoList();
    ToDoInput.value = '';
  }
}

function updateToDoList() {
  const ToDoList = document.getElementById('ToDo-list');
  ToDoList.innerHTML = '';

  ToDo.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = note;
    ToDoList.appendChild(listItem);
  });
}

document.getElementById('add-note').addEventListener('click', addNote);

document.getElementById('ToDo-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addNote();
  }
});