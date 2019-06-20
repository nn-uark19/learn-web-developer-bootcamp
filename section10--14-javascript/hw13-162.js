console.log('Begin js');
toDoList = ['Study Javascript'];
window.setTimeout(function () {
  var choice = prompt('What action you want to do?');
  while (choice != 'quit') {
    if (choice == 'new') {
      addToDo();
    } else if (choice == 'list') {
      listToDo();
    } else if (choice == 'delete') {
      deleteTodo();
    }
    choice = prompt('What action you want to do?');
  }
  console.log('End js');

  function listToDo() {
    console.log('*********');
    toDoList.forEach(function (item, i) {
      console.log('%d: %s', i, item);
    });
    console.log('*********');
  }

  function addToDo() {
    input = prompt('Add new to do?');
    toDoList.push(input);
  }

  function deleteTodo() {
    input = prompt('Delete to do number?');
    toDoList.splice(input, 1);
  }
}, 500);