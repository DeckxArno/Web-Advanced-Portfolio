let ToDo = [];

function laadToDoLijst() {
  const opslaan = localStorage.getItem('ToDo');
  if (opslaan) {
    ToDo = JSON.parse(opslaan);
  }
  updateToDoLijst();
}

function opslaanToDoList() {
  localStorage.setItem('ToDo', JSON.stringify(ToDo));
}

function addToDoWithDelay(note) {
  return new Promise((resolve) => {
    setTimeout(() => {
      ToDo.push(note);
      opslaanToDoList();
      resolve();
    }, 1000);
  });
}

function deleteToDoWithDelay(index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      ToDo.splice(index, 1);
      opslaanToDoList();
      resolve();
    }, 1000);
  });
}

function updateToDoLijst() {
  const ToDoList = document.getElementById('ToDo-list');
  ToDoList.innerHTML = '';

  ToDo.forEach((note, index) => {
    const listItem = document.createElement('li');
    
    const noteText = document.createElement('span');
    noteText.textContent = note;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async () => {
      await deleteToDoWithDelay(index);
      updateToDoLijst();
    });

    listItem.appendChild(noteText);
    listItem.appendChild(deleteButton);
    ToDoList.appendChild(listItem);
  });
}

async function addNote() {
  const ToDoInput = document.getElementById('ToDo-input');
  const ToDoText = ToDoInput.value.trim();

  if (ToDoText !== '') {
    await addToDoWithDelay(ToDoText);
    updateToDoLijst();
    ToDoInput.value = '';
  }
}

document.getElementById('add-note').addEventListener('click', addNote);

document.getElementById('ToDo-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addNote();
  }
});

document.addEventListener('DOMContentLoaded', laadToDoLijst);