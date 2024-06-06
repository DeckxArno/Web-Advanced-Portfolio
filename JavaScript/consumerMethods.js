let ToDo = [];

function addNoteWithDelay(note) {
  return new Promise((resolve) => {
    setTimeout(() => {
      ToDo.push(note);
      resolve();
    }, 1000);
  });
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

async function addNote() {
  const ToDoInput = document.getElementById('ToDo-input');
  const ToDoText = ToDoInput.value.trim();

  if (ToDoText !== '') {
    await addNoteWithDelay(ToDoText);
    updateToDoList();
    ToDoInput.value = '';
  }
}

document.getElementById('add-note').addEventListener('click', addNote);

document.getElementById('ToDo-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addNote();
  }
});
